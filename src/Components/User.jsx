import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { getUsers } from '../api'
import Button from 'react-bootstrap/Button'
import ActiveUserContext from '../Context/ActiveUser'
import { useContext } from 'react'

const User = () => {
	const { setActiveUser } = useContext(ActiveUserContext)
	const [users, setUsers] = useState([])
	useEffect(() => {
		getUsers().then((users) => {
			setUsers(users)
		})
	}, [])
	function handleActAs(user) {
		setActiveUser(user)
		localStorage.setItem('user', JSON.stringify(user))
	}
	return (
		<>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Image</th>
						<th>User name</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>
									<img
										src={user.avatar_url}
										style={{ width: '60px' }}
									/>
								</td>
								<td>{user.username}</td>
								<td>
									<Button
										onClick={() => {
											handleActAs(user)
										}}
										variant="outline-dark btn-sm"
									>
										Act as
									</Button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
		</>
	)
}

export default User