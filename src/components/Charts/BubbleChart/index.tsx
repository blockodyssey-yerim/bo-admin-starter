import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Bubble } from 'react-chartjs-2';

import { Skeleton } from '@mui/material';

import { StyledChartContainer } from 'components/Charts/BubbleChart/styles';
import { IBubbleChart } from 'components/Charts/BubbleChart/types';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

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
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const getRandom = (max: number, min: number) => Math.floor(Math.random() * (max - min) + min);

const data = {
    datasets: [
        {
            label: '2020년',
            data: Array.from({ length: 50 }, () => ({
                x: getRandom(100, -100),
                y: getRandom(100, -100),
                r: getRandom(20, 5)
            })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
            label: '2021년',
            data: Array.from({ length: 50 }, () => ({
                x: getRandom(100, -100),
                y: getRandom(100, -100),
                r: getRandom(20, 5)
            })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)'
        }
    ]
};

function BubbleChart({ loading, dataset = [] }: IBubbleChart) {
    return loading ? (
        <Skeleton variant="rectangular" width="100%" height={500} />
    ) : (
        <StyledChartContainer>
            <Bubble data={data || dataset} options={options} />
        </StyledChartContainer>
    );
}

export default BubbleChart;
