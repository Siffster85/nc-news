import NavDropdown from 'react-bootstrap/NavDropdown'
import ActiveUserContext from '../Context/ActiveUser'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function Auth() {
	const { activeUser, setActiveUser } = useContext(ActiveUserContext)
	function handleLogout() {
		setActiveUser(null)
		localStorage.removeItem('user')
	}
	if (activeUser)
		return (
			<>
				<img
					src={activeUser.avatar_url}
					style={{ width: '40px', borderRadius: '50%' }}
				/>
				<NavDropdown
					title={
						activeUser.username ? activeUser.username : 'Account'
					}
					id="navbarScrollingDropdown">
					<NavDropdown.Item
						href={`/users/${activeUser.username}`}>Account
					</NavDropdown.Item>
					<NavDropdown.Item>
						<button onClick={handleLogout}>Logout</button>
					</NavDropdown.Item>
				</NavDropdown>
			</>
		)
	else
		return (
			<>
				<Link to={'/users'}>
					<button className="btn btn-info btn-sm">Sign in</button>
					&nbsp;
				</Link>
			</>
		)
}
export default Auth