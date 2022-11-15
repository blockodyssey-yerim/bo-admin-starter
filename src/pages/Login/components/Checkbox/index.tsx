import { Controller, useFormContext } from 'react-hook-form';

import { Box } from '@mui/material';

import { CheckBox, Label } from 'pages/Login/components/Checkbox/styles';
import { IFormValues } from 'pages/Login/types';

function Checkbox() {
    const { control } = useFormContext<IFormValues>();

    return (
        <>
            <Box>
                <Controller
                    name="cookie"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Label
                            label="아이디 저장"
                            control={
                                <CheckBox
                                    name="cookie"
                                    color="primary"
                                    checked={value}
                                    onChange={(e) => onChange(e.target.checked)}
                                />
                            }
                        />
                    )}
                />
            </Box>
        </>
    );
}

export default Checkbox;
