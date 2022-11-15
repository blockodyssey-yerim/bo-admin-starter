import { useState, useEffect } from 'react';

import { shallowEqual } from 'react-redux';

import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import { Grid, Typography, MenuItem, Button, SelectChangeEvent } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { setSearchFilters } from 'slices/searchSlice';

import { useMessage } from 'hooks/modal';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useSearch } from 'hooks/search';

import { SearchDatePicker } from 'components';
import { StyledEmptyBox, StyledSearchContainer, StyledSelect } from 'pages/Chart/components/Search/styles';
import { DatesType, ObjectType } from 'pages/Chart/components/Search/types';

import { SEARCH_OPTION as option } from 'configs/search';

import { SEARCH_MESSAGES } from 'constants/messages';

import theme from 'styles/theme/search';

import { formatDate, isEmpty } from 'utils/common';

function ChartSearch() {
    const dispatch = useAppDispatch();
    const searchState = useAppSelector((state) => state.search, shallowEqual);
    const menu = useAppSelector((state) => state.menu.page);

    const handleMessage = useMessage();
    const handleSearch = useSearch({ menu });

    const [term, setTerm] = useState('daily');
    const [dates, setDates] = useState<DatesType>({ startDate: null, endDate: null });

    useEffect(() => {
        setTerm(searchState.term || 'daily');
        setDates((prev) => ({
            ...prev,
            startDate: searchState.startDate ? formatDate(searchState.term || 'daily', searchState.startDate) : null,
            endDate: searchState.endDate ? formatDate(searchState.term || 'daily', searchState.endDate) : null
        }));
    }, [searchState]);

    // 검색하기
    const handleSearchFilter = (obj: ObjectType) => {
        dispatch(setSearchFilters(obj));
        handleSearch(obj);
    };

    // 검색 조건 (select) 변경
    const onSelect = (e: SelectChangeEvent<string | unknown>) => {
        const value = e.target.value as string;
        setTerm(value);
        setDates((prev) => ({
            ...prev,
            startDate: searchState.startDate ? formatDate(value || 'daily', searchState.startDate) : null,
            endDate: searchState.endDate ? formatDate(value || 'daily', searchState.endDate) : null
        }));
    };

    // 검색 기간 변경
    const onChange = (type: string, date: string | null) => setDates((prev) => ({ ...prev, [type]: date }));

    // 조회 버튼 클릭
    const onSubmit = () => {
        if (isEmpty(dates.startDate) && isEmpty(dates.endDate)) {
            handleMessage(SEARCH_MESSAGES.noDate);
        } else {
            handleSearchFilter({ ...dates, term });
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <StyledSearchContainer container>
                <Grid item xs="auto">
                    <Typography component="p" variant="caption">
                        기간
                    </Typography>
                    <StyledSelect
                        IconComponent={KeyboardArrowDownIcon}
                        displayEmpty
                        size="small"
                        name="term"
                        value={term}
                        onChange={onSelect}
                    >
                        {option.term?.map((list) => (
                            <MenuItem key={`menu-item-${list.value}`} value={list.value}>
                                {list.label}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </Grid>
                <SearchDatePicker caption term={term} dates={dates} onChange={onChange} />
                <Grid item xs="auto">
                    <StyledEmptyBox />
                    <Button variant="contained" onClick={onSubmit}>
                        조회
                    </Button>
                </Grid>
            </StyledSearchContainer>
        </ThemeProvider>
    );
}

export default ChartSearch;
