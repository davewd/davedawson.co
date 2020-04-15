import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPalette} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useTheme } from '../styling/ThemeContext';
function ColourPalette (props){

    const themeToggle = useTheme();
    
    return(
        <div id="url-assets" style={{align: "right", width: "100%"}}>
            <ul>
                <li><a onClick={() => themeToggle.toggle()}><FontAwesomeIcon icon={faPalette} /></a></li>
            </ul>
        </div>
    )
}



export default styled(ColourPalette)``;