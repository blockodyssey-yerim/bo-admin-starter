import { ButtonProps } from 'components/Buttons/types';

export interface ISubmitButon extends ButtonProps {
    loading?: boolean;
    type?: 'submit' | 'button' | undefined;
    text: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
