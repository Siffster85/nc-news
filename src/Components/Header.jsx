import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Auth from './Auth'

function Header() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container fluid>
				<Navbar.Brand href="/">NC News</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="/topics">Topics</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Auth />
			</Container>
		</Navbar>
	)
}

export default Header