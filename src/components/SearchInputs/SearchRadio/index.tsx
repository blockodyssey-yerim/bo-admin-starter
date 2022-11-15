import { shallowEqual } from 'react-redux';

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';

import { useAppSelector } from 'hooks/redux';

import { ISearchRadio } from 'components/SearchInputs/SearchRadio/types';

import { CaptionType, SEARCH_CAPTION, SEARCH_OPTION as option } from 'configs/search';

function SearchRadio({ caption, dataList = [], name, onChange }: ISearchRadio) {
    const searchState = useAppSelector((state) => state.search, shallowEqual);

    const options = option[name as keyof typeof option];
    const radioOptions = dataList?.length > 0 ? [...options, ...dataList] : options;

    return (
        <FormControl>
            {caption && (
                <FormLabel>
                    <Typography component="p" variant="caption">
                        {SEARCH_CAPTION[name as CaptionType]}
                    </Typography>
                </FormLabel>
            )}
            <RadioGroup row aria-label="radio" name={name} value={searchState[name]} onChange={onChange}>
                {radioOptions?.map(({ label, value }) => (
                    <FormControlLabel
                        key={`radio-${label}`}
                        value={value}
                        label={label}
                        control={<Radio color="primary" />}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}

export default SearchRadio;
