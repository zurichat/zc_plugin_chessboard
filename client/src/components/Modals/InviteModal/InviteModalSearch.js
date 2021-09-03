import React from 'react'
import './modals.css'

const InviteModalSearch = () => {
    return (
    <div>
      <h3 style={{ fontSize: '20px'}}>Invite colleagues to your game</h3>
      <p>You can invite your colleagues to play chess with you</p>
      <form className="form">
        <input type="text" autoComplete="off" name="text" placeholder="Search User..."/>
      </form>
    </div>
    )
}

export default InviteModalSearch