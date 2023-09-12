import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';

export const Chats = () => {
    return (
        <div className='chats w-100 m-0 p-0 g-0'>
            <div className='user-chat d-flex align-items-center ripple hover-overlay m-0 p-2'> 
                <img className='rounded-circle d-inline me-3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKI-14IAw5EFaPJN6tD2qw5apcD8Q1IwgBg&usqp=CAU' alt=''/>
                <div className="user-info-chat m-0 p-0">
                    <span> joso </span>
                    <p> hello </p>
                </div>
            </div>
        </div>
    );
};