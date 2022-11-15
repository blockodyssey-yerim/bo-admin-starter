import palette from 'styles/theme/palette';

const typography = {
    fontFamily: 'Noto Sans KR, sans-serif',
    color: '#333333',
    fontSize: 12,
    h1: {
        fontWeight: 500,
        fontSize: 35,
        letterSpacing: '-0.24px'
    },
    h2: {
        fontWeight: 700,
        fontSize: 18,
        lineHeight: '27px',
        letterSpacing: '-1.26px'
    },
    h3: {
        fontWeight: 700,
        fontSize: 15,
        lineHeight: '27px',
        letterSpacing: '-1.26px'
    },
    h4: {
        fontWeight: 400,
        fontSize: 12,
        lineHeight: '27px',
        letterSpacing: 0
    },
    h5: {
        fontWeight: 500,
        fontSize: 16,
        letterSpacing: '-0.05px'
    },
    h6: {
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: '-0.05px'
    },
    overline: {
        fontWeight: 500
    },
    caption: {
        fontWeight: 500
    },
    button: {
        fontWeight: 400,
        fontSize: 13,
        lineHeight: '19px',
        letterSpacing: 0,
        color: '#1B253A'
    },
    body1: {
        fontSize: 12,
        lineHeight: '20px',
        letterSpacing: '-0.24px',
        fontWeight: 400
    },
    body2: {
        fontSize: 12,
        lineHeight: '18px',
        letterSpacing: '-0.6px'
    },
    notFound: {
        fontSize: 30,
        lineHeight: '45px',
        letterSpacing: '-1.5px',
        textAlign: 'center' as const
    },
    sidebarCaption: {
        width: '90%',
        margin: '0 auto',
        color: palette.common.white,
        fontSize: 14,
        lineHeight: '32px',
        fontWeight: 500
    },
    dash: {
        height: 40,
        display: 'block',
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: '40px',
        textAlign: 'center' as const
    },
    underlined: {
        cursor: 'pointer',
        textDecoration: 'underline',
        color: palette.primary.main
    },
    searchLabel: {
        fontSize: 14,
        fontWeight: 700,
        color: palette.text.primary,
        letterSpacing: '-0.28px',
        lineHeight: '40px'
    },
    inputLabel: {
        fontWeight: 700,
        color: palette.text.label
    },
    errorMessage: {
        minWidth: 150,
        fontSize: 12,
        lineHeight: '18px',
        letterSpacing: '-0.6px',
        fontWeight: 500
    }
};

export default typography;
