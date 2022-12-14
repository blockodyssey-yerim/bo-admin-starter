import React, { useState, useEffect } from 'react';

import { shallowEqual } from 'react-redux';

import { Box, Button, Grid, SelectChangeEvent, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { SearchType, setSearchFilters } from 'slices/searchSlice';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useSearch } from 'hooks/search';

import { LinkButton, DateTermButton, SearchField, SearchRadio, SearchSelect, SearchCheckbox } from 'components';
import {
    StyledButtonContainer,
    StyledForm,
    StyledLabel,
    StyledLongerInputContainer,
    StyledComponentContainer,
    StyledGridContainer,
    StyledSearchKeywordContainer,
    StyledInputContainer,
    StyledSearchResultContainer
} from 'components/Search/styles';
import { ISearch, SearchDatesType, SearchParamType } from 'components/Search/types';

import BUTTONS from 'configs/button';
import {
    SEARCH_COMPONENT as component,
    SEARCH_CAPTION as caption,
    SEARCH_OPTION as options,
    SEARCH_RADIO_ROW,
    SEARCH_SELECT,
    SEARCH_CHECKBOX,
    DEFAULT_DATES,
    CaptionType
} from 'configs/search';

import theme from 'styles/theme/search';

import { handleDateClick, isEmpty } from 'utils/common';

