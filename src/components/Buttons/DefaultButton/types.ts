import { ButtonProps } from 'components/Buttons/types';

export interface IDefaultButton extends ButtonProps {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
