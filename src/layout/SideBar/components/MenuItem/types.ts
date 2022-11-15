export interface IMenuItem {
    collapsed?: boolean;
    open?: boolean;
    path?: string;
    icon: React.ReactElement;
    menuTitle: string;
    selected: boolean;
    onClick: () => void;
}
