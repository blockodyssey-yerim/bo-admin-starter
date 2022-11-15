import { ReturnType } from 'pages/Chart/hooks/useGetChart';

export interface ICharts {
    lineLoading: boolean;
    lineChartData: ReturnType[];
    pieLoading: boolean;
    pieChartData: ReturnType[];
    bubbleLoading: boolean;
    bubbleChartData: ReturnType[];
    stackedBarLoading: boolean;
    stackedBarChartData: ReturnType[];
    doughnutLoading: boolean;
    doughnutChartData: ReturnType[];
    barLoading: boolean;
    barChartData: ReturnType[];
}
