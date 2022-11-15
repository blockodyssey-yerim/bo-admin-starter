/* eslint-disable import/prefer-default-export */
import { StyleType } from 'components/FormInputs/Select/types';

import customTheme from 'styles/theme/customTheme';
import palette from 'styles/theme/palette';

export const formStyles: StyleType = {
    container: (provided) => ({
        ...provided,
        width: '100%',
        maxWidth: 500,
        height: 36,
        display: 'inline-block',
        fontSize: 12,
        textAlign: 'center'
    }),
    control: (provided) => ({
        ...provided,
        height: 'inherit',
        boxShadow: 'unset',
        borderColor: customTheme.border.main,
        '&:hover': {
            borderColor: customTheme.border.main
        }
    }),
    valueContainer: (provided) => ({
        ...provided,
        height: 'inherit'
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        height: 36,
        padding: 0
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        alignSelf: 'unset'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        width: 24,
        padding: '2px 6px 2px 2px'
    }),
    menu: (provided) => ({
        ...provided,
        margin: '2px 0 0'
    }),
    menuList: (provided) => ({
        ...provided,
        padding: 0
    }),
    option: (provided, state: { isSelected: boolean }) => ({
        ...provided,
        height: 36,
        padding: '8px 10px',
        textAlign: 'center',
        color: state.isSelected ? palette.common.white : palette.text.primary,
        backgroundColor: state.isSelected ? palette.primary.main : palette.common.white,
        '&:hover': {
            backgroundColor: state.isSelected ? palette.primary.main : palette.primary.opacity02
        }
    })
};
