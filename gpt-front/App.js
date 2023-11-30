import { useState } from 'react';

import './styles/App.css';
import './styles/reset.css';

import { SideMenu } from './src/components/SideMenu/SideMenu';
import { ChatMessage } from './src/components/ChatMessage/ChatMessage';

import { makeRequest } from './src/api/api';
import { useState } from 'react';



function App() {

  const[input, setInput] = useState("")
  const[chatlog, setChatlog] = useState([{
    user:"gpt",
    message:"Como posso te ajudar hoje?"
  }])

    async function handleSubmit(e) {
      e.preventDefault()

      let response = await makeRequest({prompt: input})

      response = response.data.split('\n').map(line =>
      <p> {line} </p>)

      setChatlog([
        ...chatlog, {
          user: 'me',
          message: `${input}`
        },
        {
          user: 'gpt',
          message: response
        }
      ])

      setInput("")
    }

  return (
    <div className="App">
      <div className='App'>
        <SideMenu></SideMenu>
        <section className='chatbox'>
            <div className='chat-log'>
              {chatlog.map((message, index)=> (
                 <ChatMessage
                  key={index}
                  message={message}
                  /> 
              ))}
            </div>

            <div className='chat-input-holder'>
                <form onSubmit={handleSubmit}>
                  <input  
                    rows='1'
                    className='chat-input-textarea'
                    value={input}
                    onChange={e =>setInput(e.target.value)}
                    />
                </form>
            </div>
        </section>
      </div>
    </div>
  );
}

export default App;
