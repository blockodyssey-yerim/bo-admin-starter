import { useState } from 'react';

import { Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { useMenu } from 'hooks/common';
import { useMessage } from 'hooks/modal';

import {
    StyledPasswordContainer,
    StyledTitle,
    StyledTextInput,
    StyledChangeButton
} from 'pages/Admin/ChangePassword/styles';
import { StyledPaper } from 'pages/Admin/styles';

import { MENU_CONFIG } from 'configs/menu';

import theme from 'styles/theme/form';

export default function ChangePassword() {
    useMenu(MENU_CONFIG.changePassword);
    const handleMessage = useMessage();

    const [pw, setPw] = useState('');
    const [newPw, setNewPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');

    const onSubmit = () => handleMessage({ message: '비밀번호가 변경되었습니다.' });

    return (
        <StyledPaper>
            <ThemeProvider theme={theme}>
                <StyledPasswordContainer>
                    <Grid container direction="column">
                        <Grid item xs="auto">
                            <StyledTitle variant="h3" component="h3">
                                주기적인 <Typography component="span">비밀번호 변경</Typography>으로 <br />
                                안전하게 <Typography component="span">정보</Typography>를
                                <Typography component="span">보호</Typography>하세요
                            </StyledTitle>
                        </Grid>
                        <Grid item xs="auto">
                            <StyledTextInput
                                InputLabelProps={{ shrink: false }}
                                inputProps={{ 'aria-label': 'current password' }}
                                id="outlined-pw"
                                label=""
                                size="small"
                                type="password"
                                placeholder="현재 비밀번호"
                                variant="outlined"
                                name="pw"
                                value={pw}
                                onChange={(e) => setPw(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs="auto">
                            <StyledTextInput
                                InputLabelProps={{ shrink: false }}
                                inputProps={{ 'aria-label': 'new password' }}
                                id="outlined-new-pw"
                                label=""
                                size="small"
                                type="password"
                                variant="outlined"
                                placeholder="새 비밀번호"
                                name="newPw"
                                value={newPw}
                                onChange={(e) => setNewPw(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs="auto">
                            <StyledTextInput
                                InputLabelProps={{ shrink: false }}
                                inputProps={{ 'aria-label': 'new password check' }}
                                id="outlined-pw-check"
                                label=""
                                size="small"
                                type="password"
                                variant="outlined"
                                placeholder="새 비밀번호 확인"
                                name="pwCheck"
                                value={pwCheck}
                                onChange={(e) => setPwCheck(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs="auto">
                            <StyledChangeButton variant="contained" onClick={onSubmit}>
                                비밀번호 수정하기
                            </StyledChangeButton>
                        </Grid>
                    </Grid>
                </StyledPasswordContainer>
            </ThemeProvider>
        </StyledPaper>
    );
}
