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
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box',
                    margin: 0,
                    padding: 0
                },
                html: {
                    height: '100%',
                    width: '100%'
                },
                body: {
                    backgroundColor: palette.background.default,
                    height: '100%',
                    width: '100%'
                },
                a: {
                    textDecoration: 'none',
                    color: 'inherit'
                },
                '#root': {
                    height: '100%',
                    width: '100%'
                },
                table: {
                    width: '100%',
                    borderCollapse: 'collapse',
                    backgroundColor: palette.common.white,
                    '& th': {
                        height: 48,
                        padding: '0 20px'
                    },
                    '& td': {
                        height: 48,
                        padding: '0 20px'
                    }
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
        },
        MuiButton: {
            styleOverrides: {
                sizeSmall: {
                    padding: 5,
                    minHeight: 32,
                    fontWeight: 500
                },
                sizeMedium: {
                    height: 30,
                    padding: 10,
                    fontSize: 12
                },
                sizeLarge: {
                    minWidth: 100,
                    width: 'auto',
                    padding: 10
                },
                outlinedPrimary: {
                    backgroundColor: palette.common.white,
                    '&:hover': {
                        backgroundColor: 'inherit'
                    }
                },
                containedSecondary: {
                    '&:hover': {
                        backgroundColor: palette.secondary.main
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: palette.common.white
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&&$focused fieldset': {
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
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    overflowX: 'unset'
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    height: 46
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    height: 70,
                    fontSize: 12,
                    fontWeight: 500,
                    borderBottom: `1px solid ${customTheme.border.light}`
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: 10,
                    cursor: 'context-menu'
                },
                head: {
                    height: 70
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    margin: '0 20px',
                    borderRadius: 4,
                    '&:last-child': {
                        padding: '20px 0'
                    }
                },
                spacer: {
                    flex: '1 1 100%'
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    width: 20,
                    height: 20
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    top: 'unset'
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    fontWeight: 600
                }
            }
        }
    }
});

export default theme;
