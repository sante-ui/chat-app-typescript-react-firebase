import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Button, Modal } from 'react-bootstrap';
import '../public/css/style.css';
import { useState } from 'react';



interface ModalSettings {
    show: boolean;
    onHide: () => void;
  }
// import { auth } from '../config/firebase';
// import { signOut } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';

export const ModalSettings: React.FC<ModalSettings> = ({ show, onHide }) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            animation={false}
            dialogClassName="user-setting" 
            className='slide-in-from-left'
        >
            <Modal.Header  className='modal-header icon-color bg-dark rounded-0 m-0 p-0 px-4'>
            <h5 className='text-white p-0 m-0 g-0 mb-1'>
                User settings
            </h5>
            <Button className='bg-dark' type="button" aria-label="Close" onClick={onHide}> <i className="icon-color fa fa-times" aria-hidden="true"></i> </Button>

            </Modal.Header>
            <img className='rounded-circle my-4 m-0 p-0 mx-auto' style={{ cursor: 'pointer' }}  width='100' height='100'/>
            <p>
            modal content, please rewrite this
            </p>
        
        </Modal>    
    );
};