function Search({ total = 0, dataList = {} }: ISearch) {
    const dispatch = useAppDispatch();
    const menu: SearchParamType = useAppSelector((state) => state.menu.page);
    const searchState = useAppSelector((state) => state.search, shallowEqual);

    const { date, searchSelect, searchRadio, searchKeyword, searchCheckbox, sort, pageSize } = component[menu] || {};

    const handleSearch = useSearch({ menu });

    const [searchCondition, setSearchCondition] = useState('');
    const [keyword, setKeyword] = useState('');
    const [dates, setDates] = useState<SearchDatesType>(DEFAULT_DATES[menu]);

    useEffect(() => {
        setKeyword(searchState.searchKeyword || '');
        setSearchCondition(searchState.searchCondition || '');
        setDates((prev) => ({
            ...prev,
            startDate: searchState.startDate || DEFAULT_DATES[menu]?.startDate,
            endDate: searchState.endDate || DEFAULT_DATES[menu]?.endDate,
            dateTerm: searchState.dateTerm || DEFAULT_DATES[menu]?.dateTerm
        }));
    }, [searchState]);

    const handleSearchFilter = (obj: SearchType) => {
        // ?????? ????????? ?????? ????????? ?????? ???????????????
        if (+searchState.page > 1) {
            Object.assign(obj, { page: 1 });
        }

        // dateTerm ??????
        if (menu === 'Dashboard') {
            obj.dashboardDateTerm = obj.dateTerm;
            delete obj.dateTerm;
        }

        dispatch(setSearchFilters(obj));
        handleSearch(obj);
    };

    // ?????? ?????? (?????? ?????? ????????? Date Picker) ??????
    const onDateChange = (name: string, value: string | null) =>
        setDates((prev) => ({ ...prev, [name]: value, dateTerm: 0 }));

    // ?????? ?????? ??????
    const onDateBtnClick = (name: string, months: number | null, dateTerm: number) => {
        const calculatedDates = handleDateClick({ name, months, dateTerm }); // dates: {startDate, endDate, dateTerm}
        handleSearchFilter(calculatedDates);
    };

    // ?????? ?????? (select) ??????
    const onSelect = (e: SelectChangeEvent<string | unknown>) => {
        const { name, value } = e.target;
        if (name === 'searchCondition' || name === 'dateType') {
            setSearchCondition(value as string);
        } else {
            handleSearchFilter({ [name]: value as string });
        }
    };

    // ?????? ?????? (radio) ??????
    const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        handleSearchFilter({ [e.target.name]: e.target.value });

    // ?????? ?????? (checkbox) ??????
    const onCheck = (name: string, label: string, checked: boolean) => {
        let newValue = !checked && label === 'all' ? 'none' : checked ? label : '';
        const [, ...rest] = options[name as keyof typeof options];

        if (label !== 'all') {
            rest.forEach(({ value }) => {
                if (!checked && label === value) {
                    return;
                }

                if (!checked && searchState[name] === 'all' && label !== value) {
                    newValue = newValue ? `${newValue},${value}` : `${value}`;
                } else if (searchState[name].includes(value)) {
                    newValue = newValue ? `${newValue},${value}` : `${value}`;
                }
            });

            if (rest.every(({ value }) => (newValue.includes(`${value}`) ? true : false))) {
                newValue = 'all';
            }
        }

        if (isEmpty(newValue)) {
            newValue = 'none';
        }

        handleSearchFilter({ [name]: newValue });
    };

    // ?????? ?????? ??????
    const onSubmit = (e: React.FormEvent<HTMLFormElement | HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleSearchFilter({ ...dates, searchCondition, searchKeyword: keyword });
    };

    // ?????? ????????? ??????
    const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSubmit(e);
        }
    };

    // ????????? ????????? ????????????
    const onSort = (e: SelectChangeEvent<string | unknown>) => handleSearchFilter({ [e.target.name]: e.target.value });

    return (
        <ThemeProvider theme={theme}>
            <StyledButtonContainer container>
                {BUTTONS[menu]?.upload && (
                    <LinkButton text={BUTTONS[menu].uploadText} path={BUTTONS[menu].uploadPath} />
                )}
            </StyledButtonContainer>
            <StyledForm component="form">
                <Box>
                    {date && (
                        <>
                            <StyledLabel>
                                <Typography color="text.primary" variant="searchLabel">
                                    ????????????
                                </Typography>
                            </StyledLabel>
                            <StyledLongerInputContainer>
                                <DateTermButton
                                    onSelect={onSelect}
                                    dates={dates}
                                    onChange={onDateChange}
                                    onClick={onDateBtnClick}
                                />
                            </StyledLongerInputContainer>
                        </>
                    )}
                    {searchSelect && SEARCH_SELECT[menu] && (
                        <StyledComponentContainer>
                            {SEARCH_SELECT[menu]!.map((name, index) => (
                                <StyledGridContainer
                                    key={index}
                                    sx={{
                                        ...(index + 1 === SEARCH_SELECT[menu]!.length &&
                                            SEARCH_SELECT[menu]!.length % 2 !== 0 && {
                                                gridColumn: 'span 2'
                                            })
                                    }}
                                    container
                                >
                                    <Grid item xs="auto">
                                        <Typography color="text.primary" variant="searchLabel">
                                            {caption[name as CaptionType]}
                                        </Typography>
                                    </Grid>
                                    <SearchSelect name={name} dataList={dataList?.[name]} onChange={onSelect} />
                                </StyledGridContainer>
                            ))}
                        </StyledComponentContainer>
                    )}
                    {searchRadio && SEARCH_RADIO_ROW[menu] && (
                        <StyledComponentContainer>
                            {SEARCH_RADIO_ROW[menu]!.map((name, index) => (
                                <StyledGridContainer
                                    key={index}
                                    sx={{
                                        ...(index + 1 === SEARCH_RADIO_ROW[menu]!.length &&
                                            SEARCH_RADIO_ROW[menu]!.length % 2 !== 0 && {
                                                gridColumn: 'span 2'
                                            })
                                    }}
                                    container
                                >
                                    <Grid item xs="auto">
                                        <Typography color="text.primary" variant="searchLabel">
                                            {caption[name as CaptionType]}
                                        </Typography>
                                    </Grid>
                                    <SearchRadio name={name} dataList={dataList?.[name]} onChange={onRadioChange} />
                                </StyledGridContainer>
                            ))}
                        </StyledComponentContainer>
                    )}
                    {searchCheckbox && SEARCH_CHECKBOX[menu] && (
                        <StyledComponentContainer>
                            {SEARCH_CHECKBOX[menu]!.map((name, index) => (
                                <StyledGridContainer
                                    key={index}
                                    sx={{
                                        ...(index + 1 === SEARCH_CHECKBOX[menu]!.length &&
                                            SEARCH_CHECKBOX[menu]!.length % 2 !== 0 && {
                                                gridColumn: 'span 2'
                                            })
                                    }}
                                    container
                                >
                                    <Grid item xs="auto">
                                        <Typography color="text.primary" variant="searchLabel">
                                            {caption[name as CaptionType]}
                                        </Typography>
                                    </Grid>
                                    <SearchCheckbox name={name} onChange={onCheck} />
                                </StyledGridContainer>
                            ))}
                        </StyledComponentContainer>
                    )}
                    {searchKeyword && menu && (
                        <StyledSearchKeywordContainer>
                            <StyledLabel>
                                <Typography color="text.primary" variant="searchLabel">
                                    ??????
                                </Typography>
                            </StyledLabel>
                            <StyledInputContainer>
                                <SearchField
                                    searchCondition={searchCondition}
                                    searchKeyword={keyword}
                                    dataList={dataList?.searchCondition}
                                    onSelect={onSelect}
                                    onChange={onKeywordChange}
                                    onEnter={onEnter}
                                />
                                <Grid item xs="auto">
                                    <Button type="submit" variant="contained" onClick={onSubmit}>
                                        ??????
                                    </Button>
                                </Grid>
                            </StyledInputContainer>
                        </StyledSearchKeywordContainer>
                    )}
                </Box>
            </StyledForm>
            <StyledSearchResultContainer container>
                <Grid item xs>
                    <Typography variant="h4" component="h4">
                        ????????? ????????? : <Box component="strong">{total}</Box>???
                    </Typography>
                </Grid>
                <Grid item xs="auto" container>
                    {sort && menu && <SearchSelect name="sort" onChange={onSort} />}
                    {pageSize && menu && <SearchSelect name="pageSize" onChange={onSort} />}
                </Grid>
            </StyledSearchResultContainer>
        </ThemeProvider>
    );
}

export default Search;
