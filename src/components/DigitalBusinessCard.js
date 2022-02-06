import ReactDOM from 'react-dom'
import React from 'react'

import EmailButton from './EmailButton'
import LinkedInButton from './LinkedInButton'

function DigitalBusinessCard() {
    return(
        <div className="digital-business-card">
            <div className="digital-business-card-image-wrapper">
                <img src="./Components/Images/Rithik.jpg" className="digital-business-card-image" />
            </div>
            
            <div className="digital-business-card-body">
            <h1 className="digital-business-card-body__name_heading">Rithik Kumar S</h1>
            <h2 className="digital-business-card-body__description_heading">CS Student</h2>
            <p className="digital-business-card__website">the-insomniacs.ddns.net</p>
            
                <div className="digital-business-card-contact-buttons-wrapper">
                    <EmailButton/>
                    <div className="digital-business-card-contact-buttons-wrapper-spacing-div"/>
                    <LinkedInButton/>
                </div>
                
                <div className="digital-business-card__body_text_wrapper">
                    <h1 className="digital-business-card__about_heading digital-business-card__heading">About</h1>
                    <p className="digital-business-card__about_text digital-business-card__text">I am a CS freshman at Ashoka University. I'm currently learning ReactJS and want to learn more about Web3, Blockchains and Entrepreneurship.</p>
                    
                    <h1 className="digital-business-card__interests_heading digital-business-card__heading">Interests</h1>
                    <p className="digital-business-card__interests_text digital-business-card__text">Food, Traveling, Music.</p>
                </div>
            </div>
            
            <div className="digital-business-card__footer">
                <img className="footer_icon" src="./Components/Icons/twitter.svg" />
                <img className="footer_icon" src="./Components/Icons/facebook.svg" />
                <img className="footer_icon" src="./Components/Icons/instagram.svg" />
                <img className="footer_icon" src="./Components/Icons/github.svg" />
            </div>
        </div>
    )
}

export default DigitalBusinessCard