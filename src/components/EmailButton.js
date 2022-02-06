import ReactDOM from 'react-dom'
import React from 'react'

import emailIcon from '../icons/mail.png'

export default function() {
    return(
        <button className="email-button body-contact-button">
            <img src={emailIcon}/>
            Email
        </button>
    )
}