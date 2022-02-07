import ReactDOM from 'react-dom'
import React, { useRef } from 'react'

import EmailButton from './EmailButton'
import LinkedInButton from './LinkedInButton'

import twitterIcon from '../icons/twitter.svg'
import facebookIcon from '../icons/facebook.svg'
import instagramIcon from '../icons/instagram.svg'
import githubIcon from '../icons/github.svg'

import rithiksPhoto from '../images/Rithik.jpg'

let twitterUrl = 'https://twitter.com/DVX333'
let facebookUrl = 'https://www.facebook.com/rithik.kumar.5648137/'
let instagramUrl = 'https://www.instagram.com/not.rithik/'
let githubUrl = 'https://github.com/NotRithik'

class DigitalBusinessCard extends React.Component {
    render() {
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
                    <a href={twitterUrl} className="footer_anchor" target="_blank">
                        <img className="footer_icon" src={twitterIcon} />
                    </a>

                    <a href={facebookUrl} className="footer_anchor" target="_blank">
                        <img className="footer_icon" src={facebookIcon} />
                    </a>

                    <a href={instagramUrl} className="footer_anchor" target="_blank">
                        <img className="footer_icon" src={instagramIcon} />
                    </a>

                    <a href={githubUrl} className="footer_anchor" target="_blank">
                        <img className="footer_icon" src={githubIcon} />
                    </a>
                </div>
            </div>
        )
    }
}

export default DigitalBusinessCard