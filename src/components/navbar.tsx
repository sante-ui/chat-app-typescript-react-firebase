import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Button, Modal } from 'react-bootstrap';
import '../public/css/style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ModalSettings } from './modal-settings'


// import { auth } from '../config/firebase';
// import { signOut } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';

export const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='d-flex align-items-center flex-row navbar text-white  m-0 g-0'>
            
            <Col  className='d-flex justify-content-start gap-4 p-0 m-0 g-0'>
                <Link className='text-decoration-none fs-6 text-white m-0 p-0 g-0' to='/login'> Login </Link>
                <Link className='text-decoration-none fs-6 text-white m-0 p-0 g-0' to='/register'> Register </Link>
            </Col>

            
            <Col  className='d-flex justify-content-end py-0 my-0 g-0'>
                <p className='text-primary me-3 p-0 m-0'> {} </p>
                <img className='rounded-circle m-0 p-0 g-0' style={{ cursor: 'pointer' }}  width='30' height='30' onClick={() => setShow(true)} />
                <ModalSettings show={show} onHide={() => setShow(false)} />
            </Col>
            
        
        </div>
        
    );
};