import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPalette} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

class ColourPalette extends React.Component{

    render(){
        return(
            <div id="url-assets" style={{align: "right", width: "100%"}}>
                <ul>
                    <li><a onClick={() => {console.log("Toggle")}}><FontAwesomeIcon icon={faPalette} /></a></li>
                </ul>
            </div>
        )
    }
}



export default styled(ColourPalette)``;