import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import { Messages } from './messages';
import { Input } from './input';

export const Chat = () => {
    return (
        <div className='chat text-white m-0 p-0 g-0'>
            <div className='chat-info d-flex align-items-center justify-content-between text-white'>
                <span className='fw-bold'> jose </span>
                <div className='chat-icons gap-3 d-flex'>
                    <img width='30' height='30' src={Cam} alt="" />
                    <img width='30' height='30' src={Add} alt="" />
                    <img width='30' height='30' src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};