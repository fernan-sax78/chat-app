import Login from "./Login"
import useLocalStorage from "../Hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationProvider } from "../contexts/ConversationProvider";
import { SocketProvider } from "../contexts/SocketProvider";




function App() {

const [id , setId] = useLocalStorage('id');

const dashboard = (

<SocketProvider id={id}>
      <ContactsProvider>
    <ConversationProvider id={id}>
      <Dashboard id={id}/>
    </ConversationProvider>
  </ContactsProvider>
</SocketProvider>

)

       
return(

    id ? dashboard : <Login onSubmit = {setId} />
  
  
  )

         
}

export default App
