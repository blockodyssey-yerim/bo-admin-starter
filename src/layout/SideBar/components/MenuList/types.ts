type SiblingsType = {
    num: number | null;
    menu: string;
    menuTitle: string;
    icon: JSX.Element;
    path?: string;
    subMenus?: {
        num: number;
        menuTitle: string;
        icon: JSX.Element;
        path: string;
    }[];
};

type MenuType = {
    setCaption: boolean;
    caption: string;
    menu: string[];
    siblings: SiblingsType[];
};

export interface IMenuList {
    menuNum: number | null;
    group: MenuType;
    open: Record<string, boolean>;
    handler: {
        handleToggleMenu: (menu: string) => void;
        handlePageChange: () => void;
    };
}
