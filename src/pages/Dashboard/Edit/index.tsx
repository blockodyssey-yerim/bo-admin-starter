import { useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { Box, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { useMenu } from 'hooks/common';
import { useDialog } from 'hooks/modal';

import UploadImage from 'components/UploadImage';
import { SAMPLE_DATA } from 'dummy';
import PageButton from 'layout/PageButton';
import PageHeader from 'layout/PageHeader';
import EditForm from 'pages/Dashboard/Edit/components/Form';
import useDashboardEdit from 'pages/Dashboard/Edit/hooks/useDashboardEdit';
import { IFormValues, ImageType } from 'pages/Dashboard/Edit/types';
import useGetDashboardData from 'pages/Dashboard/hooks/useGetDashboardData';
import { StyledContainer, StyledGrid } from 'pages/Dashboard/styles';
import { ImageFilesType } from 'pages/Dashboard/types';

import { FORM_OPTIONS } from 'configs/form/dashboard';
import { MENU_CONFIG } from 'configs/menu';

import { SUBMIT_CANCEL, SUBMIT_MESSAGES } from 'constants/messages';

import theme from 'styles/theme/form';

export default function Edit() {
    const { search } = useLocation();
    const { idx } = useParams<{ idx: string }>();
    const history = useHistory();

    const methods = useForm<IFormValues>(FORM_OPTIONS.dashboardEdit);

    const menu = useMenu(MENU_CONFIG.dashboard);
    const handleDialog = useDialog();

    const [imageFiles, setImageFiles] = useState<ImageFilesType[]>([]);

    // TODO: DEMO 코드 제거
    // ==================================DEMO==================================
    const data = SAMPLE_DATA;
    const images: ImageType[] = [];
    // ==================================DEMO==================================

    const { isSuccess } = useGetDashboardData({
        menu,
        onSuccess: (detailData) => {
            methods.clearErrors();
            setImageFiles([]);
            methods.reset({
                category: { value: data?.category, label: data?.category },
                name: data?.name,
                quantity: data?.quantity,
                description: data?.description,
                ingredients_1: data?.ingredients.includes('chocolate'),
                ingredients_2: data?.ingredients.includes('strawberry'),
                ingredients_3: data?.ingredients.includes('cheese'),
                ingredients_4: data?.ingredients.includes('others'),
                useYn: data?.useYn
            });

            images?.forEach((image: ImageType) => {
                setImageFiles((prevState) => [...prevState, { idx: image.idx, file: null, preview: image.src }]);
            });
        }
    });

    const { mutate } = useDashboardEdit();

    const handleDeleteImageFile = (imageIndex: number) =>
        setImageFiles(imageFiles.filter((_, index) => index !== imageIndex));

    const onConfirm = (type: string) => {
        if (type === 'submit') {
            handleDialog(SUBMIT_MESSAGES.editSubmit).then((isConfirmed) => {
                if (isConfirmed) {
                    const { description } = methods.getValues();
                    mutate({ url: '/dashboard', data: { index: idx, description } });
                }
            });
        } else if (type === 'reset') {
            handleDialog(SUBMIT_CANCEL.reset).then((isConfirmed) => {
                if (isConfirmed) {
                    methods.clearErrors();
                    setImageFiles([]);
                    methods.reset({
                        category: { value: data?.category, label: data?.category },
                        name: data?.name,
                        quantity: data?.quantity,
                        description: data?.description,
                        ingredients_1: data?.ingredients.includes('chocolate'),
                        ingredients_2: data?.ingredients.includes('strawberry'),
                        ingredients_3: data?.ingredients.includes('cheese'),
                        ingredients_4: data?.ingredients.includes('others'),
                        useYn: data?.useYn
                    });

                    images?.forEach((image: { idx: number; src: string }) => {
                        setImageFiles((prevState) => [
                            ...prevState,
                            { idx: image.idx, file: null, preview: image.src }
                        ]);
                    });
                }
            });
        } else {
            handleDialog(SUBMIT_CANCEL[type as keyof typeof SUBMIT_CANCEL]).then((isConfirmed) => {
                if (isConfirmed) {
                    history.push({ pathname: '/', search });
                }
            });
        }
    };

    return (
        <FormProvider {...methods}>
            <StyledContainer>
                <ThemeProvider theme={theme}>
                    <Box component="form" onSubmit={methods.handleSubmit(() => onConfirm('submit'))}>
                        <PageHeader text="디저트 수정하기" path={`/${search}`} />
                        <StyledGrid container>
                            <Grid item xs="auto">
                                <UploadImage
                                    text="디저트 사진 수정"
                                    imageFiles={imageFiles}
                                    setImageFiles={setImageFiles}
                                    onConfirm={onConfirm}
                                    handleDeleteImageFile={handleDeleteImageFile}
                                />
                            </Grid>
                            <Grid item xs>
                                <EditForm />
                            </Grid>
                        </StyledGrid>
                        <PageButton type="upload" onConfirm={onConfirm} />
                    </Box>
                </ThemeProvider>
            </StyledContainer>
        </FormProvider>
    );
}
