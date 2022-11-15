import { Skeleton } from '@mui/material';

import { ITableSkeleton } from 'components/Skeletons/TableSkeleton/types';

export default function TableSkeleton({ rowHeight = 40, dividerHeight = 3 }: ITableSkeleton) {
    return (
        <>
            <Skeleton variant="rectangular" height={rowHeight} animation="wave" sx={{ bgcolor: 'background.main' }} />
            <Skeleton variant="text" animation="wave" height={dividerHeight} sx={{ bgcolor: 'common.white' }} />
        </>
    );
}
