import { useHistory } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { StyledButton, StyledContainer } from 'pages/404/styles';

export default function Page404() {
    const history = useHistory();

    return (
        <StyledContainer container>
            <Box>
                <Box>404</Box>
                <Typography component="h3" variant="notFound">
                    페이지를 찾을 수 없습니다.
                </Typography>
                <StyledButton color="secondary" variant="contained" disableRipple onClick={() => history.replace('/')}>
                    메인 페이지로 돌아가기
                </StyledButton>
            </Box>
        </StyledContainer>
    );
}
