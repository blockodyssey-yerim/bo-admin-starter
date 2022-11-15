import { useRef } from 'react';

import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor as ToastEditor, Viewer as ToastViewer } from '@toast-ui/react-editor';

import { Typography } from '@mui/material';

import { useMessage } from 'hooks/modal';

import { postData } from 'api';
import { IResponseData } from 'api/types';
import { StyledContainer, StyledViewerContainer } from 'components/ToastUIEditor/styles';
import { IToastUIEditor } from 'components/ToastUIEditor/types';

import { VALIDATION_MESSAGES } from 'constants/messages';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/toastui-editor.css';

type ReturnType = {
    url: string;
};

type BodyType = FormData;

function ToastUIEditor({ contents, setContents }: IToastUIEditor) {
    const editorRef = useRef<ToastEditor | null>(null);

    const handleMessage = useMessage();

    const onChange = () => {
        setContents(editorRef.current!.getInstance().getHTML());
    };

    const imageUpload = async (file: Blob, callback: (url: string, text?: string) => void) => {
        if (file) {
            const formData = new FormData();
            formData.append('idx', '1');
            formData.append('files', file);

            await postData<IResponseData<ReturnType>, BodyType>(
                `${process.env.REACT_APP_BASE_URL}/upload`,
                formData,
                true
            )
                .then((res) => {
                    const imgUrl = res.data.url;
                    callback(imgUrl, 'image test');
                })
                .catch(() => {
                    handleMessage(VALIDATION_MESSAGES.uploadImage);
                });
        } else {
            handleMessage(VALIDATION_MESSAGES.uploadImage);
        }
    };

    return (
        <StyledContainer>
            <ToastEditor
                ref={editorRef}
                initialValue={contents}
                height="600px"
                placeholder="내용을 입력해주세요."
                previewStyle="vertical"
                initialEditType="wysiwyg"
                toolbarItems={[
                    ['heading', 'bold', 'italic', 'strike'],
                    ['hr', 'quote'],
                    ['ul', 'ol', 'task', 'indent', 'outdent'],
                    ['table', 'image', 'link'],
                    ['code', 'codeblock']
                ]}
                hideModeSwitch
                useCommandShortcut={false}
                usageStatistics={false}
                hooks={{ addImageBlobHook: (blob, callback) => imageUpload(blob, callback) }}
                onChange={onChange}
                language="ko-KR"
            />
            <StyledViewerContainer>
                <Typography component="h3" variant="h3">
                    ToastUI Viewer
                </Typography>
                <ToastViewer initialValue={contents} />
            </StyledViewerContainer>
        </StyledContainer>
    );
}

export default ToastUIEditor;
