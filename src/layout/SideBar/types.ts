export type SiblingsType = {
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

export type MenuType = {
    setCaption: boolean;
    caption: string;
    menu: string[];
    siblings: SiblingsType[];
};
