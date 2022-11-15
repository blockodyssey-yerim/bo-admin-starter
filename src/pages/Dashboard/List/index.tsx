import { useMenu } from 'hooks/common';

import { Search, Table } from 'components';
import { SAMPLE_ROW_DATA } from 'dummy';
import useGetDashboardList from 'pages/Dashboard/List/hooks/useGetDashboardList';

import { MENU_CONFIG } from 'configs/menu';

export default function List() {
    const menu = useMenu(MENU_CONFIG.dashboard);
    const { isLoading, dataList } = useGetDashboardList({ menu });

    return (
        <>
            <Search total={SAMPLE_ROW_DATA.length} dataList={{ brand: [], category: [] }} />
            <Table isLoading={isLoading} data={SAMPLE_ROW_DATA} total={SAMPLE_ROW_DATA.length} />
        </>
    );
}
