import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';

export const Login = () => {
 return (
        <div className='d-flex justify-content-center align-items-center m-0 p-0' style={{ height: '100vh' }}>
            <Container fluid className='text-white bg-primary py-4 px-4 rounded m-0' style={{ maxWidth: '30.75rem' }}>
                <form>

                    <h1 className='fw-bold text-center text-white mb-4'> My-chat </h1>
                    <input className='form-control w-100 rounded-1' placeholder='Display name' />
                        <p className='text-danger mt-1'>  </p>
                    <input className='form-control w-100 rounded-1' placeholder='Email' />
                        <p className='text-danger mt-1'>  </p>
                    <input className='form-control w-100 rounded-1' type='password' placeholder='Password' />
                        <p className='text-danger mt-1'> </p>
                    <input className='d-block bg-secondary text-center text-white rounded border-0 py-2 w-100' type='submit' value="Sign up" /> 
                </form>
            </Container>
        </div>   
    )
};