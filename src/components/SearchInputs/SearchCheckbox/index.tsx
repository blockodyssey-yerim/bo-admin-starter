import { useMemo } from 'react';

import { shallowEqual } from 'react-redux';

import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material';

import { useAppSelector } from 'hooks/redux';

import { ISearchCheckbox } from 'components/SearchInputs/SearchCheckbox/types';

import { CaptionType, SEARCH_CAPTION, SEARCH_OPTION as option } from 'configs/search';

function SearchCheckbox({ caption = false, dataList = [], name, onChange }: ISearchCheckbox) {
    const searchState = useAppSelector((state) => state.search, shallowEqual);

    const checkboxOptions = useMemo(
        () =>
            dataList?.length > 0
                ? [...option[name as keyof typeof option], ...dataList]
                : option?.[name as keyof typeof option],
        []
    );

    return (
        <FormControl>
            {caption && (
                <FormLabel>
                    <Typography component="p" variant="caption">
                        {SEARCH_CAPTION[name as CaptionType]}
                    </Typography>
                </FormLabel>
            )}
            <FormGroup row aria-label="checkbox">
                <Box>
                    {checkboxOptions?.map(({ label, value }) => (
                        <FormControlLabel
                            key={`checkbox-${value}`}
                            label={label}
                            control={
                                <Checkbox
                                    name={String(value)}
                                    color="secondary"
                                    checked={
                                        searchState[name] === 'all'
                                            ? true
                                            : searchState[name].includes(value)
                                            ? true
                                            : false
                                    }
                                    onChange={(e) => onChange(name, e.target.name, e.target.checked)}
                                />
                            }
                        />
                    ))}
                </Box>
            </FormGroup>
        </FormControl>
    );
}

export default SearchCheckbox;
