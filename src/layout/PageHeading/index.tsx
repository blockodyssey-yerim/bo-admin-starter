import { StyledButton, StyledTypography } from 'layout/PageHeading/styles';
import { IPageHeading } from 'layout/PageHeading/types';

function PageHeading({ buttonText = '', disabled = false, onClick = () => undefined, text, type }: IPageHeading) {
    return type === 'button' ? (
        <StyledTypography variant="h3" component="h4">
            {text}
            <StyledButton
                type="button"
                disabled={disabled}
                size="small"
                color="primary"
                variant="outlined"
                onClick={onClick}
            >
                {buttonText}
            </StyledButton>
        </StyledTypography>
    ) : (
        <StyledTypography variant="h3" component="h4">
            {text}
        </StyledTypography>
    );
}

export default PageHeading;
