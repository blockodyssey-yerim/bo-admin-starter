import { useLocation, useParams } from 'react-router-dom';

import { Grid } from '@mui/material';

import { DefaultButton, LinkButton, SubmitButton } from 'components/Buttons';
import { StyledMultiButtonsContainer, StyledTwoButtonsContainer } from 'layout/PageButton/styles';
import { IPageButton } from 'layout/PageButton/types';

function PageButton({ loading, path, type, onConfirm = () => {} }: IPageButton) {
    const { search, pathname } = useLocation();
    const { idx } = useParams<{ idx: string }>();

    return type === 'detail' ? (
        <StyledTwoButtonsContainer container spacing="20px">
            <Grid item xs="auto">
                <LinkButton text="목록" path={`${path}${search}`} />
            </Grid>
            <Grid item xs="auto">
                <LinkButton text="수정하기" path={`${path === '/' ? '' : path}/edit/${idx}${search}`} />
            </Grid>
        </StyledTwoButtonsContainer>
    ) : (
        <StyledMultiButtonsContainer container>
            <Grid item xs="auto">
                <DefaultButton
                    disabled={loading}
                    text="취소"
                    onClick={() => onConfirm(idx ? 'editCancel' : 'uploadCancel')}
                />
            </Grid>
            <StyledTwoButtonsContainer item container xs="auto" spacing="10px">
                <Grid item xs="auto">
                    <SubmitButton
                        text="입력 초기화"
                        loading={loading}
                        type="button"
                        onClick={() => onConfirm('reset')}
                    />
                </Grid>
                <Grid item xs="auto">
                    <SubmitButton
                        text={idx && pathname?.includes('/edit') ? '수정하기' : '등록하기'}
                        loading={loading}
                        type="submit"
                    />
                </Grid>
            </StyledTwoButtonsContainer>
        </StyledMultiButtonsContainer>
    );
}

export default PageButton;
