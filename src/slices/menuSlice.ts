import { createSlice } from '@reduxjs/toolkit';

type MenuType = {
    page: string;
    menu: string | null;
    menuTitle: string | null;
    menuNum: number | null;
    isExit: boolean;
    showSidebar: boolean;
};

const initialState: MenuType = {
    page: 'Dashboard',
    menu: 'dashboard',
    menuTitle: '대시보드',
    menuNum: 0,
    isExit: false,
    showSidebar: false
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu: (state, { payload }) => {
            state.page = payload.page;
            state.menu = payload.menu;
            state.menuTitle = payload.menuTitle;
            state.menuNum = payload.menuNum;
            state.isExit = false;
            state.showSidebar = false;
        },
        setIsExit: (state, { payload }) => {
            state.isExit = payload;
        },
        setShowMenu: (state) => {
            state.showSidebar = !state.showSidebar;
        }
    }
});

export const { setMenu, setIsExit, setShowMenu } = menuSlice.actions;

export const menuSelector = (state: { menu: MenuType }) => state.menu;

export default menuSlice.reducer;
