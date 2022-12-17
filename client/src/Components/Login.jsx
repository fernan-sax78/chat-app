import { Container , Form, Button} from "react-bootstrap";
import { useRef} from "react";
import { v4 as v4uuId } from "uuid";

function Login({onSubmit}) {

const IdRef = useRef();

function createId(){
    onSubmit(v4uuId);
}

function handleSubmit(e){
    e.preventDefault();
    onSubmit(IdRef.current.value);
}

  return (
    <Container className="align-items-center d-flex" style={{height : '100vh'}}>
        <Form className="w-100" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Enter Your Id</Form.Label>
                <Form.Control type="text" ref={IdRef}></Form.Control>
                <Button type="submit" className="m-2">Login</Button>
                <Button onClick = {createId} variant="secondary">Create a new Id</Button>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default Login
