import { shallowEqual } from 'react-redux';

import { Close as CloseIcon } from '@mui/icons-material';
import { Dialog, DialogTitle, Typography } from '@mui/material';

import { setClose } from 'slices/modalSlice';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import { StyledImageContainer, StyledImageDialogContent } from 'components/Modals/ImageModal/styles';

function ImageModal() {
    const dispatch = useAppDispatch();
    const { imgOpen, data } = useAppSelector(
        (state) => ({ imgOpen: state.modal.imgOpen, data: state.modal.data }),
        shallowEqual
    );

    const onClose = () => dispatch(setClose());

    return (
        imgOpen && (
            <Dialog
                disableEscapeKeyDown
                open={imgOpen}
                onClose={(_event, reason) => {
                    if (reason !== 'backdropClick') {
                        onClose();
                    }
                }}
            >
                <DialogTitle>
                    <StyledImageContainer container direction="row">
                        <Typography variant="h2">이미지 조회</Typography>
                        <CloseIcon fontSize="large" onClick={onClose} />
                    </StyledImageContainer>
                </DialogTitle>
                <StyledImageDialogContent>
                    <img width="100%" src={data} alt="preview" />
                </StyledImageDialogContent>
            </Dialog>
        )
    );
}

export default ImageModal;
