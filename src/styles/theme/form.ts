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
                    minWidth: 320,
                    maxWidth: 500,
                    minHeight: 36,
                    margin: '5px 0'
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
                    },
                    padding: 0
                },
                input: {
                    boxSizing: 'border-box',
                    height: 36,
                    padding: '9px 10px'
                },
                notchedOutline: {
                    borderColor: customTheme.border.main
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: palette.text.primary
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500
                },
                sizeSmall: {
                    minHeight: 32,
                    padding: 5
                },
                sizeMedium: {
                    height: 30,
                    padding: 10,
                    fontSize: 12
                },
                sizeLarge: {
                    width: 'auto',
                    padding: 10
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    marginRight: 0
                }
            }
        }
    }
});

export default theme;
