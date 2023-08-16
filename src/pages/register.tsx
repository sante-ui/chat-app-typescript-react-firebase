import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';

export const Register = () => {
 return (
        <Container fluid className='text-white bg-dark py-4 px-4 my-4 rounded' style={{ maxWidth: '30.75rem' }}>
            <form>
                <input className='form-control w-100 rounded-1' placeholder='your account' />
                    <p className='text-danger mt-1'>  </p>
                <input className='form-control w-100 rounded-1' type='password' placeholder='password' />
                    <p className='text-danger mt-1'> </p>
                <input className='d-block bg-primary text-center text-white rounded border-0 py-2 px-4 mx-auto' type='submit' value="Submit" /> 
            </form>
        </Container>
        
    )
};