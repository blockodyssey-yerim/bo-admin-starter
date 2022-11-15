import { Dashboard, Search, Settings, BarChart, SettingsSuggest, FormatColorText, Download } from '@mui/icons-material';

export const MENU = {
    private: [
        {
            setCaption: true,
            caption: '홈',
            menu: ['dashboard'],
            siblings: [
                {
                    num: 0,
                    menu: 'dashboard',
                    menuTitle: 'Dashboard',
                    icon: <Dashboard />,
                    path: '/'
                }
            ]
        },
        {
            setCaption: true,
            caption: '컴포넌트',
            menu: ['components', 'common'],
            siblings: [
                {
                    num: null,
                    menu: 'components',
                    menuTitle: 'Components',
                    icon: <Settings />,
                    subMenus: [
                        {
                            num: 1,
                            menuTitle: 'Search',
                            icon: <Search />,
                            path: '/search'
                        },
                        {
                            num: 2,
                            menuTitle: 'Editor',
                            icon: <FormatColorText />,
                            path: '/editor'
                        }
                    ]
                },
                {
                    num: null,
                    menu: 'common',
                    menuTitle: 'Common',
                    icon: <SettingsSuggest />,
                    subMenus: [
                        {
                            num: 3,
                            menuTitle: 'CSV',
                            icon: <Download />,
                            path: '/csv'
                        }
                    ]
                }
            ]
        },
        {
            setCaption: true,
            caption: '차트',
            menu: ['chart'],
            siblings: [
                {
                    num: 4,
                    menu: 'chart',
                    menuTitle: 'Chart',
                    icon: <BarChart />,
                    path: '/chart'
                }
            ]
        }
    ],
    public: [
        {
            setCaption: true,
            caption: '홈',
            menu: ['dashboard'],
            siblings: [
                {
                    num: 0,
                    menu: 'dashboard',
                    menuTitle: 'Dashboard',
                    icon: <Dashboard />,
                    path: '/'
                }
            ]
        }
    ]
};

export const MENU_CONFIG = {
    dashboard: {
        page: 'Dashboard',
        menu: 'dashboard',
        menuTitle: '대시보드',
        menuNum: 0
    },
    search: {
        page: 'Dashboard',
        menu: 'search',
        menuTitle: 'Search',
        menuNum: 1
    },
    editor: {
        page: 'Editor Component Demo',
        menu: 'components',
        menuTitle: 'Editor',
        menuNum: 2
    },
    csv: {
        page: 'CSV Component Demo',
        menu: 'csv',
        menuTitle: 'CSV',
        menuNum: 3
    },
    chart: {
        page: 'Chart',
        menu: 'chart',
        menuTitle: '요약보기',
        menuNum: 4
    },
    changeInfo: {
        page: 'ChangeInfo',
        menu: null,
        menuTitle: '정보 수정',
        menuNum: null
    },
    changePassword: {
        page: 'ChangePassword',
        menu: null,
        menuTitle: '비밀번호 수정',
        menuNum: null
    }
};
