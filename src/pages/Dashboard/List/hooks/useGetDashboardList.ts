import { useGetList } from 'hooks/common';

export type ReturnType = {
    idx: number;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
};

interface IDashboardList {
    menu: string;
}

const useGetDashboardList = ({ menu }: IDashboardList) => {
    const { isLoading, data: dataList } = useGetList<ReturnType[]>({
        menu,
        url: 'https://jsonplaceholder.typicode.com/todos'
    });

    return { isLoading, dataList };
};

export default useGetDashboardList;
