import React from 'react';
import StyledComponent from './style';

const ColorComponent = ({ color, href, chemicalE, numberE }) => {
    return (
        <>
            <a href={href} target='_blank'>
                <StyledComponent color={color}>
                    <div className='number_element'>{numberE}</div>
                    <div className='chemical_element'>{chemicalE}</div>
                </StyledComponent>
            </a>
        </>
    )
}

  
  export default ColorComponent;