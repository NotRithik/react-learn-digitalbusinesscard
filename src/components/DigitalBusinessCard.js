import ReactDOM from 'react-dom'
import React from 'react'

import EmailButton from './EmailButton'
import LinkedInButton from './LinkedInButton'

import twitterIcon from '../icons/twitter.svg'
import facebookIcon from '../icons/facebook.svg'
import instagramIcon from '../icons/instagram.svg'
import githubIcon from '../icons/github.svg'

import rithiksPhoto from '../images/Rithik.jpg'

function DigitalBusinessCard() {
    return (
        <div className="digital-business-card">
            <div className="digital-business-card-image-wrapper">
                <img src={rithiksPhoto} className="digital-business-card-image" />
            </div>

            <div className="digital-business-card-body">
                <h1 className="digital-business-card-body__name_heading">Rithik Kumar S</h1>
                <h2 className="digital-business-card-body__description_heading">CS Student</h2>
                <p className="digital-business-card__website">the-insomniacs.ddns.net</p>

                <div className="digital-business-card-contact-buttons-wrapper">
                    <EmailButton />
                    <div className="digital-business-card-contact-buttons-wrapper-spacing-div" />
                    <LinkedInButton />
                </div>

                <div className="digital-business-card__body_text_wrapper">
                    <h1 className="digital-business-card__about_heading digital-business-card__heading">About</h1>
                    <p className="digital-business-card__about_text digital-business-card__text">I am a CS freshman at Ashoka University. I'm currently learning ReactJS and want to learn more about Web3, Blockchains and Entrepreneurship.</p>

                    <h1 className="digital-business-card__interests_heading digital-business-card__heading">Interests</h1>
                    <p className="digital-business-card__interests_text digital-business-card__text">Food, Traveling, Music.</p>
                </div>
            </div>

            <div className="digital-business-card__footer">
                <img className="footer_icon" src={twitterIcon} />
                <img className="footer_icon" src={facebookIcon} />
                <img className="footer_icon" src={instagramIcon} />
                <img className="footer_icon" src={githubIcon} />
            </div>
        </div>
    )
}

export default DigitalBusinessCard