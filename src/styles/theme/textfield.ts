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
    }

    interface SimplePaletteColorOptions {
        opacity01?: string;
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
                    height: 32,
                    backgroundColor: palette.common.white
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
                input: {
                    textAlign: 'left',
                    padding: '10px 8px'
                },
                notchedOutline: {
                    borderColor: customTheme.border.main
                }
            }
        }
    }
});

export default theme;
