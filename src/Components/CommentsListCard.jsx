import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';
import dateFormat from 'dateformat';
import { useContext, useState } from 'react'
import ActiveUserContext from '../Context/ActiveUser'
import { deleteComment } from '../api';
import Container from 'react-bootstrap/esm/Container';


const CommentListCard = (props) => {
  const { activeUser } = useContext(ActiveUserContext)
  const error = 'Something has gone wrong, please try again'
	const [showError, setShowError] = useState(false) 
  const [votes, setVotes] = useState('')
  const [err, setErr] = useState(null);

  function handleDelete() {
    const commentID = props.comment.comment_id
		deleteComment(commentID)
      .then(() =>{
      })
			.then(() => {
				props.setComments((currentComments)=> {
					return currentComments.filter((comment) => comment.comment_id !== commentID)
				})
			})			
      .catch((err) => {
        console.log(err.response);
				setShowError(true)
			})
  }
 //need to get vote state sorted
 
  const handleUpVote = (event) => {
    setVotes((currentVote) => currentVote +1);
    setErr(null)
    patchComment(1, comment_id).catch((err) => {
        setVotes((currentVote) => currentVote -1)
        setErr(err)
    })
  }
  function handleDownVote(event){
      setVotes((currentVote) => currentVote -1);
      setErr(null)
      patchComment(-1, comment_id).catch((err) => {
          setVotes((currentVote) => currentVote +1)
          setErr(err)
      })
  };

  if (props.comment.author === activeUser.username) {
       return (
       <Container>
        <ShowMessage
          showError={showError}
          setShowError={setShowError}
          error={error}
        />
        <Card className="my-1 p-0 text-start">
            <Card.Subtitle className="mt-1 ms-1 text-muted">Posted At: {dateFormat(props.comment.created_at, "mmmm dS, yyyy, HH:MM")}</Card.Subtitle>
          <Card.Body className="ms-1">
            {props.comment.body}
            <Card.Subtitle className="mt-2 text-muted">Author: {props.comment.author}   
           </Card.Subtitle>
            <Card.Text className="mt-2">
            <Button className="me-2" variant="primary" onClick={handleUpVote}>Upvote</Button>
            <Button className="mx-2" variant="secondary" onClick={handleDownVote}>Downvote</Button> Votes: {props.comment.votes} 
            <Button className="ms-2" data-toggle="button" variant="danger" onClick={handleDelete}>Delete</Button></Card.Text>
          </Card.Body>
        </Card>
        </Container>
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

  function ShowMessage({ showError, setShowError, error}) {
      if (showError) {
        return (
          <Alert
            variant="danger"
            onClose={() => setShowError(false)}
            dismissible
          >
          <p>{error}</p>
          </Alert>
          )
        }
    }

export default CommentListCard