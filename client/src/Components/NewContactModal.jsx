import { useRef } from 'react';
import {Modal,Form,Button} from 'react-bootstrap';
import { useContacts } from '../contexts/ContactsProvider';
  
function NewContactModal({closeModal}) {

const idRef = useRef();
const nameRef = useRef();
const {createContact} = useContacts();

function handleSubmit(params) {
    params.preventDefault();
    

  createContact(idRef.current.value,nameRef.current.value);

    closeModal();
}


  return (
    <>
    <Modal.Header closeButton >Create New Contact</Modal.Header>
    <Modal.Body>
    <Form onSubmit={handleSubmit}>
    <Form.Group>
         <Form.Label>Id</Form.Label>
         <Form.Control ref={idRef} required type='text'/>   
    </Form.Group>

    <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control ref={nameRef} required type='text'/>    
    </Form.Group>

    <Button type='submit' className='mt-2'>Create</Button>
    </Form>
    </Modal.Body>
    </>
  )
}

export default NewContactModal;
