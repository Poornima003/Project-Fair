import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../Services/allAPI'
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Auth({register}) {
  const navigate = useNavigate()
    const [userData,setUserData] = useState({
      username:"",email:"",password:""
    })
    const isRegisterForm = register?true:false
    const handleRegister = async (e)=>{
      e.preventDefault()
      const {username,email,password} = userData
      if(!username || !email || !password){
        toast.info("Please fill form completely...")
      }else{
          const result = await registerAPI(userData)
          if(result.status===200){
            toast.success(`${result.data.username} registered successfully...`)
            setUserData({
              username:"",email:"",password:""
            })
            navigate('/login')
          }else{
            toast.warning(result.response.data)
            console.log(result);

          }
      }
    }

    
  return (
    <div style={{width:'100%', height:'100vh'}} className='d-flex justify-content-center align-items-center'>
          <div className='w-75 container'>
            <Link to={'/'} style={{textDecoration:'none', color:'blue'}}> <i className='fa-solid fa-arrow-left me-1'></i> Back to Home</Link>
            <div className='card shadow p-5 bg-success'>
              <div className="row align-items-center">
                <div className="col-lg-6">
                    <img height={'500px'} src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt="auth pic" />
                </div>
                <div className="col-lg-6">
                        <div className="d-flex align-items-center flex-column">
                        <h1 className='fw-bolder text-light mt-2 ms-3'> <i className='fa-brands fa-stack-overflow fa-bounce'></i> Project Fair</h1>
                        <h5 className='fw-bolder mt-2 pb-3 text-light'> 
                            {
                              isRegisterForm ? 'Sign up to your Account' : 'Sign In to your Account'
                            }
                        </h5>
                        <Form className='text-light w-100'>
                          {
                            isRegisterForm && 
                            <Form.Group className="mb-3" controlId="formBasicName">                        
                            <Form.Control type="text" placeholder="Username" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} />
                             </Form.Group>
                          }

                          <Form.Group className="mb-3" controlId="formBasicEmail">
              
                           <Form.Control type="email" placeholder="Enter email ID" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} />
                           
                           </Form.Group>
                           <Form.Group className="mb-3" controlId="formBasicpaswd">
              
                           <Form.Control type="password" placeholder="Enter Password" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} />
                           </Form.Group>
                              {
                                isRegisterForm ?
                                <div>
                                  <button onClick={handleRegister} className="btn btn-light mb-2">
                                    Register
                                  </button>
                                  <p>Already have Account? Click here to <Link to={'/login'}>Login</Link></p>
                                </div> :
                                <div>
                                <button className="btn btn-light mb-2">
                                  Login
                                </button>
                                <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
                              </div>
                              }

                          </Form>

                        </div>
                </div>

              </div>
            </div>
          </div>
          <ToastContainer position='top-right' autoClose={2000} theme='colored'/>
    </div>
  )
}

export default Auth