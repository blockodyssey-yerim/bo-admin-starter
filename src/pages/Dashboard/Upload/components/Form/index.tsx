import { useFormContext, useWatch } from 'react-hook-form';

import { Typography } from '@mui/material';

import { CheckBox, DatePicker, Input, RadioButton, Select } from 'components/FormInputs';
import PageHeading from 'layout/PageHeading';
import { StyledBox, StyledInputContainer, StyledLabel } from 'pages/Dashboard/styles';
import {
    StyledCategoryContainer,
    StyledContainer,
    StyledTextAreaContainer
} from 'pages/Dashboard/Upload/components/Form/styles';
import { IFormValues } from 'pages/Dashboard/Upload/types';

import { TABLE_SELECT_OPTION } from 'configs/table';

function Form() {
    const { control } = useFormContext<IFormValues>();
    const startDate = useWatch<IFormValues, 'startDate'>({ control, name: 'startDate' });

    return (
        <StyledContainer>
            <PageHeading type="default" text="디저트 정보 입력" />
            <StyledBox>
                <StyledCategoryContainer>
                    <StyledLabel>
                        <Typography variant="inputLabel">카테고리</Typography>
                    </StyledLabel>
                    <StyledInputContainer>
                        <Select
                            name="category"
                            options={[
                                { value: '', label: '카테고리를 선택해주세요' },
                                { value: 'Cupcake', label: 'Cupcake' },
                                { value: 'Cookie', label: 'Cookie' }
                            ]}
                        />
                    </StyledInputContainer>
                </StyledCategoryContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">디저트명</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Input inputType="text" name="name" fullWidth />
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">색상</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Input inputType="text" name="color" fullWidth />
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">수량</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Input inputType="number" name="quantity" fullWidth />
                </StyledInputContainer>
                <StyledTextAreaContainer>
                    <StyledLabel>
                        <Typography variant="inputLabel">디저트 소개</Typography>
                    </StyledLabel>
                    <StyledInputContainer>
                        <Input fullWidth inputType="text" name="description" multiline rows={10} />
                    </StyledInputContainer>
                </StyledTextAreaContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">재료 선택</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <CheckBox
                        name="ingredients"
                        options={[
                            { name: 'ingredients_1', label: 'chocolate' },
                            { name: 'ingredients_2', label: 'strawberry' },
                            { name: 'ingredients_3', label: 'cheese' },
                            { name: 'ingredients_4', label: 'others' }
                        ]}
                    />
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">칼로리</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Input inputType="number" name="calories" fullWidth />
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">지방</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Input inputType="number" name="fat" fullWidth />
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">프로틴</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Input inputType="number" name="protein" fullWidth />
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">노출 여부</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <RadioButton name="viewYn" options={TABLE_SELECT_OPTION.viewYn} />
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">판매 여부</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <RadioButton name="useYn" options={TABLE_SELECT_OPTION.useYn} />
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">판매 시작일</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <DatePicker name="startDate" minDate={new Date()} placeholder="판매 시작일을 선택해주세요" />
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">판매 종료일</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <DatePicker name="endDate" minDate={new Date(startDate)} placeholder="판매 종료일을 선택해주세요" />
                </StyledInputContainer>
            </StyledBox>
        </StyledContainer>
    );
}

export default Form;
