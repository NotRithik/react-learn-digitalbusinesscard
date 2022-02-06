import ReactDOM from 'react-dom'
import React from 'react'

import linkedinLogo from '../icons/linkedin.svg'

export default function() {
    return (
        <button className="linkedin-button body-contact-button">
            <img src={linkedinLogo}/>
            LinkedIn
        </button>
    )
}