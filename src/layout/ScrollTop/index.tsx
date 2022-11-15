import React from 'react';

import { useScrollTrigger, Zoom } from '@mui/material';

import { StyledBox } from 'layout/ScrollTop/styles';
import { IScrollTop } from 'layout/ScrollTop/types';

function ScrollTop({ children }: IScrollTop) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
            '#back-to-top-anchor'
        );
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <StyledBox onClick={handleClick} role="presentation">
                {children}
            </StyledBox>
        </Zoom>
    );
}

export default ScrollTop;
