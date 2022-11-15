import { useEffect } from 'react';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { useMenu } from 'hooks/common';
import useDialog from 'hooks/modal/useDialog';

import { SubmitButton, ErrorMessage, Input } from 'components';
import { StyledInfoContainer, StyledLabel, StyledInputContainer } from 'pages/Admin/ChangeInfo/styles';
import { IFormValues } from 'pages/Admin/ChangeInfo/types';
import { StyledPaper } from 'pages/Admin/styles';

import { FORM_OPTIONS } from 'configs/form/changeInfo';
import { MENU_CONFIG } from 'configs/menu';

import { SUBMIT_MESSAGES } from 'constants/messages';

import theme from 'styles/theme/form';

export default function ChangeInfo() {
    const methods = useForm<IFormValues>(FORM_OPTIONS);

    useMenu(MENU_CONFIG.changeInfo);
    const handleDialog = useDialog();

    useEffect(() => {
        methods.clearErrors();
        methods.reset({
            name: 'bo-admin-starter 관리자',
            email: 'bo-admin-starter@lorem.ipsum',
            phone: '012-3456-7890'
        });
    }, [methods.clearErrors, methods.reset]);

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        handleDialog(SUBMIT_MESSAGES.editComplete).then((isConfirmed) => {
            if (isConfirmed) {
                console.log(data);
            }
        });
    };

    return (
        <FormProvider {...methods}>
            <StyledPaper>
                <ThemeProvider theme={theme}>
                    <StyledInfoContainer component="form" onSubmit={methods.handleSubmit(onSubmit)}>
                        <Box>
                            <StyledLabel>
                                <Typography variant="inputLabel">이름</Typography>
                            </StyledLabel>
                            <StyledInputContainer>
                                <Input name="name" inputType="text" />
                            </StyledInputContainer>
                            <StyledLabel>
                                <Typography variant="inputLabel">이메일</Typography>
                            </StyledLabel>
                            <StyledInputContainer>
                                <Input name="email" inputType="text" />
                            </StyledInputContainer>
                            <StyledLabel>
                                <Typography variant="inputLabel">전화번호</Typography>
                            </StyledLabel>
                            <StyledInputContainer>
                                <Input name="phone" inputType="phone" />
                            </StyledInputContainer>
                            <StyledLabel>
                                <Typography variant="inputLabel">이미지</Typography>
                            </StyledLabel>
                            <StyledInputContainer>
                                <input type="file" {...methods.register('image')} />
                                {methods.formState.errors?.image && <ErrorMessage text="이미지를 선택해주세요." />}
                            </StyledInputContainer>
                        </Box>
                        <Grid container>
                            <SubmitButton type="submit" text="정보 수정하기" />
                        </Grid>
                    </StyledInfoContainer>
                </ThemeProvider>
            </StyledPaper>
        </FormProvider>
    );
}
