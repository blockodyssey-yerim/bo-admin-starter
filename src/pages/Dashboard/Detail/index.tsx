import { useLocation } from 'react-router-dom';

import { Grid } from '@mui/material';

import { useMenu } from 'hooks/common';

import { ImageCarousel } from 'components';
import { SAMPLE_DATA } from 'dummy';
import PageButton from 'layout/PageButton';
import PageHeader from 'layout/PageHeader';
import Table from 'pages/Dashboard/Detail/components/Table';
import useGetDashboardData from 'pages/Dashboard/hooks/useGetDashboardData';
import { StyledContainer, StyledGrid } from 'pages/Dashboard/styles';

import { MENU_CONFIG } from 'configs/menu';

export default function Detail() {
    const { search } = useLocation();

    const menu = useMenu(MENU_CONFIG.dashboard);
    const { isLoading, data: detailData } = useGetDashboardData({ menu });

    // TODO: DEMO 코드 제거
    // ==================================DEMO==================================
    const data = SAMPLE_DATA;
    const images: { img_idx: number; img_detail: string }[] = [];
    // ==================================DEMO==================================

    return (
        <StyledContainer>
            <PageHeader text="디저트 상세" path={`/${search}`} />
            <StyledGrid container>
                <Grid item xs="auto">
                    <ImageCarousel images={images} alt="상품 이미지" />
                </Grid>
                <Grid item xs>
                    <Table isLoading={isLoading} data={data} />
                </Grid>
            </StyledGrid>
            <PageButton type="detail" path="/" />
        </StyledContainer>
    );
}
