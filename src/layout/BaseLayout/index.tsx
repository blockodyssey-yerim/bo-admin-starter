import { useEffect } from 'react';

import { Prompt } from 'react-router-dom';

import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';
import { Fab, Toolbar } from '@mui/material';

import { useAppSelector } from 'hooks/redux';

import { ImageModal, ProgressModal, MessageModal, ConfirmModal, DetailModal } from 'components/Modals';
import { StyledContainer, StyledGrid } from 'layout/BaseLayout/styles';
import { ILayout } from 'layout/BaseLayout/types';
import Header from 'layout/Header';
import ScrollTop from 'layout/ScrollTop';
import SideBar from 'layout/SideBar';

function Layout({ children }: ILayout) {
    const { isExit, showSidebar } = useAppSelector((state) => state.menu);

    const handleExit = (event: BeforeUnloadEvent) => {
        const e = event || window.event;
        e.preventDefault();
        e.returnValue = '';
    };

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isExit) {
            window.addEventListener('beforeunload', handleExit);
            return () => window.removeEventListener('beforeunload', handleExit);
        }
    }, [isExit]);

    return (
        <StyledGrid container>
            <Toolbar id="back-to-top-anchor" />
            <Header />
            <SideBar />
            <StyledContainer open={showSidebar}>{children}</StyledContainer>
            <ProgressModal />
            <ImageModal />
            <DetailModal />
            <ConfirmModal />
            <MessageModal />
            <Prompt when={isExit} message="저장되지 않을 수 있습니다. 페이지를 이동하시겠습니까?" />
            <ScrollTop>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </StyledGrid>
    );
}

export default Layout;
