import React from 'react';
import OnlineIdentities from './OnlineIdentities'
import ColourPalette from './ColourPalette'
import styled from 'styled-components'
import { textColor, backgroundColor } from '../styling/theme'
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
   
div{ 
  display: inline;
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

Link {
    color: ${textColor}
    }
`

class NavHeader extends React.Component {
    render(){
        return(
          <NavWrapper>
            <div>
              <ul>
                <li><Link to="/overview">Overview</Link></li>
                <li><Link to="/performance">Performance Dashboard</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/project_list">Project list</Link></li>
                <li><Link to="/fitness">Fitness</Link></li>
                <li><Link to="/cooking">Cooking</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            <OnlineIdentities/>
            <ColourPalette/>
            </div>
          </NavWrapper>
          
        )
    }
}

export default styled(NavHeader)``;