import { Grid } from '@mui/material';

import { BarChart, BubbleChart, DoughnutChart, LineChart, PieChart, StackedBarChart } from 'components';
import { StyledContainer, StyledPaper } from 'pages/Chart/components/Charts/styles';
import { ICharts } from 'pages/Chart/components/Charts/types';

export default function Charts({
    lineLoading,
    lineChartData,
    pieLoading,
    pieChartData,
    bubbleLoading,
    bubbleChartData,
    stackedBarLoading,
    stackedBarChartData,
    doughnutLoading,
    doughnutChartData,
    barLoading,
    barChartData
}: ICharts) {
    return (
        <StyledContainer container spacing={2.5}>
            <Grid item xs={6}>
                <StyledPaper>
                    <LineChart loading={lineLoading} dataset={lineChartData} />
                </StyledPaper>
            </Grid>
            <Grid item xs={6}>
                <StyledPaper>
                    <PieChart loading={pieLoading} dataset={pieChartData} />
                </StyledPaper>
            </Grid>
            <Grid item xs={6}>
                <StyledPaper>
                    <BubbleChart loading={bubbleLoading} dataset={bubbleChartData} />
                </StyledPaper>
            </Grid>
            <Grid item xs={6}>
                <StyledPaper>
                    <DoughnutChart loading={doughnutLoading} dataset={doughnutChartData} />
                </StyledPaper>
            </Grid>
            <Grid item xs={6}>
                <StyledPaper>
                    <StackedBarChart loading={stackedBarLoading} dataset={stackedBarChartData} />
                </StyledPaper>
            </Grid>
            <Grid item xs={6}>
                <StyledPaper>
                    <BarChart loading={barLoading} dataset={barChartData} />
                </StyledPaper>
            </Grid>
        </StyledContainer>
    );
}
