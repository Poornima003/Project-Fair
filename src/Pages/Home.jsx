import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../Assets/logo.svg'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>

      <div style={{width:'100%', height:'100vh',backgroundColor:'#90ee90'}} className='container-fluid rounded'>
        <Row className='align-items-center p-5'>
            <Col sm={12} md={6}>
              <h1 style={{fontSize:'80px'}} className='fw-bolder text-light'> <i className='fa-brands fa-stack-overflow fa-bounce'></i> Project Fair</h1>
              <p className='mt-5'>One stop destination for all software development projects. Where user can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
              <Link to={'/login'} className='btn btn-warning mt-5'>Start to Explore <i className='fa-solid fa-right-long fa-beat ms-2'></i> </Link>
            
            </Col>
            <Col sm={12} md={6}>
              <img style={{marginTop:'55px'}} className='w-75' src={titleImage} alt="" />

            </Col>
        </Row>

      </div>

      {/* All projects */}
      <div className="all-projects mt-5">
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
        <marquee scrollAmount={15}>
          <div className='d-flex justify-content-between'>
            <div className='ms-5' style={{width:'500px'}} >
              <ProjectCard/>
            </div>
            
          </div>
         
        </marquee>
        <div className="text-center mt-5"> <Link to={'/projects'}> View More Projects</Link> </div>

      </div>


    </>
  )
}

export default Home