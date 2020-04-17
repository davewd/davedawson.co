import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPalette} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useTheme } from '../styling/ThemeContext';
import { backgroundColor, textColor} from '../styling/theme'
const StyledColourPaletteWrapper = styled.div`
  button {
    background-color: Transparent;
    color: ${textColor};
    border: none;
    outline: none;
  }
  button:focus {
    outline:0;
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
`;

function ColourPalette (props){

    const themeToggle = useTheme();
    
    return(
        <StyledColourPaletteWrapper>
            <ul>
                <li><button onClick={() => themeToggle.toggle()}><FontAwesomeIcon icon={faPalette} /></button></li>
            </ul>
        </StyledColourPaletteWrapper>
    )
}



export default styled(ColourPalette)`
align: "right"
`;