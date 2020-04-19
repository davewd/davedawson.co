import React from 'react'
import styled from 'styled-components'
import { EmojioneV4 } from 'react-emoji-render';

const FooterWrapper = styled.div`
    width: 100%;
    display: block;
    text-align: center;
    align-items: center;
    font-size: 20pt
    `;

const Footer = function(props) {

return(
    <FooterWrapper>
        <div>
        <EmojioneV4 size={128} text="Made down under :crocodile: by a :nerd_face: for his :family_(man,_woman,_girl):" />
        </div>
    </FooterWrapper>
)

}

export default styled(Footer)`
`;