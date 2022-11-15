import { ReturnType } from 'pages/Dashboard/hooks/useGetDashboardData';

export interface ITable {
    isLoading: boolean;
    data: ReturnType;
}
