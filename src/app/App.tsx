import { BrowserRouter } from 'react-router-dom';

import { useAppSelector } from 'hooks/redux';

import ScrollToTop from 'components/ScrollToTop';
import PublicRouter from 'routes/PublicRouter';
import PrivateRouter from 'routes/Router';

export default function App() {
    const isLogin = useAppSelector((state) => state.login.isLogin);

    return (
        <BrowserRouter>
            <ScrollToTop />
            {isLogin ? <PrivateRouter /> : <PublicRouter />}
        </BrowserRouter>
    );
}
