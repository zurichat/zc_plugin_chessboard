import React from 'react'
import InviteModalSearch from './InviteModalSearch'
import './modals.css'

const InviteModal = () => {
    return (
        <div className='all-center'>
         <div className="card text-center" style={{ width: '453px' }}>
           <InviteModalSearch />
         </div>
        </div>
    )
}

export default InviteModal