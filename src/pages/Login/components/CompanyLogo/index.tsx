import { StyledCompanyName, StyledContainer, StyledTypography } from 'pages/Login/components/CompanyLogo/styles';

export default function CompanyLogo() {
    return (
        <StyledContainer>
            <StyledCompanyName>bo-admin-starter</StyledCompanyName>
            <StyledTypography variant="body2">powered by Block Odyssey</StyledTypography>
        </StyledContainer>
    );
}
