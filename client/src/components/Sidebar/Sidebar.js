import React from 'react'
import Chat from './Chat';
import Input from './Input/Input'
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className= 'board'>
                i am empty
            </div>

            <div className ='chat-column'>
                <Chat />
            <Input />
            </div>
        </div>
    )
}

export default Sidebar
