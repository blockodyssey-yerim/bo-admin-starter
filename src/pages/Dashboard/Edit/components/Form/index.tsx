import { Typography } from '@mui/material';

import { CheckBox, Input, RadioButton, Select } from 'components/FormInputs';
import PageHeading from 'layout/PageHeading';
import { StyledContainer, StyledTextAreaContainer } from 'pages/Dashboard/Edit/components/Form/styles';
import { StyledBox, StyledInputContainer, StyledLabel } from 'pages/Dashboard/styles';

import { TABLE_SELECT_OPTION } from 'configs/table';

function EditForm() {
    return (
        <StyledContainer>
            <PageHeading type="default" text="디저트 정보 입력" />
            <StyledBox>
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
                <StyledLabel>
                    <Typography variant="inputLabel">디저트명</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <Input name="name" fullWidth />
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
                        <Input name="description" multiline rows={10} fullWidth />
                    </StyledInputContainer>
                </StyledTextAreaContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">재료 선택</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <CheckBox
                        name="ingredients"
                        options={[
                            { name: 'ingredients_1', label: 'Chocolate' },
                            { name: 'ingredients_2', label: 'Strawberry' },
                            { name: 'ingredients_3', label: 'Cheese' },
                            { name: 'ingredients_4', label: 'Others' }
                        ]}
                    />
                </StyledInputContainer>
                <StyledLabel>
                    <Typography variant="inputLabel">판매 여부</Typography>
                </StyledLabel>
                <StyledInputContainer>
                    <RadioButton name="useYn" options={TABLE_SELECT_OPTION.useYn} />
                </StyledInputContainer>
            </StyledBox>
        </StyledContainer>
    );
}

export default EditForm;
