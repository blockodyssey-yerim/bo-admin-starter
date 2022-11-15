import { createTheme } from '@mui/material/styles';

import customTheme from 'styles/theme/customTheme';
import palette from 'styles/theme/palette';
import typography from 'styles/theme/typography';

declare module '@mui/material/styles' {
    interface Theme {
        border: {
            main: string;
            light: string;
            opacity01: string;
            opacity02: string;
            dark: string;
        };
        neutral: {
            main: string;
            light: string;
            lightOpacity07: string;
            active: string;
        };
        shadow: {
            main: string;
        };
        disabled: {
            main: string;
        };
    }

    interface PaletteColor {
        opacity01?: string;
        opacity02?: string;
        lightOpacity07?: string;
        active?: string;
    }

    interface SimplePaletteColorOptions {
        opacity01?: string;
        opacity02?: string;
        lightOpacity07?: string;
        active?: string;
    }

    interface ThemeOptions {
        border?: {
            main?: string;
            light?: string;
            opacity01?: string;
            opacity02?: string;
            dark?: string;
        };
        neutral?: {
            main?: string;
            light?: string;
            lightOpacity07?: string;
            active?: string;
        };
        shadow?: {
            main?: string;
        };
        disabled?: {
            main?: string;
        };
    }

    interface TypeText {
        label?: string;
    }

    interface TypographyVariants {
        notFound: React.CSSProperties;
        sidebarCaption: React.CSSProperties;
        dash: React.CSSProperties;
        underlined: React.CSSProperties;
        searchLabel: React.CSSProperties;
        inputLabel: React.CSSProperties;
        errorMessage: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        notFound?: React.CSSProperties;
        sidebarCaption?: React.CSSProperties;
        dash?: React.CSSProperties;
        underlined?: React.CSSProperties;
        searchLabel?: React.CSSProperties;
        inputLabel?: React.CSSProperties;
        errorMessage?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        notFound: true;
        sidebarCaption: true;
        dash: true;
        underlined: true;
        searchLabel: true;
        inputLabel: true;
        errorMessage: true;
    }
}
const theme = createTheme({
    ...customTheme,
    palette,
    typography,
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%',
                    height: 40
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    lineHeight: '18px'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    height: '100%',
                    '&&.Mui-focused fieldset': {
                        borderColor: customTheme.border.main,
                        borderWidth: 1
                    },
                    '&&:hover fieldset': {
                        borderColor: customTheme.border.main,
                        borderWidth: 1
                    }
                },
                notchedOutline: {
                    borderColor: customTheme.border.main
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    transition: 'unset'
                },
                contained: {
                    width: 64,
                    height: 40,
                    backgroundColor: palette.common.black,
                    boxShadow: 'unset',
                    color: palette.common.white,
                    fontWeight: 500,
                    '&:hover': {
                        backgroundColor: palette.common.black,
                        boxShadow: 'unset'
                    },
                    '&:active': {
                        boxShadow: 'unset'
                    }
                },
                sizeLarge: {
                    minWidth: 100,
                    width: 'auto',
                    padding: 10
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    minWidth: 84,
                    padding: '11px 10px',
                    borderRadius: 4,
                    backgroundColor: palette.common.white,
                    '&:focus': {
                        borderRadius: 4,
                        backgroundColor: palette.common.white
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    justifyContent: 'center',
                    paddingTop: 10,
                    paddingBottom: 10
                }
            }
        },
        MuiList: {
            styleOverrides: {
                padding: {
                    paddingTop: 0,
                    paddingBottom: 0
                }
            }
        }
    }
});

export default theme;
