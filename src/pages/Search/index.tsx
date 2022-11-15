import useMenu from 'hooks/common/useMenu';

import { CaptionSearch, Table } from 'components';
import { SAMPLE_ROW_DATA } from 'dummy';

import { MENU_CONFIG } from 'configs/menu';

export default function Search() {
    useMenu(MENU_CONFIG.search);

    return (
        <>
            <CaptionSearch total={SAMPLE_ROW_DATA.length} dataList={{ brand: [], category: [] }} />
            <Table isLoading={false} data={SAMPLE_ROW_DATA} total={SAMPLE_ROW_DATA.length} />
        </>
    );
}
