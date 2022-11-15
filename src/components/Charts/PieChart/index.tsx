import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { Skeleton } from '@mui/material';

import { StyleDonutChartContainer } from 'components/Charts/PieChart/styles';
import { IPieChart } from 'components/Charts/PieChart/types';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom' as const,
            labels: {
                padding: 25
            }
        }
    }
};

const getRandom = (max: number, min: number) => Math.floor(Math.random() * (max - min) + min);

const data = {
    labels: ['January', 'March', 'May', 'July', 'September', 'November'],
    datasets: [
        {
            label: '월별 현황',
            data: Array.from(Array(6)).map(() => getRandom(20, 5)),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    ]
};

function PieChart({ loading, dataset = [] }: IPieChart) {
    return loading ? (
        <Skeleton variant="rectangular" width="100%" height={500} />
    ) : (
        <StyleDonutChartContainer>
            <Pie data={data || dataset} options={options} />
        </StyleDonutChartContainer>
    );
}

export default PieChart;
