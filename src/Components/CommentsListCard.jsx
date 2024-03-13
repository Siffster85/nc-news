import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import dateFormat from 'dateformat';


function CommentListCard({comment}){
    return (
        <Card className="my-1 p-0 text-start">
            <Card.Subtitle className="mt-1 ms-1 text-muted">Posted At: {dateFormat(comment.created_at, "mmmm dS, yyyy, HH:MM")}</Card.Subtitle>
          <Card.Body className="ms-1">
            {comment.body}
            <Card.Subtitle className="mt-2 text-muted">Author: {comment.author}</Card.Subtitle>
            <Card.Text className="mt-2">
            <Button className="me-2" variant="primary">Upvote</Button>
            <Button className="mx-2" variant="secondary">Downvote</Button> Votes: {comment.votes} </Card.Text>
          </Card.Body>
        </Card>
      );
    }
export default CommentListCard