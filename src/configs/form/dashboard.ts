import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { SAMPLE_DATA } from 'dummy';

export const SCHEMA = {
    Dashboard: yup.object().shape({
        category: yup.object().shape({
            label: yup.string().required(),
            value: yup.string().required()
        }),
        name: yup.string().required('디저트명을 입력해주세요'),
        description: yup.string().required('디저트 소개를 입력해주세요'),
        quantity: yup
            .number()
            .min(0, '수량을 입력해주세요')
            .positive('수량을 입력해주세요')
            .required('수량을 입력해주세요'),
        ingredients_1: yup.bool().notRequired(),
        ingredients_2: yup.bool().notRequired(),
        ingredients_3: yup.bool().notRequired(),
        ingredients_4: yup.bool().notRequired(),
        useYn: yup.string().required('판매 여부를 선택해주세요')
    })
};

export const DEFAULT_VALUE = {
    DashboardUpload: {
        category: { value: '', label: '카테고리를 선택해주세요' },
        name: '',
        quantity: 0,
        description: '',
        ingredients_1: false,
        ingredients_2: false,
        ingredients_3: false,
        ingredients_4: false,
        useYn: 'N'
    },
    DashboardEdit: {
        category: { value: SAMPLE_DATA.category, label: SAMPLE_DATA.category },
        name: SAMPLE_DATA.name,
        quantity: SAMPLE_DATA.quantity,
        description: SAMPLE_DATA.description,
        ingredients_1: SAMPLE_DATA.ingredients.includes('chocolate'),
        ingredients_2: SAMPLE_DATA.ingredients.includes('strawberry'),
        ingredients_3: SAMPLE_DATA.ingredients.includes('cheese'),
        ingredients_4: SAMPLE_DATA.ingredients.includes('others'),
        useYn: SAMPLE_DATA.useYn
    }
};

export const FORM_OPTIONS = {
    dashboardUpload: {
        defaultValues: DEFAULT_VALUE.DashboardUpload,
        resolver: yupResolver(SCHEMA.Dashboard)
    },
    dashboardEdit: {
        defaultValues: DEFAULT_VALUE.DashboardEdit,
        resolver: yupResolver(SCHEMA.Dashboard)
    }
};
