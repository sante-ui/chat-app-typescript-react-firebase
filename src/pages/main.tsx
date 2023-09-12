import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import { Sidebar } from '../components/sidebar';
import { Chat } from '../components/chat';

export const Main = () => {
    return (
        <Container className='container d-flex bg-white m-0 p-0 mx-auto' style={{ maxWidth: '120.75rem',  height: "100vh" }}>
            <Sidebar />
            <Chat />
        </Container>
    );
};
