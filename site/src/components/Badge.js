import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
const Badge = memo((props) => {
    return (
        <div className={props.className}>
            <span >{props.children}</span>
        </div>
    );
});

Badge.propTypes = {
    
};

export default styled(Badge)`
background-color:rgb(240, 173, 78);
border-bottom-left-radius:2.625px;
border-bottom-right-radius:2.625px;
border-top-left-radius:2.625px;
border-top-right-radius:2.625px;
box-sizing:border-box;
color:rgb(255, 255, 255);
display:inline;
font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
font-size:10.5px;
font-weight:700;
height:auto;
line-height:10.5px;
padding-bottom:3.15px;
padding-left:6.3px;
padding-right:6.3px;
padding-top:2.1px;
text-align:center;
text-size-adjust:100%;
vertical-align:baseline;
white-space:nowrap;
width:auto;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`;