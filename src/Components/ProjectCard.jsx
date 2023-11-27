import React, { useState } from 'react'
import { Card, Modal, Row,Col } from 'react-bootstrap'
import proImage from '../Assets/p1.png'

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={proImage} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        
       
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img style={{height:'200px'}} className='img-fluid' src={proImage} alt="" />               
                </Col>
                <Col md={6}>
                    <h2>Project Title</h2>
                    <p>Project Overview Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, expedita nesciunt odio hic quas quam, vel velit fugit laboriosam dolor repellendus ea dolorum, eius error maiores minima iure quasi cumque! </p>
                    <p>Language Used: <span className='fw-bolder'>HTML,CSS,React</span></p>
                   
                </Col>
            </Row>
            <div className='mt-3'>
                        <a href="https://github.com/Poornima003/Media-Player" target='_blank' className='me-3 btn'>  <i className='fa-brands fa-github fa-2x'></i> </a>
                        <a href="https://media-player-fawn.vercel.app/" target='_blank' className='me-5 btn'>  <i className='fa-solid fa-link fa-2x'></i> </a>
                    </div>
        </Modal.Body>
        
      </Modal>

    </>
  )
}

export default ProjectCard