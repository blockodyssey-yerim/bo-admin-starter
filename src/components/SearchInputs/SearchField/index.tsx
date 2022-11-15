import { Grid, TextField, Typography } from '@mui/material';

import { SearchSelect } from 'components';
import { ISearchField } from 'components/SearchInputs/SearchField/types';

function SearchField({
    caption = false,
    searchCondition = '',
    dataList = [],
    searchKeyword,
    onSelect,
    onChange,
    onEnter
}: ISearchField) {
    return (
        <>
            <Grid item xs="auto">
                {caption && (
                    <Typography component="p" variant="caption">
                        조회조건
                    </Typography>
                )}
                <SearchSelect name="searchCondition" value={searchCondition} dataList={dataList} onChange={onSelect} />
            </Grid>
            <Grid item xs="auto">
                {caption && (
                    <Typography component="p" variant="caption">
                        검색어
                    </Typography>
                )}
                <TextField
                    sx={{ minWidth: 160, width: 300 }}
                    InputLabelProps={{ shrink: false }}
                    inputProps={{ 'aria-label': 'search keyword' }}
                    id="outlined-search-keyword"
                    label=""
                    size="small"
                    variant="outlined"
                    type="search"
                    value={searchKeyword}
                    onChange={onChange}
                    onKeyDown={onEnter}
                />
            </Grid>
        </>
    );
}

export default SearchField;
