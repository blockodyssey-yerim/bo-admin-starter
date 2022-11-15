export interface IFormValues {
    category: { value: string; label: string };
    name: string;
    quantity: number;
    description: string;
    ingredients_1: boolean;
    ingredients_2: boolean;
    ingredients_3: boolean;
    ingredients_4: boolean;
    useYn: string;
    startDate: Date | null;
    endDate: Date | null;
}

export type ImageType = {
    idx: number;
    src: string;
};
