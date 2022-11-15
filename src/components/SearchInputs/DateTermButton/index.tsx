import { useMemo } from 'react';

import { shallowEqual } from 'react-redux';

import { Grid, Button, Typography } from '@mui/material';

import { useAppSelector } from 'hooks/redux';

import { SearchDatePicker, SearchSelect } from 'components';
import { StyledButtonsContainer, StyledDateTermButton } from 'components/SearchInputs/DateTermButton/styles';
import { IDateTermButton } from 'components/SearchInputs/DateTermButton/types';

import { SEARCH_COMPONENT, SEARCH_DATE_TERM_PERIOD } from 'configs/search';

function DateTermButton({
    caption = false,
    dates = { startDate: null, endDate: null },
    onSelect = () => {},
    onChange,
    onClick
}: IDateTermButton) {
    const { dateTerm, dashboardDateTerm } = useAppSelector(
        (state) => ({
            dateTerm: state.search.dateTerm,
            dashboardDateTerm: state.search.dashboardDateTerm
        }),
        shallowEqual
    );
    const menu = useAppSelector((state) => state.menu.page);
    const { dateSelect } = SEARCH_COMPONENT[menu as keyof typeof SEARCH_COMPONENT] || {};

    const currentTerm = useMemo(
        () => ({
            Dashboard: dashboardDateTerm,
            Chart: dateTerm
        }),
        [dateTerm, dashboardDateTerm]
    );

    return (
        <>
            {dateSelect && (
                <Grid item xs="auto">
                    {caption && (
                        <Typography component="p" variant="caption">
                            조회조건
                        </Typography>
                    )}
                    <SearchSelect name="dateType" onChange={onSelect} />
                </Grid>
            )}
            <SearchDatePicker caption={caption} term="daily" dates={dates} onChange={onChange} />
            <Grid item xs>
                <StyledButtonsContainer sx={{ ...(caption && { mt: '17px' }) }}>
                    {SEARCH_DATE_TERM_PERIOD[menu as keyof typeof SEARCH_DATE_TERM_PERIOD]?.map(
                        ({ label, value, month }, index) => (
                            <StyledDateTermButton
                                key={index}
                                sx={{
                                    ...(+currentTerm[menu as keyof typeof currentTerm] === index + 1 && {
                                        padding: 0,
                                        border: 1,
                                        borderColor: 'common.black',
                                        bgcolor: 'common.white',
                                        color: 'common.black',
                                        '&&&:hover': {
                                            bgcolor: 'common.white'
                                        }
                                    })
                                }}
                                variant="contained"
                                onClick={() => onClick(value, month, index + 1)}
                            >
                                {label}
                            </StyledDateTermButton>
                        )
                    )}
                    <Button variant="contained" onClick={() => onClick('reset', null, 1)}>
                        기간 초기화
                    </Button>
                </StyledButtonsContainer>
            </Grid>
        </>
    );
}

export default DateTermButton;
