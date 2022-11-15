import { CircularProgress, Typography, Dialog } from '@mui/material';

import { setClose } from 'slices/modalSlice';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import { StyledProgressDialogContent } from 'components/Modals/ProgressModal/styles';

export default function ProgressModal() {
    const dispatch = useAppDispatch();
    const progressOpen = useAppSelector((state) => state.modal.progressOpen);

    const onClose = () => dispatch(setClose());

    return (
        progressOpen && (
            <Dialog
                disableEscapeKeyDown
                open={progressOpen}
                onClose={(_event, reason) => {
                    if (reason !== 'backdropClick') {
                        onClose();
                    }
                }}
            >
                <StyledProgressDialogContent>
                    <CircularProgress size={55} />
                    <Typography component="p" variant="h3">
                        처리 중입니다. 잠시만 기다려주세요.
                    </Typography>
                </StyledProgressDialogContent>
            </Dialog>
        )
    );
}
