import { useState } from 'react';

import {
    Image as ImageIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

import {
    StyledImageContainer,
    StyledLargeImageContainer,
    StyledDefaultImage,
    StyledButtonsContainer,
    StyledImageButton,
    StyledSmallImagesContainer,
    StyledSmallImageButton,
    StyledSmallDefaultImage,
    StyledSmallImage,
    StyledNoImageContainer,
    StyledNoImage
} from 'components/Carousels/Image/styles';
import { IImage } from 'components/Carousels/Image/types';

function Image({ images, alt }: IImage) {
    const [imgError, setImgError] = useState(false);
    const [smallImgError, setSmallImgError] = useState<Record<number, boolean>>({});
    const [imageIndex, setImageIndex] = useState(0);

    const onImageClick = (index: number) => setImageIndex(index);

    const onPreviousImage = () => {
        if (imageIndex <= 0) {
            setImageIndex(images.length - 1);
        } else {
            setImageIndex((prevState) => prevState - 1);
        }
    };

    const onNextImage = () => {
        if (imageIndex >= images.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex((prevState) => prevState + 1);
        }
    };

    return (
        <StyledImageContainer>
            {images?.length > 0 ? (
                <>
                    <StyledLargeImageContainer container>
                        {imgError ? (
                            <StyledDefaultImage>
                                <ImageIcon />
                            </StyledDefaultImage>
                        ) : (
                            <img
                                height="100%"
                                src={images[imageIndex].img_detail}
                                alt={alt}
                                onError={() => setImgError(true)}
                            />
                        )}
                        {images.length > 1 && (
                            <StyledButtonsContainer item container xs>
                                <StyledImageButton
                                    startIcon={<ChevronLeftIcon />}
                                    variant="contained"
                                    onClick={onPreviousImage}
                                />
                                <StyledImageButton
                                    endIcon={<ChevronRightIcon />}
                                    variant="contained"
                                    onClick={onNextImage}
                                />
                            </StyledButtonsContainer>
                        )}
                    </StyledLargeImageContainer>
                    <StyledSmallImagesContainer container>
                        {images.map((img, index) => (
                            <StyledSmallImageButton
                                key={index}
                                role="button"
                                tabIndex={0}
                                onClick={() => onImageClick(index)}
                                onKeyDown={() => onImageClick(index)}
                            >
                                {smallImgError[index] ? (
                                    <StyledSmallDefaultImage>
                                        <ImageIcon />
                                    </StyledSmallDefaultImage>
                                ) : (
                                    <StyledSmallImage
                                        width="100%"
                                        height="100%"
                                        src={img.img_detail}
                                        alt={alt}
                                        onError={() => setSmallImgError((prev) => ({ ...prev, [index]: true }))}
                                    />
                                )}
                            </StyledSmallImageButton>
                        ))}
                    </StyledSmallImagesContainer>
                </>
            ) : (
                <StyledNoImageContainer container>
                    <StyledNoImage>image not found</StyledNoImage>
                </StyledNoImageContainer>
            )}
        </StyledImageContainer>
    );
}

export default Image;
