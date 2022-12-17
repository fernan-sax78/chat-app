import { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, InputGroup } from "react-bootstrap";
import {useConversation} from '../contexts/ConversationProvider';


function OpenConversation() {

const [text, setText] = useState('');
const {sendMessage , selectedConversation} = useConversation();
const setRef = useCallback(node => {
  if (node) {
    node.scrollIntoView({smooth : true})
  }
},[])

function handleSubmit(e){
  e.preventDefault();
  sendMessage(selectedConversation.recipients.map(r => r.id), text);
  setText('')
}

  return (
    <div className=" d-flex flex-column flex-grow-1 ">
     <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((message , index) => {
            const lastMessage = selectedConversation.messages.length -1 === index;
            return (
              <div ref = {lastMessage ? setRef : null} key={index} className = {`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : 'align-items-start'}`}>

                   <div className={`rounded-3 px-2 py-2 ${message.fromMe ? 'bg-primary text-white' : 'border bg-secondary text-white'}`}>
                    {message.text}
                   </div>

                   <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>
                    {message.fromMe ? 'You' : message.senderName}
                  </div>

              </div>
            )
          })}
        </div>
     </div>


     <Form onSubmit={handleSubmit}>

<Form.Group className="m-2">
<InputGroup>
<Form.Control 
as= "textarea" 
value = {text} 
onChange = {e => setText(e.target.value)} 
style = {{height : '2.6875rem', resize : 'none'}}
/>


<Button className="bg-success"  type = 'submit' ><FontAwesomeIcon icon={faPaperPlane} style = {{marginRight : '10px'}} ></FontAwesomeIcon>Send</Button>



</InputGroup>
</Form.Group>

     </Form>


    </div>
  )
}

export default OpenConversation;
