import { useCallback } from 'react';

import { setIsExit } from 'slices/menuSlice';

import { useAppDispatch } from 'hooks/redux';

const usePageExit = () => {
    const dispatch = useAppDispatch();

    const handlePageExit = useCallback((isQuestion: boolean) => dispatch(setIsExit(isQuestion)), [dispatch]);

    return handlePageExit;
};

export default usePageExit;
