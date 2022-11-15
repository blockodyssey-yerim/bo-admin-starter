export interface IFormValues {
    category: { value: string; label: string };
    name: string;
    color: string;
    quantity: number;
    description: string;
    ingredients_1: boolean;
    ingredients_2: boolean;
    ingredients_3: boolean;
    ingredients_4: boolean;
    calories: number;
    fat: number;
    protein: number;
    viewYn: string;
    useYn: string;
    startDate: Date | string | number;
    endDate: Date | string | number;
}
