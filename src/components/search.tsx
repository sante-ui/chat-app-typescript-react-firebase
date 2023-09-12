import { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';

export const Search = () => {
    const [inputFocused, setInputFocused] = useState(true);
    

    return (
        <Container className='mt-2 g-0'>
            <div className='search-input-container w-100 px-2 m-0 p-0'>
                {inputFocused && <i className='icon-input fa fa-search icon'></i>}
                <input type="text" className='search-input form-control' onFocus={() => setInputFocused(false)} // Set inputFocused to true when focused
                onBlur={() => setInputFocused(true)}/>
            </div>

            <div className='user-chat d-flex align-items-center m-0 p-2'> 
                <img className='rounded-circle d-inline me-3' src='https://i.pinimg.com/originals/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg' alt=''/>
                <div className="user-info-chat m-0 p-0">
                    <span> jose </span>
                </div>
            </div>

        </Container>
    );
};