import React from 'react';
import './Chatmessage.css'
import Avatar from '../../assets/avatar';

// message - user (user | chatgpt)
// message - local do prompt

{
    user: 'gtp'
    message: 'crie um nome de arquivo'
}

export const ChatMessage = ({message}) => {
    return  (
        <div className= { 
            `chat-message ${message.uer} === 'gpt'} 
            && "chatpgtp"`} >
                <div className='chat-message-center'>
                    <div className={
                        `avatar ${message.user==='gpt' && "chatgpt"}`} >
                            {message.uer ==='gpt'&& (
                                <Avatar />
                            )}
                    </div>
                        <div className='message'>
                            {message.message}
                        </div>
            
                </div>


        </div>
    )
}