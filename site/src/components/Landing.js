import styled from "styled-components";
import React, { useState } from 'react'
import ThreeDimensionalAnimation from './ThreeDimensionalAnimation'
import {boxBackgroundColor, boxShadowColor, backgroundColor} from '../styling/theme'
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
      vertical-align: center;
`;

const GlossyBox = styled.div`
  text-align: center;
  justify-content: center;
  width: 60vw;
  height: 60vh;
  background-color: #E0E2E5;
  border-radius: 25px;
  border: .25px solid #BDC1CC;
  
  display: flex;
  flex-direction: column;
  box-shadow: 
  0px 0px 10px #BDC1CC,
  inset 0 0 10px rgba(0,0,0,.6);
  ;
  `;

const GlossyHighlight = styled.div`
 position: relative;
  padding: 2 2 2 2;
  top: 2px;
  right: 0;
  left: 0;
  margin: auto;
  width: 95%;
  height: 950%;
  opacity: .92;
  border-radius: 25px;
  
  /* gratuitous gradient compatibility - activate! */
  background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,1)), color-stop(100%,rgba(255,255,255,0))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); /* IE10+ */
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
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
          <>
          <br/>
          <br/>
          <GlossyBox>
          <GlossyHighlight />
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
          </GlossyBox>
          </>
        )
}

export default styled(Landing)`
`;