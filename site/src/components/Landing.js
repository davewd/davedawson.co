import styled from "styled-components";
import React, { useState } from 'react'
import ThreeDimensionalAnimation from './ThreeDimensionalAnimation'
import {boxBackgroundColor, boxShadowColor} from '../styling/theme'
import Typist from 'react-typist'

const ShadowBox = styled.div`
      -webkit-box-shadow: 0 10px 6px -6px ${boxShadowColor};
         -moz-box-shadow: 0 10px 6px -6px ${boxShadowColor};
              box-shadow: 0 10px 6px -6px ${boxShadowColor};
      
      padding: 20px 20px 20px 20px;
      background: ${boxBackgroundColor};
      margin: 0;
      text-align: center;
      justify-content: center;
`;

const StyledTypingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 0 0 0;
    justify-content: center;
    text-align: center;

    .Typist {
      display: flex;
      flex-direction: row;
    }
`;

var typedtext = [
  {id: '0', text: 'Mentor'},
  {id: '1', text: 'Leader'},
  {id: '2', text: 'Implementor'},
  {id: '3', text: 'Engineer'},
  {id: '4', text: 'Product Manager'},
  {id: '5', text: 'Dad'},
  {id: '6', text: 'Husband'},
  {id: '7', text: 'Brother'},
  {id: '8', text: 'Son'},
  ];

const Landing = function(props){
  const [textIndex, setTextIndex] = useState(0);

        return(
          <ShadowBox>
            <ThreeDimensionalAnimation vertices={[[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]}/>
            <br/>
            <p>
              Product focused Quantitative Development lead, enabling Institutional Finance with analytics & automation.
            </p>
            <br/>
            <br/>
            <StyledTypingWrapper>
              <h5>Sydney based</h5>
              &nbsp;&nbsp;
              <Typist cursor={{ hideWhenDone: true }} avgTypingSpeed={15000} startDelay={1000} onTypingDone={() => setTextIndex(textIndex + 1)}>
              {
                /* RESTART: https://codesandbox.io/s/happy-zhukovsky-rycur */
                typedtext.map(function(item){
                  return(
                <span key={item.id}>
                    <Typist.Delay ms={500} />
                  <h5>
                    {item.text}
                  </h5>
                  <Typist.Backspace count={item.text.length} delay={1000} />
                </span>)
                })
              }
              </Typist>
            </StyledTypingWrapper>
          </ShadowBox>
        )
}

export default styled(Landing)``;