import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import App from 'app/App';
import { store } from 'app/store';
import DialogProvider from 'contexts/dialog/DialogProvider';

import theme from 'styles/theme/theme';

import '@fontsource/noto-sans-kr/korean-300.css';
import '@fontsource/noto-sans-kr/korean-400.css';
import '@fontsource/noto-sans-kr/korean-500.css';
import '@fontsource/noto-sans-kr/korean-700.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnMount: true,
            refetchOnReconnect: true
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <DialogProvider>
                        <App />
                    </DialogProvider>
                    <CssBaseline />
                </ThemeProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
