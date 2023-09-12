import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import { Message } from './message';

export const Messages = () => {
    return (
        <Container fluid className='messages'>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </Container>
    );
};