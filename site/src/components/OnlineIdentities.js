import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, faDribbble } from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { textColor } from '../styling/theme';

const StyledOnlineIdentitiesWrapper = styled.div`
ul {
  list-style-type: none;
  display: inline;  
  padding: 0px 0px 0px 0px; 
}

li {
  list-style-type: none;
  display: inline;  
  padding: 0px 20px 0px 20px; 
}

a {
    color: ${textColor}
    }
`;

class OnlineIdentities extends React.Component{

 
     render(){
        return(
            <StyledOnlineIdentitiesWrapper>
                <ul>
                    <li><a href="mailto:davedawson.co@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    <li><a href="https://www.linkedin.com/in/davewd/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://twitter.com/davedawson_co" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://github.com/davewd" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://dribbble.com/davewd" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDribbble}/></a></li>
                </ul>
            </StyledOnlineIdentitiesWrapper>

        )
    }
}



export default OnlineIdentities;