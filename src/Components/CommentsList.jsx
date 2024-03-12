import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getComments } from '../../api';
import dateFormat from 'dateformat';

const CommentsList = () => {
    const [comments, setComments] = useState([])
    const {article_id} = useParams('article_id')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getComments(article_id).then((comments) => {
            setComments(comments)
        })
        setIsLoading(false)
    }, [])

    if(isLoading){
        return <h1>Comments loading...</h1>}
        else {
    return (
        <Container>
        <h3>Comments</h3>  
        <Row>
            {comments.map((comment) => {
                return (
                <CommentListCard key={comment.comment_id} comment={comment} />
                )
            })}
        </Row>
    </Container>
)
}
}

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

export default CommentsList;