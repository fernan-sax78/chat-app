import { useState } from "react";
import { Tab,Nav, Button,Modal } from "react-bootstrap";
import Conversation from "./Conversation";
import Contacts from "./Contacts";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";

const CONVERSATION_KEY = 'conversation';
const CONTACTS_KEY = 'contacts';

function Sidebar({id}) {

    const [activeKey,setActiveKey] = useState(CONVERSATION_KEY);
    const conversationOpen = activeKey === CONVERSATION_KEY;
    const [modalOpen,setModalOpen] = useState(false);

    function closeModal(){
        setModalOpen(false);
    }

  return (
    <div className = 'd-flex flex-column'>
      <Tab.Container activeKey={activeKey} onSelect = {setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
            <Nav.Item>
                <Nav.Link eventKey='conversation'>Conversation</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey='contacts'>Contacts</Nav.Link>
            </Nav.Item>
        </Nav>
       
       <Tab.Content className= "overflow-auto flex-grow-1 " style={{borderRight : '1px solid #ddd'}} >

       <Tab.Pane eventKey={CONVERSATION_KEY}>
          <Conversation />
       </Tab.Pane>

       <Tab.Pane eventKey={CONTACTS_KEY}>
          <Contacts />
       </Tab.Pane>

       </Tab.Content>

         <div className="p-2 border-top border-bottom small " style={{borderRight : '1px solid #ddd'}}>
            Your ID : <span className="text-muted">{id}</span>
         </div>

         <Button className="rounded-3 m-2" onClick={()=> setModalOpen(true)}>
            New {conversationOpen ? 'Conversation ': 'Contact'} 
         </Button>

      </Tab.Container>


      <Modal show = {modalOpen} onHide = {closeModal}>
        {conversationOpen ? 
        <NewConversationModal closeModal = {closeModal}/> : 
        <NewContactModal closeModal = {closeModal}/>}
      </Modal>
    </div>
  )
}

export default Sidebar;
