import { useState } from 'react';

import { Button, Typography } from '@mui/material';

import { useMenu } from 'hooks/common';

import ToastUIEditor from 'components/ToastUIEditor';
import { StyledPaper } from 'pages/Editor/styles';

import { MENU_CONFIG } from 'configs/menu';

const dummy =
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor felis, volutpat sit amet maximus nec, tempus auctor diam. Nunc odio elit,  ' +
    'commodo quis dolor in, sagittis scelerisque nibh. Suspendisse consequat, sapien sit amet pulvinar tristique, augue ante dapibus nulla, eget gravida ' +
    'turpis est sit amet nulla. Vestibulum lacinia mollis accumsan. Vivamus porta cursus libero vitae mattis. In gravida bibendum orci, id faucibus felis molestie ac.  ' +
    'Etiam vel elit cursus, scelerisque dui quis, auctor risus.</p>';

const Editor = () => {
    useMenu(MENU_CONFIG.editor);

    const [contents, setContents] = useState(dummy);

    const onClick = () => console.log(contents);

    return (
        <StyledPaper>
            <Typography variant="h2" component="h2">
                에디터
            </Typography>
            <ToastUIEditor contents={contents} setContents={setContents} />
            <Button fullWidth variant="contained" onClick={onClick}>
                저장
            </Button>
        </StyledPaper>
    );
};

export default Editor;
