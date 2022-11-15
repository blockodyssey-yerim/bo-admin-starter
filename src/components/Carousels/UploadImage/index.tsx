import React, { useState } from 'react';

import {
    Image as ImageIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

import {
    StyledLargeImageContainer,
    StyledDefaultImage,
    StyledButtonsContainer,
    StyledImageButton,
    StyledNoImage
} from 'components/Carousels/UploadImage/styles';
import { IUploadImage } from 'components/Carousels/UploadImage/types';

function UploadImage({ imageIndex, setImageIndex, imageFiles = [] }: IUploadImage) {
    const [imgError, setImgError] = useState(false);

    const onPreviousImage = () => {
        if (imageIndex <= 0) {
            setImageIndex(imageFiles.length - 1);
        } else {
            setImageIndex((prevState) => prevState - 1);
        }
    };

    const onNextImage = () => {
        if (imageIndex >= imageFiles.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex((prevState) => prevState + 1);
        }
    };

    return imageFiles[imageIndex] ? (
        <StyledLargeImageContainer container>
            {imgError ? (
                <StyledDefaultImage>
                    <ImageIcon />
                </StyledDefaultImage>
            ) : (
                <img
                    width="100%"
                    height={500}
                    src={imageFiles[imageIndex].preview as string}
                    alt="product img"
                    onError={() => setImgError(true)}
                />
            )}
            {imageFiles.length > 1 && (
                <StyledButtonsContainer item xs container>
                    <StyledImageButton startIcon={<ChevronLeftIcon />} variant="contained" onClick={onPreviousImage} />
                    <StyledImageButton endIcon={<ChevronRightIcon />} variant="contained" onClick={onNextImage} />
                </StyledButtonsContainer>
            )}
        </StyledLargeImageContainer>
    ) : (
        <StyledNoImage />
    );
}

export default UploadImage;
