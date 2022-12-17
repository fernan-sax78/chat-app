import OpenConversation from "./OpenConversation"
import Sidebar from "./Sidebar"
import { useConversation } from "../contexts/ConversationProvider";


function Dashboard({id}) {

  const {selectedConversation} = useConversation();
  return (
    <div className="d-flex w-100 " style={{height : '100vh',width : '18.75rem'}}>
        <Sidebar id = {id}/>
        {selectedConversation && <OpenConversation/>}
    </div>
  )
}

export default Dashboard;
