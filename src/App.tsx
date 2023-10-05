import './App.css'
import { MessageHistory } from './components/MessageHistory/MessageHistory'
import list from './data/list'


function App() {

  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={list} />
        </div>
      </div>  
    </div>
  )
}

export default App
