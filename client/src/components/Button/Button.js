import React from 'react'
import './Button.css'

function Button() {
    return (
        <div className= 'modal'>

                <div className="profile">
                    <div className="img">

                    </div>
                    <div className="content">
                        <p><span>Congratulations</span> @simideletaiwo!</p>
                        <p>You won this challenge</p>
                    </div>
                    
                </div>
                <div className="btn">
                    <button className='request-challenge-btn'>
                        Request another Challenge
                    </button>

                    <button className='exit-btn'>
                    Exit
                    </button> 
                </div>

            


        </div>
    )
}

export default Button
