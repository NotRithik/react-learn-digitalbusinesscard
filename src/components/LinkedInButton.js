import ReactDOM from 'react-dom'
import React from 'react'

import linkedinLogo from '../icons/linkedin.svg'
let linkedinLink = 'https://www.linkedin.com/in/notrithik/'

export default function () {
    return (
        <button onClick={openLinkedinPage} className="linkedin-button body-contact-button">
            <img src={linkedinLogo} />
            LinkedIn
        </button>
    )

    function openLinkedinPage() {
        window.open(linkedinLink, '_blank')
    }
}