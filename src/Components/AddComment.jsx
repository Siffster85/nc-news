import { useEffect, useState, useContext } from 'react'
import ActiveUserContext from '../Context/ActiveUser'
import { postComment } from '../api';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'

const AddComment = () => {
    const[newComment, setNewComment] = useState({username: '', body: ''})
    const { activeUser } = useContext(ActiveUserContext)

    function handleSubmit() {
		postComment(body)
			.then((data) => {
			})
			.catch((err) => {
				setError(err.msg)
			})
	}

    function handleChange(event) {
		const { name, value } = event.target
		setUser((prevData) => {
			prevData[name] = value
			return prevData
		})
	}

    return (
        <div>
        <Container>
				<h4>Add New Comment</h4>
				<InputGroup>
					<Form.Control
						aria-label="Text input with radio button"
						name="body"
						type="text"
						onChange={handleChange}
					/>
				</InputGroup>
				<div className="" style={{ padding: '20px' }}>
					<button
						className="btn btn-md btn-dark"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>
			</Container>
            
        </div>
    );
};

export default AddComment;