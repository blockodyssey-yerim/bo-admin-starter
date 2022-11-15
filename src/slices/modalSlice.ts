import { createSlice } from '@reduxjs/toolkit';

type ModalType = {
    confirmType: string;
    isConfirmed: boolean;
    progressOpen: boolean;
    data: null | object;

    msgOpen: boolean;
    title: string;
    messageType: string;
    message: string;

    imgOpen: boolean;

    detailOpen: boolean;
};

const initialState: ModalType = {
    confirmType: '',
    isConfirmed: false,
    progressOpen: false,
    data: null,

    msgOpen: false,
    messageType: '',
    title: '',
    message: '',

    imgOpen: false,

    detailOpen: false
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setMessage: (state, { payload }) => {
            state.msgOpen = true;
            state.messageType = payload.type || 'message';
            state.title = payload.title;
            state.message = payload.message;
            state.confirmType = payload.confirmType || '';
        },
        setConfirm: (state) => {
            state.msgOpen = false;
            state.messageType = '';
            state.message = '';
            state.isConfirmed = true;
        },
        setConfirmed: (state) => {
            state.isConfirmed = false;
            state.progressOpen = true;
        },
        setConfirmReset: (state) => {
            state.confirmType = '';
            state.data = null;
            state.progressOpen = false;
        },
        setImage: (state, { payload }) => {
            state.imgOpen = true;
            state.data = payload.data;
        },
        setDetail: (state, { payload }) => {
            state.detailOpen = true;
            state.data = payload.data;
        },
        setClose: (state) => ({ ...state, ...initialState }),
        reset: () => initialState
    }
});

export const { setMessage, setConfirm, setDetail, setImage, setConfirmed, setConfirmReset, setClose, reset } =
    modalSlice.actions;

export const modalSelector = (state: { modal: ModalType }) => state.modal;

export default modalSlice.reducer;
