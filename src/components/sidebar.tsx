import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import { Navbar } from './navbar';
import { Search } from './search';
import { Chats } from './chats';


export const Sidebar = () => {
        

    return (
        <aside className='sidebar text-white m-0 p-0 g-0'>
            <Navbar />            
            <Search />   
            <Chats />
                
        </aside>
    );
};