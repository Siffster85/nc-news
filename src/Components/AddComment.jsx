import { useState, useContext } from 'react'
import ActiveUserContext from '../Context/ActiveUser'
import { useParams } from 'react-router-dom'
import { postComment } from '../api';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'

const AddComment = (props) => {
    const[newComment, setNewComment] = useState({username: '', body: ''})

    const { activeUser } = useContext(ActiveUserContext)
	const {article_id} = useParams('article_id')

    function handleSubmit() {
		props.setIsLoading(true);
		postComment(newComment, article_id)
			.then((data) => {
				props.setComments((currentComments)=> {
					const updatedComments = [...currentComments]
					updatedComments.unshift(data)
					return updatedComments
				})
				setNewComment({username: '', body: ''})
				props.setIsLoading(false)
			})
	}

    function handleChange(event) {
		const { name, value } = event.target
		setNewComment((comment) => {
			comment[name] = value
			comment.username = activeUser.username
			return comment
		})
	}

    return (
        <div>
        <Container>
				<InputGroup>
				<InputGroup.Text>Add New Comment</InputGroup.Text>
					<Form.Control
						as="textarea" rows={3} 
						aria-label="Text input"
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