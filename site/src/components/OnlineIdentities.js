import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

class OnlineIdentities extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="url-assets">
                <ul>
                    <li><a href="mailto:davedawson.co@gmail.com?subject=Phone Catchup"><FontAwesomeIcon icon={faPhone} /></a></li>
                    <li><a href="mailto:davedawson.co@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    <li><a href="https://www.linkedin.com/in/davewd/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://twitter.com/davedawson_co"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://github.com/davewd"><FontAwesomeIcon icon={faGithub} /></a></li>
                </ul>
            </div>
        )
    }
}



export default OnlineIdentities;