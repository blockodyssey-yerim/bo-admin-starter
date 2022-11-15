import { Link } from 'react-router-dom';

import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';

import { StyledBox } from 'layout/PageHeader/styles';
import { IPageHeader } from 'layout/PageHeader/types';

function PageHeader({ text, path }: IPageHeader) {
    return (
        <StyledBox>
            <Link to={path}>
                <ChevronLeftIcon />
                <Typography variant="h2" component="h3">
                    {text}
                </Typography>
            </Link>
        </StyledBox>
    );
}

export default PageHeader;
