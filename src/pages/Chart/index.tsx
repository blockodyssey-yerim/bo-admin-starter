import { useMenu } from 'hooks/common';

import Charts from 'pages/Chart/components/Charts';
import ChartSearch from 'pages/Chart/components/Search';
import useGetChart from 'pages/Chart/hooks/useGetChart';

import { MENU_CONFIG } from 'configs/menu';

export default function Chart() {
    const menu = useMenu(MENU_CONFIG.chart);
    const { isLoading } = useGetChart({ menu, url: '/web/line-chart' });

    return (
        <>
            <ChartSearch />
            <Charts
                lineLoading={isLoading}
                lineChartData={[]}
                pieLoading={false}
                pieChartData={[]}
                bubbleLoading={false}
                bubbleChartData={[]}
                stackedBarLoading={false}
                stackedBarChartData={[]}
                doughnutLoading={false}
                doughnutChartData={[]}
                barLoading={false}
                barChartData={[]}
            />
        </>
    );
}
