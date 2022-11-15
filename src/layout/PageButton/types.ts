export interface IPageButton {
    loading?: boolean;
    path?: string;
    type: string;
    onConfirm?: (type: string) => void;
}
