import ReactDOM from 'react-dom'
import React from 'react'

import emailIcon from '../icons/mail.png'
let emailId = 'rithikum123@gmail.com'

export default function() {
    return(
        <button onClick={sendEmail} className="email-button body-contact-button">
            <img src={emailIcon}/>
            Email
        </button>
    )

    function sendEmail() {
        window.location.assign("mailto:" + emailId)
    }
}