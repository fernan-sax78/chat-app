import { ListGroup } from "react-bootstrap";
import { useConversation } from "../contexts/ConversationProvider";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMessage } from '@fortawesome/free-solid-svg-icons'


function Conversation() {

 const {conversations , selectConversationIndex} = useConversation();
 

  return (
    <ListGroup variant="flush" className="m-1" >
         {conversations.map((conversation , index) => (
    <ListGroup.Item 
         key={index}
         action
         onClick={()=> selectConversationIndex(index)}
         active = {conversation.selected }
         className = {conversation.selected ? 'bg-info text-dark border-0 rounded-2 fw-bold' : 'text-danger fst-italic'}
         >
       {conversation.recipients.map(r => r.name).join('-')} <FontAwesomeIcon icon={faMessage} className = 'text-white border-dark mx-1 mb-2'/>
    </ListGroup.Item>
))}
    
    </ListGroup>
  )
}

export default Conversation
