import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useEffect, useState } from 'react'
import { getArticles } from '../api'
import { Link  } from 'react-router-dom';

function ArticleList() {
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortByValue, setSortByValue] = useState('created_at');
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const sortBy = [
    { name: 'Date', value: 'created_at' },
    { name: 'Comments', value: 'comment_count' },
    { name: 'Votes', value: 'votes' },
  ];

  const order = [
    { name: 'Descending', value: 'desc'},
    { name: 'Ascending', value: 'asc'}
  ]

  const queryParameters = new URLSearchParams(window.location.search)
	let topic = queryParameters.get('topic')
  let queries = {sort_by: sortByValue, order: sortOrder}

	if (topic) {
		queries.topic = topic
	}

    useEffect(() => {
    getArticles(queries).then(({data}) => {
        setArticles(data)
        })
        setIsLoading(false)
    }, [])

    const handleSort = () => {
      getArticles(queries).then(({data}) => {
        setArticles(data)
        })
        setIsLoading(false)
    }

    if(isLoading){
      return <h1>Articles are loading...</h1>}
      else {
    return(
		<Container>
      <ButtonGroup>
            {sortBy.map((sortBy, idx) => (
              <ToggleButton
                key={idx}
                id={`sortBy-${idx}`}
                type="radio"
                variant={'outline-info'}
                name="sortBy"
                value={sortBy.value}
                checked={sortByValue === sortBy.value}
                onChange={(e) => setSortByValue(e.currentTarget.value)}
                onClick={handleSort}
              >
                {sortBy.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          <br/>
          <ButtonGroup>
            {order.map((order, idx) => (
              <ToggleButton
                key={idx}
                id={`order-${idx}`}
                type="radio"
                variant={'outline-primary'}
                name="order"
                value={order.value}
                checked={sortOrder === order.value}
                onChange={(e) => setSortOrder(e.currentTarget.value)}
                onClick={handleSort}
              >
                {order.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
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

            Votes: {article.votes}
          </Card.Body>
        </Card>
      );
}



export default ArticleList