import styled from "styled-components";
import React from 'react'

import Avatar from 'react-avatar';

class Landing extends React.Component{

    render(){
        return(
            <header className="App-header">
            <Avatar name="Dave Dawson" size="200" round={true}/>
            <br/>
            <p>
              Product focused Quantitative Development lead, enabling Institutional Finance with analytics & automation.
            </p>
            <br/>
            <h5>Sydney based, Leader, Mentor and Do-er!</h5>
            <br/>
          </header>
        )
    }
}



export default styled(Landing)``;