import { useCallback, useEffect } from 'react';

import _ from 'lodash';

import { setMenu } from 'slices/menuSlice';

import { useAppSelector, useAppDispatch } from 'hooks/redux';

interface IMenu {
    page: string;
    menu: string | null;
    menuTitle: string | null;
    menuNum: number | null;
}

const useMenu = ({ page, menu, menuTitle, menuNum }: IMenu) => {
    const dispatch = useAppDispatch();
    const menuState = useAppSelector((state) => ({
        page: state.menu.page,
        menu: state.menu.menu,
        menuTitle: state.menu.menuTitle,
        menuNum: state.menu.menuNum
    }));

    const handleMenu = useCallback(() => {
        if (!_.isEqual(menuState, { page, menu, menuTitle, menuNum })) {
            dispatch(setMenu({ page, menu, menuTitle, menuNum }));
        }
    }, [dispatch, page, menu, menuTitle, menuNum]);

    useEffect(() => {
        handleMenu();
    }, [handleMenu]);

    return page;
};

export default useMenu;
