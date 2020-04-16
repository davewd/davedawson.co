import styled from "styled-components";
import React from 'react'
import ThreeDimensionalAnimation from './ThreeDimensionalAnimation'
import {boxBackgroundColor, boxShadowColor} from '../styling/theme'

const ShadowBox = styled.div`
      -webkit-box-shadow: 0 10px 6px -6px ${boxShadowColor};
         -moz-box-shadow: 0 10px 6px -6px ${boxShadowColor};
              box-shadow: 0 10px 6px -6px ${boxShadowColor};
      
      padding: 20px 20px 20px 20px;
      background: ${boxBackgroundColor}
`

const StyledWrapper = styled.div`
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;`

class Landing extends React.Component{

    render(){
        return(
          <StyledWrapper>
            <ShadowBox>
              <ThreeDimensionalAnimation vertices={[[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]}/>
              <br/>
              <p>
                Product focused Quantitative Development lead, enabling Institutional Finance with analytics & automation.
              </p>
              <br/>
              <h5>Sydney based, Leader, Mentor and Implementor!</h5>
              <br/>
            </ShadowBox>
          </StyledWrapper>
        )
    }
}



export default styled(Landing)``;