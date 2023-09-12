import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';

export const Message = () => {
    return (
        <div className='message owner d-flex'>
            <div className='message-info'>
                <img className='rounded-circle' src='https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg' alt='' />
                <span> Just now </span>
            </div>
            <div className='message-content'>
                <p> hello </p>
                <img src='https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg' alt='' />
            </div>
        </div>
    );
};