export const HEAD_CELL = {
    Dashboard: [
        { id: 'name', label: '디저트' },
        { id: 'calories', label: '칼로리' },
        { id: 'fat', label: '지방' },
        { id: 'carbs', label: '탄수화물' },
        { id: 'protein', label: '프로틴' },
        { id: 'status', label: '관리' }
    ]
};

export const TABLE_SELECT_OPTION = {
    viewYn: [
        { label: '노출', value: 'Y' },
        { label: '미노출', value: 'N' }
    ],
    useYn: [
        { label: '사용', value: 'Y' },
        { label: '미사용', value: 'N' }
    ]
};

export const BUTTONS = {
    addButton: { Dashboard: false, Chart: false },
    addTopButton: { Dashboard: true, Chart: false },
    deleteButton: { Dashboard: false, Chart: false },
    excelButton: { Dashboard: true, Chart: false }
};
