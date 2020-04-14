import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, faDribbble } from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

class OnlineIdentities extends React.Component{

    render(){
        return(
            <div id="url-assets" style={{align: "center", width: "100%"}}>
                <ul>
                    <li><a href="mailto:davedawson.co@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    <li><a href="https://www.linkedin.com/in/davewd/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://twitter.com/davedawson_co"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://github.com/davewd"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://dribbble.com/davewd"><FontAwesomeIcon icon={faDribbble}/></a></li>
                </ul>
            </div>
        )
    }
}



export default OnlineIdentities;