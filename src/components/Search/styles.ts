import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButtonContainer = styled(Grid)(({ theme: { palette } }) => ({
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    '& a': {
        backgroundColor: palette.common.white,
        '&:hover': {
            backgroundColor: palette.common.white
        }
    }
}));

export const StyledForm = styled(Box)<{ component: React.ElementType }>(({ theme: { palette, shadows } }) => ({
    width: '100%',
    marginBottom: 20,
    boxShadow: shadows[1],
    borderRadius: 10,
    backgroundColor: palette.common.white,
    '& > div': {
        display: 'grid',
        gridTemplateColumns: '160px 1fr 160px 1fr'
    }
}));

export const StyledLabel = styled(Box)(({ theme: { border } }) => ({
    width: '100%',
    minHeight: 48,
    height: 'auto',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRight: 0,
    borderBottom: `1px solid ${border.opacity01}`
}));

export const StyledLongerInputContainer = styled(Box)(({ theme: { border } }) => ({
    width: '100%',
    minHeight: 48,
    height: '100%',
    gridColumn: 'span 3',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 10,
    padding: '0 20px',
    borderLeft: 0,
    borderBottom: `1px solid ${border.opacity01}`
}));

export const StyledComponentContainer = styled(Box)(() => ({
    gridColumn: 'span 4',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
}));

export const StyledGridContainer = styled(Grid)(({ theme: { border } }) => ({
    alignItems: 'center',
    '& > div:first-of-type': {
        minWidth: 160
    },
    '& > div': {
        height: 'auto',
        padding: '10px 20px',
        borderBottom: `1px solid ${border.opacity01}`
    },
    '& > div:last-of-type': {
        flex: 1
    }
}));

export const StyledSearchKeywordContainer = styled(Box)(() => ({
    gridColumn: 'span 4',
    display: 'grid',
    gridTemplateColumns: '160px 1fr'
}));

export const StyledInputContainer = styled(Box)(({ theme: { border } }) => ({
    width: '100%',
    minHeight: 48,
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 20,
    padding: '0 20px',
    borderLeft: 0,
    borderBottom: `1px solid ${border.opacity01}`
}));

export const StyledSearchResultContainer = styled(Grid)(() => ({
    paddingBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > div:first-of-type > h4': {
        fontWeight: 500
    },
    '& > div:last-of-type': {
        columnGap: 20
    }
}));
