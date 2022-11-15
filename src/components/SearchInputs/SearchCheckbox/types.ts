export interface ISearchCheckbox {
    caption?: boolean;
    dataList?: { label: string; value: string | number }[];
    name: string;
    onChange: (name: string, value: string, checked: boolean) => void;
}
