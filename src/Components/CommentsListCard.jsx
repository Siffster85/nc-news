import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import dateFormat from 'dateformat';
import { useContext } from 'react'
import ActiveUserContext from '../Context/ActiveUser'
import { deleteComment } from '../api';


const CommentListCard = (props) => {
  const { activeUser } = useContext(ActiveUserContext)

  function handleDelete() {
		deleteComment(props.comment.comment_id)
			.then(() => {
				props.setComments((currentComments)=> {
					const updatedComments = [...currentComments]
					return updatedComments
				})
			})
  }

  if (props.comment.author === activeUser.username) {
       return (
        <Card className="my-1 p-0 text-start">
            <Card.Subtitle className="mt-1 ms-1 text-muted">Posted At: {dateFormat(props.comment.created_at, "mmmm dS, yyyy, HH:MM")}</Card.Subtitle>
          <Card.Body className="ms-1">
            {props.comment.body}
            <Card.Subtitle className="mt-2 text-muted">Author: {props.comment.author}   
           </Card.Subtitle>
            <Card.Text className="mt-2">
            <Button className="me-2" variant="primary">Upvote</Button>
            <Button className="mx-2" variant="secondary">Downvote</Button> Votes: {props.comment.votes} 
            <Button className="ms-2" variant="danger" onClick={handleDelete}>Delete</Button></Card.Text>
          </Card.Body>
        </Card>
      );}
      else {
        return (
        <Card className="my-1 p-0 text-start">
            <Card.Subtitle className="mt-1 ms-1 text-muted">Posted At: {dateFormat(props.comment.created_at, "mmmm dS, yyyy, HH:MM")}</Card.Subtitle>
          <Card.Body className="ms-1">
            {props.comment.body}
            <Card.Subtitle className="mt-2 text-muted">Author: {props.comment.author}
           </Card.Subtitle>
            <Card.Text className="mt-2">
            <Button className="me-2" variant="primary">Upvote</Button>
            <Button className="mx-2" variant="secondary">Downvote</Button> Votes: {props.comment.votes} </Card.Text>
          </Card.Body>
        </Card>
      );
      }
    }
export default CommentListCard