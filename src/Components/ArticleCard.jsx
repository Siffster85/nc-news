import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleByID } from '../../api';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const ArticleCard = () => {
    const [article, setArticle] = useState({})
    const {article_id} = useParams('article_id')
    useEffect(() => {
        getArticleByID(article_id).then((article) => {
            setArticle(article)

        })
    }, [])

    return (
    <>
    <Card>
        <Card.Title className="my-1 py-0 text-start">{article.title}</Card.Title>
        <Card.Subtitle className="mt-1 my-1 py-0 text-start text-muted">Topic: {article.topic}</Card.Subtitle>
        <Card.Subtitle className="mt-1 my-1 py-0 text-start text-muted">Author: {article.author}</Card.Subtitle>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body>
          <Card.Text className="my-1 py-0 text-start">
           {article.body}
          </Card.Text>
            <Card.Subtitle className="mt-1 my-1 py-1"> Votes: {article.votes}</Card.Subtitle>
            <Button className="ms-1 mt-1" variant="primary">Upvote</Button>
            <Button className="ms-1 mt-1" variant="secondary">Downvote</Button>
        </Card.Body>
    </Card>
    </>);
};

export default ArticleCard;
