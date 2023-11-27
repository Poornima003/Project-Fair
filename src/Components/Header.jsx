import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <Navbar style={{backgroundColor:'#90ee90'}} className='position-fixed top-0 w-100' >
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:'none', color:'white'}} className='fw-bolder fs-3'>
            <i className='fa-brands fa-stack-overflow fa-bounce me-2'></i>  Project Fair 

            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}

export default Header