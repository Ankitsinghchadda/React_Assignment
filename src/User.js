import React from 'react'
import "./User.css"
const User = ({ address, level, total_staked }) => {
    return (
        <div className='user_div'>
            <h3 className='first'>Address : {address}</h3>
            <h3 className='second'>Level : {level}</h3>
            <h3 className='third'>Total Staked : {total_staked}</h3>
        </div>
    )
}

export default User