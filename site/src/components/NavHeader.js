import React from 'react';
import OnlineIdentities from './OnlineIdentities'
import ColourPalette from './ColourPalette'
import styled from 'styled-components'
import { textColor, backgroundColor } from '../styling/theme'

const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
   
div{ 
  display: inline;
  width: 100%;
  background: ${backgroundColor};
  padding: 10px 20px 10px 20px;
 
}
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
`

class NavHeader extends React.Component {
    render(){
        return(
          <NavWrapper>
            <div>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#performance">Performance Dashboard</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#project_list">Project list</a></li>
              <li><a href="#fitness">Fitness</a></li>
              <li><a href="#cooking">Cooking</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
            <OnlineIdentities/>
            <ColourPalette/>
            </div>
          </NavWrapper>
          
        )
    }
}

export default styled(NavHeader)``;