import React from 'react'
import image from '../images/adi.jpeg'
// import OpenModal from '../OpenModal'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

const Info = () => {
  return (
    <div className='infoBody'>
        <div className='forText'>
            <h1>Hi I am Adikesavulu Mitnala.I worked as a Software engineer</h1>
        </div>
        <div>
            {/* <img src='/src/images/adi.jpeg' alt="adipic" /> */}
            <img src={image} alt="pic" className='forImage' />
        </div>
        {/* <OpenModal/> */}
    </div>
  )
}

export default Info