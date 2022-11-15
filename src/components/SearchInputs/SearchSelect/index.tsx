import { shallowEqual } from 'react-redux';

import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import { Grid, MenuItem, Typography } from '@mui/material';

import { useAppSelector } from 'hooks/redux';

import { StyledSelect } from 'components/SearchInputs/SearchSelect/styles';
import { ISearchSelect } from 'components/SearchInputs/SearchSelect/types';

import { CaptionType, SEARCH_CAPTION, SEARCH_OPTION as option } from 'configs/search';

function SearchSelect({ caption = false, value = '', dataList = [], name, onChange }: ISearchSelect) {
    const searchState = useAppSelector((state) => state.search, shallowEqual);

    const key = name as keyof typeof option;
    const options = option[key];

    const selectOptions = dataList?.length > 0 ? [...options, ...dataList] : options;

    return (
        <Grid item xs="auto">
            {caption && (
                <Typography component="p" variant="caption">
                    {SEARCH_CAPTION[name as CaptionType]}
                </Typography>
            )}
            <StyledSelect
                name={name}
                value={name === 'searchCondition' ? value : searchState[name]}
                size="small"
                displayEmpty
                IconComponent={KeyboardArrowDownIcon}
                onChange={onChange}
            >
                {selectOptions?.map(({ label, value }) => (
                    <MenuItem key={`menu-item-${label}`} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </StyledSelect>
        </Grid>
    );
}

export default SearchSelect;
