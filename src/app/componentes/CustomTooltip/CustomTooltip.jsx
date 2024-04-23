import React from 'react';
/********** STYLES **********/
import * as Styled from './styles';

export default function CustomTooltip (props) {
    const handleClick = () => {
        props.onclick()
    }
/********** RENDER **********/
    return(
        <Styled.TooltipContainer title={props.title}>
            <Styled.IconButtonCustom size={props.size} onClick={() => handleClick()}>{props.children}</Styled.IconButtonCustom>
        </Styled.TooltipContainer>
    )
}