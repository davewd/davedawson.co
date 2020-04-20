import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const ScrollingOrb = memo((props) => {
    return (
        <div>
            
        </div>
    )

});

ScrollingOrb.propTypes = {
    
};

export default styled(ScrollingOrb)`
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow:
    inset 0 0 50px #c4c4c4,
    inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff,
    inset 20px 0 300px #f0f,
    inset -20px 0 300px #0ff,
    0 0 50px #c4c4c4,
    -10px 0 80px #f0f,
    10px 0 80px #0ff;
`;