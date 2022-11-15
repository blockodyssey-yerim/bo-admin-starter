import { Grid, Typography } from '@mui/material';

import { setDetail } from 'slices/modalSlice';

import { useAppDispatch } from 'hooks/redux';

import { DefaultButton, TableSkeleton } from 'components';
import PageHeading from 'layout/PageHeading';
import {
    StyledContainer,
    StyledBox,
    StyledLabel,
    StyledInputContainer,
    StyledQuantityContainer
} from 'pages/Dashboard/Detail/components/Table/styles';
import { ITable } from 'pages/Dashboard/Detail/components/Table/types';

function DetailTable({ isLoading, data }: ITable) {
    const dispatch = useAppDispatch();

    const onClick = (type: string) => dispatch(setDetail({ data: { type, title: '판매량 조회', quantity: 140000 } }));

    return isLoading ? (
        <Grid container direction="column">
            {Array.from(Array(20)).map((_, idx) => (
                <TableSkeleton key={idx} />
            ))}
        </Grid>
    ) : (
        <StyledContainer>
            <StyledBox>
                <StyledLabel>
                    <Typography variant="inputLabel">디저트명</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Typography variant="body2">{data?.name || '-'}</Typography>
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">등록일</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Typography variant="body2">{data?.regDate || '-'}</Typography>
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">카테고리</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Typography variant="body2">{data?.category || '-'}</Typography>
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">색상</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Typography variant="body2">{data?.color || '-'}</Typography>
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">원재료명</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Typography variant="body2">{data?.ingredients || '-'}</Typography>
                </StyledInputContainer>
            </StyledBox>
            <PageHeading type="default" text="영양정보" />
            <StyledBox>
                <StyledLabel>
                    <Typography variant="inputLabel">칼로리</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Typography variant="body2">{data?.calories || '-'}</Typography>
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">지방</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Typography variant="body2">{data?.fat || '-'}</Typography>
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">탄수화물</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Typography variant="body2">{data?.carbs || '-'}</Typography>
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">프로틴</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Typography variant="body2">{data?.protein || '-'}</Typography>
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">판매량</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <StyledQuantityContainer container>
                        <Typography variant="body2">{data?.quantity || '-'}</Typography>
                        <DefaultButton
                            text="판매량 확인하기"
                            size="medium"
                            color="primary"
                            variant="outlined"
                            onClick={() => onClick('quantity')}
                        />
                    </StyledQuantityContainer>
                </StyledInputContainer>
            </StyledBox>
        </StyledContainer>
    );
}

export default DetailTable;
