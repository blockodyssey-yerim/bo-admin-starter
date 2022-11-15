import { useFormContext } from 'react-hook-form';

import { Box } from '@mui/material';

import { ErrorMessage } from 'components';
import LoginCheckbox from 'pages/Login/components/Checkbox';
import { LoginButton, StyledContainer, StyledErrorContainer } from 'pages/Login/components/Form/styles';
import { IForm } from 'pages/Login/components/Form/types';
import LoginInput from 'pages/Login/components/Input';
import { IFormValues } from 'pages/Login/types';

function Form({ isLoading, onSubmit }: IForm) {
    const {
        handleSubmit,
        formState: { errors, isSubmitted }
    } = useFormContext<IFormValues>();

    return (
        <StyledContainer>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    bo-admin-starter
                    <Box>By BlockOdyssey</Box>
                </Box>
                <LoginInput name="email" placeholder="아이디를 입력해주세요" />
                <LoginInput name="password" inputType="password" placeholder="비밀번호를 입력해주세요" />
                {isSubmitted && (errors?.email || errors?.password) && (
                    <StyledErrorContainer>
                        <ErrorMessage text={String(errors?.email?.message) || String(errors?.password?.message)} />
                    </StyledErrorContainer>
                )}
                <LoginCheckbox />
                <LoginButton type="submit" disableRipple disabled={isLoading}>
                    로그인
                </LoginButton>
            </Box>
        </StyledContainer>
    );
}

export default Form;
