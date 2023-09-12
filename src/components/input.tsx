import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import Img from '../img/img.png';
import Attach from '../img/attach.png';
import { Button } from 'react-bootstrap';

export const Input = () => {
    return (
        <div className='input d-flex align-items-center justify-content-center flex-nowrap flex- m-0 p-0 g-0'>
            <input type="text" className='d-inline w-100 form-control mx-2' placeholder='Send a message' />
            <div className="send me-3 gap-2">
                <img src={Attach} alt="" />
                <input type="file" style={{ display:'none' }} id='file' />
                <label htmlFor="file"> 
                    <img src={Img} alt="" />
                </label>
                <Button variant='dark' className='button text-white ms-2 px-3'> Send </Button>

            </div>
        </div>
    );
};