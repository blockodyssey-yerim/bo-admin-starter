import { useEffect, useState, useCallback } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { Box, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { useMenu } from 'hooks/common';
import { useDialog, useMessage } from 'hooks/modal';

import UploadImage from 'components/UploadImage';
import PageButton from 'layout/PageButton';
import PageHeader from 'layout/PageHeader';
import { StyledContainer, StyledGrid } from 'pages/Dashboard/styles';
import { ImageFilesType } from 'pages/Dashboard/types';
import UploadForm from 'pages/Dashboard/Upload/components/Form';
import useDashboardUpload from 'pages/Dashboard/Upload/hooks/useDashboardUpload';
import { IFormValues } from 'pages/Dashboard/Upload/types';

import { FORM_OPTIONS } from 'configs/form/dashboard';
import { MENU_CONFIG } from 'configs/menu';

import { SUBMIT_CANCEL, SUBMIT_MESSAGES } from 'constants/messages';

import theme from 'styles/theme/form';

const { defaultValues, resolver } = FORM_OPTIONS.dashboardUpload;

export default function Upload() {
    const methods = useForm<IFormValues>({ defaultValues, resolver });

    useMenu(MENU_CONFIG.dashboard);
    const { mutate } = useDashboardUpload();
    const handleDialog = useDialog();
    const handleMessage = useMessage();

    const [imageFiles, setImageFiles] = useState<ImageFilesType[]>([]);

    const handleReset = useCallback(() => {
        methods.clearErrors();
        setImageFiles([]);
        methods.reset(defaultValues);
    }, [methods.clearErrors, methods.reset]);

    useEffect(() => {
        handleReset();
    }, [handleReset]);

    const handleDeleteImageFile = (imageIndex: number) =>
        setImageFiles(imageFiles.filter((_, index) => index !== imageIndex));

    const onConfirm = (type: string) => {
        if (type === 'submit') {
            handleDialog(SUBMIT_MESSAGES.submit).then((isConfirmed) => {
                if (isConfirmed) {
                    const { description } = methods.getValues();
                    mutate({ url: '/dashboard', data: { description } });
                }
            });
        } else {
            handleMessage(SUBMIT_CANCEL[type as keyof typeof SUBMIT_CANCEL]);
        }
    };

    return (
        <FormProvider {...methods}>
            <StyledContainer>
                <ThemeProvider theme={theme}>
                    <Box component="form" onSubmit={methods.handleSubmit(() => onConfirm('submit'))}>
                        <PageHeader text="디저트 등록하기" path="/" />
                        <StyledGrid container>
                            <Grid item xs="auto">
                                <UploadImage
                                    text="디저트 사진 등록"
                                    imageFiles={imageFiles}
                                    setImageFiles={setImageFiles}
                                    onConfirm={onConfirm}
                                    handleDeleteImageFile={handleDeleteImageFile}
                                />
                            </Grid>
                            <Grid item xs>
                                <UploadForm />
                            </Grid>
                        </StyledGrid>
                        <PageButton type="upload" loading={false} onConfirm={onConfirm} />
                    </Box>
                </ThemeProvider>
            </StyledContainer>
        </FormProvider>
    );
}
