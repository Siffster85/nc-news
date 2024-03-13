import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getComments } from '../api';
import ActiveUserContext from '../Context/ActiveUser'
import AddComment from './AddComment';
import CommentListCard from './CommentsListCard';

const CommentsList = () => {
    const [comments, setComments] = useState([])
    const {article_id} = useParams('article_id')
    const [isLoading, setIsLoading] = useState(true)
    const { activeUser } = useContext(ActiveUserContext)

    useEffect(() => {
        getComments(article_id).then((comments) => {
            setComments(comments)
        })
        setIsLoading(false)
    }, [])

    if(isLoading){
        return <h1>Comments loading...</h1>}
        else if(activeUser){
    return (
        <Container>
        <h3>Comments</h3> 
        <AddComment setComments={setComments} setIsLoading={setIsLoading}/>
        <Row>
            {comments.map((comment) => {
                return (
                <CommentListCard key={comment.comment_id} comment={comment} setComments={setComments} setIsLoading={setIsLoading} />
                )
            })}
        </Row>
    </Container>    
    )
    } else {
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


export default CommentsList;