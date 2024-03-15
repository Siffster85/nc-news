import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Auth from './Auth'
import { useEffect, useState } from 'react'
import { getTopics } from '../api';

function Header() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container fluid>
				<Navbar.Brand href="/">YLS News</Navbar.Brand>
					<Nav 
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Topics key="topic"/>
					</Nav>
				<Auth />
			</Container>
		</Navbar>
	)
}

function Topics() {
	const [ topics, setTopics ] = useState([])
	useEffect(() => {
		getTopics()
	  .then(({data})=> {
		setTopics(data.topics)
	  })
	}, [])

	return (
		<>
		  		<Nav.Item key="All"><Nav.Link href='/articles'>All Articles</Nav.Link></Nav.Item>
				  {topics.map((topic, index) =>{
					return <Nav.Item key={index}><Nav.Link href={`/articles?topic=${topic.slug}`}>{topic.slug}</Nav.Link></Nav.Item>
			  })}  
			</>
		  );
}

export default Header