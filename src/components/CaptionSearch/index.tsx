import React, { useState, useEffect } from 'react';

import { shallowEqual } from 'react-redux';

import { Box, Button, Grid, SelectChangeEvent } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { SearchType, setSearchFilters } from 'slices/searchSlice';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useSearch } from 'hooks/search';

import { DateTermButton, SearchCheckbox, SearchField, SearchRadio, SearchSelect } from 'components';
import {
    StyledSearchForm,
    StyledSearchContainer,
    StyledComponentContainer,
    StyledSelectDivider,
    StyledDivider,
    StyledEmptyBox,
    StyledGrid,
    StyledTypography
} from 'components/CaptionSearch/styles';
import { ICaptionSearch, SearchParamType } from 'components/CaptionSearch/types';

import {
    SEARCH_COMPONENT as component,
    SEARCH_OPTION as options,
    SEARCH_RADIO_ROW,
    SEARCH_SELECT,
    SEARCH_CHECKBOX,
    DEFAULT_DATES
} from 'configs/search';

import theme from 'styles/theme/search';

import { handleDateClick, isEmpty } from 'utils/common';

function CaptionSearch({ total = 0, dataList }: ICaptionSearch) {
    const dispatch = useAppDispatch();
    const menu: SearchParamType = useAppSelector((state) => state.menu.page);
    const searchState = useAppSelector((state) => state.search, shallowEqual);

    const { date, searchSelect, searchRadio, searchKeyword, searchCheckbox, sort, pageSize } = component[menu] || {};

    const handleSearch = useSearch({ menu });

    const [searchCondition, setSearchCondition] = useState('');
    const [keyword, setKeyword] = useState('');
    const [dates, setDates] = useState(DEFAULT_DATES[menu]);

    useEffect(() => {
        setKeyword(searchState.searchKeyword || '');
        setSearchCondition(searchState.searchCondition || '');
        setDates((prev) => ({
            ...prev,
            startDate: searchState.startDate || DEFAULT_DATES[menu]?.startDate,
            endDate: searchState.endDate || DEFAULT_DATES[menu]?.endDate,
            dateTerm: searchState.dateTerm || DEFAULT_DATES[menu]?.dateTerm
        }));
    }, [searchState, menu]);

    // 검색하기
    const handleSearchFilter = (obj: SearchType) => {
        // 새로 검색할 경우 페이지 번호 초기화하기
        if (parseInt(searchState.page, 10) > 1) {
            Object.assign(obj, { page: 1 });
        }

        // dateTerm 설정
        if (menu === 'Dashboard') {
            obj.dashboardDateTerm = obj.dateTerm;
            delete obj.dateTerm;
        }

        dispatch(setSearchFilters(obj));
        handleSearch(obj);
    };

    // 검색 기간 (기간 검색 부분의 Date Picker) 변경
    const onDateChange = (name: string, value: string | null) =>
        setDates((prev) => ({ ...prev, [name]: value, dateTerm: 0 }));

    // 기간 검색 버튼
    const onDateBtnClick = (name: string, months: number | null, dateTerm: number) => {
        const calculatedDates = handleDateClick({ name, months, dateTerm }); // dates: { startDate, endDate, dateTerm }
        handleSearchFilter(calculatedDates);
    };

    // 검색 조건 (select) 변경
    const onSelect = (e: SelectChangeEvent<string | unknown>) => {
        const { name, value } = e.target;
        if (name === 'searchCondition' || name === 'dateType') {
            setSearchCondition(value as string);
        } else {
            handleSearchFilter({ [name]: value as string });
        }
    };

    // 검색 조건 (radio) 변경
    const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        handleSearchFilter({ [e.target.name]: e.target.value });

    // 검색 조건 (checkbox) 변경
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

    // 조회 버튼 클릭
    const onSubmit = (e: React.FormEvent<HTMLFormElement | HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleSearchFilter({ ...dates, searchCondition, searchKeyword: keyword });
    };

    // 검색 키워드 변경
    const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSubmit(e);
        }
    };

    // 테이블 데이터 정렬하기
    const onSort = (e: SelectChangeEvent<string | unknown>) => handleSearchFilter({ [e.target.name]: e.target.value });

    return (
        <ThemeProvider theme={theme}>
            <StyledSearchForm component="form">
                <StyledSearchContainer>
                    {date && (
                        <StyledComponentContainer>
                            <DateTermButton
                                caption
                                onSelect={onSelect}
                                dates={dates}
                                onChange={onDateChange}
                                onClick={onDateBtnClick}
                            />
                        </StyledComponentContainer>
                    )}
                    {searchSelect && (
                        <StyledComponentContainer>
                            {SEARCH_SELECT[menu]?.map((name, index) => (
                                <React.Fragment key={index}>
                                    <SearchSelect caption name={name} dataList={dataList?.[name]} onChange={onSelect} />
                                    <StyledSelectDivider variant="middle" orientation="vertical" />
                                </React.Fragment>
                            ))}
                        </StyledComponentContainer>
                    )}
                    {searchRadio && (
                        <StyledComponentContainer>
                            {SEARCH_RADIO_ROW[menu]?.map((name, index) => (
                                <React.Fragment key={index}>
                                    <SearchRadio
                                        caption
                                        name={name}
                                        dataList={dataList?.[name]}
                                        onChange={onRadioChange}
                                    />
                                    <StyledDivider variant="middle" orientation="vertical" />
                                </React.Fragment>
                            ))}
                        </StyledComponentContainer>
                    )}
                    {searchCheckbox && (
                        <StyledComponentContainer>
                            {SEARCH_CHECKBOX[menu]?.map((name, index) => (
                                <React.Fragment key={index}>
                                    <SearchCheckbox
                                        caption
                                        name={name}
                                        dataList={dataList?.[name]}
                                        onChange={onCheck}
                                    />
                                    <StyledDivider variant="middle" orientation="vertical" />
                                </React.Fragment>
                            ))}
                        </StyledComponentContainer>
                    )}
                    {searchKeyword && menu && (
                        <StyledComponentContainer>
                            <SearchField
                                caption
                                searchCondition={searchCondition}
                                searchKeyword={keyword}
                                dataList={dataList?.searchCondition}
                                onSelect={onSelect}
                                onChange={onKeywordChange}
                                onEnter={onEnter}
                            />
                            <Grid item xs="auto">
                                <StyledEmptyBox />
                                <Button variant="contained" onClick={onSubmit}>
                                    조회
                                </Button>
                            </Grid>
                        </StyledComponentContainer>
                    )}
                </StyledSearchContainer>
            </StyledSearchForm>
            <StyledGrid container>
                <Grid item xs>
                    <StyledTypography variant="h4" component="h4">
                        검색된 데이터 : <Box component="strong">{total}</Box>건
                    </StyledTypography>
                </Grid>
                <Grid item container xs="auto">
                    {sort && menu && <SearchSelect name="sort" onChange={onSort} />}
                    {pageSize && menu && <SearchSelect name="pageSize" onChange={onSort} />}
                </Grid>
            </StyledGrid>
        </ThemeProvider>
    );
}

export default CaptionSearch;
