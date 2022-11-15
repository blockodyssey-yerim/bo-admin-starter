import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Skeleton } from '@mui/material';

import { StyledChartContainer } from 'components/Charts/BarChart/styles';
import { IBarChart } from 'components/Charts/BarChart/types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const getRandom = (max: number, min: number) => Math.floor(Math.random() * (max - min) + min);

const data = {
    labels,
    datasets: [
        {
            label: 'Prada',
            data: labels.map(() => getRandom(1000, 0)),
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
            label: 'Channel',
            data: labels.map(() => getRandom(1000, 0)),
            backgroundColor: 'rgba(54, 162, 235, 0.2)'
        },
        {
            label: 'Gucci',
            data: labels.map(() => getRandom(1000, 0)),
            backgroundColor: 'rgba(75, 192, 192, 0.2)'
        }
    ]
};

function BarChart({ loading, dataset = [] }: IBarChart) {
    return loading ? (
        <Skeleton variant="rectangular" width="100%" height={500} />
    ) : (
        <StyledChartContainer>
            <Bar data={data || dataset} options={options} />
        </StyledChartContainer>
    );
}

export default BarChart;
