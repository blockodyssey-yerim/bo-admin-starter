import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { Skeleton } from '@mui/material';

import { StyledChartContainer } from 'components/Charts/LineChart/styles';
import { ILineChart } from 'components/Charts/LineChart/types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            min: 0,
            ticks: {
                stepSize: 1
            }
        }
    },
    animation: {
        duration: 500
    },
    elements: {
        line: {
            tension: 0.3
        }
    },
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
            label: '2020년',
            data: Array.from(Array(12)).map(() => getRandom(500, 50)),
            borderColor: 'rgba(255, 99, 132, 0.5)',
            backgroundColor: 'rgba(255, 99, 132)'
        },
        {
            label: '2021년',
            data: Array.from(Array(12)).map(() => getRandom(400, 150)),
            borderColor: 'rgb(53, 162, 235, 0.5)',
            backgroundColor: 'rgba(53, 162, 235)'
        }
    ]
};

function LineChart({ loading, dataset = [] }: ILineChart) {
    return loading ? (
        <Skeleton variant="rectangular" width="100%" height={500} />
    ) : (
        <StyledChartContainer>
            <Line data={data || dataset} options={options} />
        </StyledChartContainer>
    );
}

export default LineChart;
