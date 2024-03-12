import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleByID, patchArticle } from '../../api';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import dateFormat from 'dateformat';

const ArticleCard = () => {
    const [article, setArticle] = useState({})
    const {article_id} = useParams('article_id')
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState('')
    const [err, setErr] = useState(null);

    useEffect(() => {
        getArticleByID(article_id).then((article) => {
            setArticle(article)
            setVotes(article.votes)
        })
        setIsLoading(false)
    }, [])
    const handleUpVote = (event) => {
        setVotes((currentVote) => currentVote +1);
        setErr(null)
        patchArticle(1, article_id).catch((err) => {
            setVotes((currentVote) => currentVote -1)
            setErr(err)
        })
    }
    function handleDownVote(event){
        setVotes((currentVote) => currentVote -1);
        setErr(null)
        patchArticle(-1, article_id).catch((err) => {
            setVotes((currentVote) => currentVote +1)
            setErr(err)
        })
    };

    if(isLoading){
        return <h1>Article loading...</h1>}
        else {
    return (
    <>
    <Card>
        <Card.Title className="my-1 fs-4 py-0 text-start">{article.title}</Card.Title>
        <Card.Subtitle className="mt-1 my-1 py-0 text-start text-muted">Topic: {article.topic}</Card.Subtitle>
        <Card.Subtitle className="mt-1 my-1 py-0 text-start text-muted">Author: {article.author}</Card.Subtitle>
        <Card.Subtitle className="mt-1 my-1 py-0 text-start text-muted">Posted at: {dateFormat(article.created_at, "mmmm dS, yyyy, HH:MM")}</Card.Subtitle>
        <Card.Img variant="top" src={article.article_img_url} style={{ maxWidth: '400px', }} />
        <Card.Body>
          <Card.Text className="my-1 py-0 text-start">
           {article.body}
          </Card.Text>
            <Card.Subtitle className="mt-1 my-1 py-1"> Votes: {votes}</Card.Subtitle>
            <Button className="mx-2 mt-1" variant="primary" onClick={handleUpVote}>Upvote</Button>
            <Button className="ms-2 mt-1" variant="secondary" onClick={handleDownVote}>Downvote</Button>
        </Card.Body>
    </Card>		
    </>)};
};

export default ArticleCard;
