import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <div className='shadow p-5 mt-5'>
        <div className='d-flex justify-content-between'>
            <h2>Profile</h2>
            <button onClick={() => setOpen(!open)} className='btn btn-outline-info'> <i className='fa-solid fa-chevron-down fa-beat-fade'></i> </button>
        </div>

        <Collapse in={open}>
            <div className='row justify-content-center mt-3'>
                <label className='text-center'>
                    <input style={{display:'none'}} type="file"/>
                    <img width={'200px'} height={'200px'} className='rounded-circle' src="https://icons.veryicon.com/png/o/internet--web/web-interface-flat/6606-male-user.png" alt="upload picture" />
                </label>
                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='GitHub ' />
                </div>
                <div className='mt-3'>
                    <input type="text" className='form-control' placeholder='LinkedIn ' />
                </div>
                <div className='mt-3 text-center d-grid'>
                    <button className="btn btn-warning">Update</button>
                </div>
            </div>
        </Collapse>

    </div>
  )
}

export default Profile