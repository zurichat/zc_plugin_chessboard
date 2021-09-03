import React from 'react'
import './Input.css';





const Input= () => {
    return (
        <div className='input-container'>

            <div className='input-message'>
            <form>
                    <input
                   
                      
                    placeholder='Type a message'
                    type='text'                                   
                    />
                    <button 
                    type='submit'>
                        Send message
                    </button>
                </form>
            </div>

            <div className='input-icons'>
                <div className='icon-left'> 
                    <img src='/images/zap.png' alt='#'/>
                    <img src='/images/line.png' alt='#'/>
                    <img src='/images/bold.png' alt='#'/>
                    <img src='/images/italic.png' alt='#'/>
                    <img src='/images/link.png' alt='#'/>
                    <img src='/images/list.png' alt='#'/>
                </div>    
               
                <div className='icon-right'>
                    <img src='/images/at-sign.png' alt='#'/>
                    <img src='/images/paperclip.png' alt='#'/>
                </div>

            </div>
            
        </div>
    )
}

export default Input;