import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { getArticles } from '../../api'
import { Link } from 'react-router-dom';

function ArticleList() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    getArticles().then(({data}) => {
        setArticles(data)
        })
        setIsLoading(false)
    }, [])

    if(isLoading){
      return <h1>Articles are loading...</h1>}
      else {
    return(
		<Container>
			<Row>
				{articles.map((article) => {
					return (
							<ArticleListCard key={article.article_id} article={article} />
					)
				})}
			</Row>
		</Container>
	)
}
}

function ArticleListCard({article}){
    return (
        <Card className="my-1 py-0 text-start">
          <Card.Body className="ms-1">
            <Link to={`/articles/${article.article_id}`}><Card.Title>
            {article.title}
            </Card.Title></Link>
            <Card.Img src={article.article_img_url} style={{ maxWidth: '100px'}}/> 
            <Card.Subtitle className="mt-1 text-muted">Topic: {article.topic}</Card.Subtitle>
            <Card.Subtitle className="mt-1 text-muted">Author: {article.author}</Card.Subtitle>
              
            <Button className="ms-1 mt-1" variant="primary">Upvote</Button>
            <Button className="ms-1 mt-1" variant="secondary">Downvote</Button>
          </Card.Body>
        </Card>
      );
}

export default ArticleList