import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Login = () => {
    let navigate = useNavigate();
    useEffect(() => {
        // Scroll to the end when the component mounts
        window.scrollTo(0, document.body.scrollHeight);
      }, []);
    
    return (
            <div className='d-flex justify-content-center align-items-center m-0 p-0' style={{ height: '100vh' }}>
                <Container fluid className='text-white bg-primary pt-4 pb-3 px-4 rounded m-0' style={{ maxWidth: '30.75rem' }}>
                    <form>

                        <h1 className='fw-bold text-center text-white mb-2'> My-chat </h1>
                        <span className='d-block text-white text-center fw-bold mb-3'> login </span>
                        <input className='form-control w-100 rounded-1' placeholder='Email' />
                            <p className='text-danger mt-1'>  </p>
                        <input className='form-control w-100 rounded-1' type='password' placeholder='Password' />
                            <p className='text-danger mt-1'> </p>
                        <input className='d-block bg-secondary text-center text-white rounded border-0 py-2 w-100' type='submit' value="Sign in" /> 
                        <span className='d-block text-white text-center p-0 mt-3 mb-0'> you don't have an account? <span className='text-secondary fw-bold' style={{ cursor: 'pointer' }} onClick={() => {navigate('/register');}}> Register </span>  </span>
                    </form>
                </Container>
            </div>   
    )
};