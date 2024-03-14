import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTopics } from '../api';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

function Topics() {
	const [ topics, setTopics ] = useState([])
	useEffect(() => {
		getTopics()
	  .then(({data})=> {
		setTopics(data.topics)
	  })
	}, [])
  
	return (
  <Container>
    <Col>
			<Link to= '/articles'>All Articles</Link>
			{topics.map((topic, index) =>{
		  	return <Col key={index}><Link to= {`/articles?topic=${topic.slug}`}>{topic.slug}</Link></Col>
		})}  
	  </Col>
    </Container>
	);
}

export default Topics