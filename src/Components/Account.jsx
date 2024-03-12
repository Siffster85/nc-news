import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ActiveUserContext from '../Context/ActiveUser'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


function Account() {
	const { activeUser } = useContext(ActiveUserContext)
	if (!activeUser) {
		window.location.href = '/users'
	} else
		return (
			<>
				<Container>
					<h2>Account</h2>
					<Row>
						<Col xs="3">
							<img src={activeUser.avatar_url} style={{ width: '170px' }}/>
						</Col>
						<Col>
							<p>Username: {activeUser.username}</p>
							<p>Name: {activeUser.name}</p>
						</Col>
					</Row>
				</Container>
			</>
		)
}
export default Account