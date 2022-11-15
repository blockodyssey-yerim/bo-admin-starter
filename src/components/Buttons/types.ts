export interface ButtonProps {
    size?: 'large' | 'small' | 'medium' | undefined;
    color?: 'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined;
    variant?: 'outlined' | 'text' | 'contained' | undefined;
    disabled?: boolean;
}
