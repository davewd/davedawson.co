import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPalette} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useTheme } from '../styling/ThemeContext';

const StyledColourPaletteWrapper = styled.div`
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
`;

function ColourPalette (props){

    const themeToggle = useTheme();
    
    return(
        <StyledColourPaletteWrapper>
            <ul>
                <li><a onClick={() => themeToggle.toggle()}><FontAwesomeIcon icon={faPalette} /></a></li>
            </ul>
        </StyledColourPaletteWrapper>
    )
}



export default styled(ColourPalette)`
align: "right"
`;