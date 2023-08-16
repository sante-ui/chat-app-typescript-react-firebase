import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../public/css/style.css';
import { Link } from 'react-router-dom';
// import { auth } from '../config/firebase';
// import { signOut } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';

export const Navbar = () => {

    return (
        <div className='bg-primary m-0 p-0 g-0'>

            <Container className='d-flex bg-primary text-white fw-bold p-3 m-0 mx-auto' style={{ maxWidth: '95.75rem' }}>
                
                <Col className='d-flex justify-content-start align-items-center ms-3 gap-5'>
                    <Link className='text-decoration-none pb-1 text-white' to='/'> Home </Link>
                    <Link className='text-decoration-none pb-1 text-white' to='/login'> Login </Link>
                    <Link className='text-decoration-none pb-1 text-white' to='/register'> Register </Link>
                </Col>

                
                <Col className='d-flex justify-content-end align-items-center me-3 py-0 my-0 g-0'>
                    <p className='text-primary me-3 pb-1 py-0 my-0'> {} </p>
                    <img className='rounded m-0 p-0' style={{ cursor: 'pointer' }}  width='30' height='30' />
                    {/* <Button className='bg-daek text-white fw-bold' > Log Out </Button> */}

                </Col>
               
            
            </Container>
        </div>
    );
};