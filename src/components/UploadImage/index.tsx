import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import { Add as AddIcon, Close as CloseIcon, Image as ImageIcon } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

import { useMessage } from 'hooks/modal';

import { UploadImageCarousel } from 'components/Carousels';
import {
    StyledIconButton,
    StyledImageButton,
    StyledImageContainer,
    StyledPreviewContainer,
    StyledSmallDefaultImage,
    StyledSmallImage
} from 'components/UploadImage/styles';
import { IUploadImage } from 'components/UploadImage/types';
import PageHeading from 'layout/PageHeading';

import { VALIDATION_MESSAGES } from 'constants/messages';

function UploadImage({ text, imageFiles = [], setImageFiles, onConfirm, handleDeleteImageFile }: IUploadImage) {
    const { idx } = useParams<{ idx: string }>();

    const handleMessage = useMessage();

    const [imgError, setImgError] = useState<Record<number, boolean>>({});
    const [imageIndex, setImageIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(false);

    const handleImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setImageLoading(true);

            const { files } = e.currentTarget;
            if (files) {
                for (const file of files) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setImageFiles((prevState) => [...prevState, { file, preview: reader.result as string }]);
                    };
                    reader.readAsDataURL(file);
                }
            }

            setImageLoading(false);
        } catch (error) {
            handleMessage(VALIDATION_MESSAGES.uploadImage);
        } finally {
            setImageLoading(false);
        }
    };

    const handleDelete = (imageIndex: number) => {
        setImageIndex(0);
        handleDeleteImageFile(imageIndex);
    };

    const onImageClick = (index: number) => setImageIndex(index);

    return (
        <StyledImageContainer>
            <PageHeading type="default" text={text} />
            <UploadImageCarousel imageFiles={imageFiles} imageIndex={imageIndex} setImageIndex={setImageIndex} />
            <StyledPreviewContainer container>
                {imageFiles?.map((image, index) => (
                    <React.Fragment key={index}>
                        {image && (
                            <StyledImageButton
                                role="button"
                                tabIndex={0}
                                onClick={() => onImageClick(index)}
                                onKeyDown={() => onImageClick(index)}
                            >
                                {imgError[index] ? (
                                    <StyledSmallDefaultImage>
                                        <ImageIcon />
                                    </StyledSmallDefaultImage>
                                ) : (
                                    <StyledSmallImage
                                        width="100%"
                                        height={70}
                                        src={image.preview}
                                        alt=""
                                        onError={() => setImgError((prev) => ({ ...prev, [index]: true }))}
                                    />
                                )}
                                {idx && image.idx ? (
                                    <IconButton
                                        aria-label="delete"
                                        onClick={() => onConfirm('delete', { imageIndex: image.idx, index })}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                ) : (
                                    <IconButton aria-label="delete" onClick={() => handleDelete(index)}>
                                        <CloseIcon />
                                    </IconButton>
                                )}
                            </StyledImageButton>
                        )}
                    </React.Fragment>
                ))}
                {/* 다중, 중복 이미지 업로드 */}
                <Box component="label" htmlFor="icon-button-file">
                    <input
                        id="icon-button-file"
                        accept="image/*"
                        type="file"
                        multiple
                        disabled={imageLoading}
                        onChange={handleImageFile}
                        onClick={(e) => (e.currentTarget.value = '')}
                    />
                    <StyledIconButton
                        disabled={imageLoading}
                        component="span"
                        color="primary"
                        aria-label="upload product image"
                    >
                        <AddIcon />
                    </StyledIconButton>
                </Box>
            </StyledPreviewContainer>
        </StyledImageContainer>
    );
}

export default UploadImage;
