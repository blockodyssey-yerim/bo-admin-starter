export const DEFAULT_MESSAGES = {
    changeComplete: {
        message: '정상 처리되었습니다.'
    },
    fail: {
        title: '잘못된 요청',
        message: '잘못된 요청입니다. 다시 시도해주세요.'
    },
    error: {
        title: '일시적인 오류',
        message: '다시 시도해주세요. \n동일한 오류가 지속된다면 관리자에게 문의해주세요.'
    },
    admin: {
        title: '관리자 문의',
        message:
            '데이터를 불러오는데 오류가 발생했습니다. \n확인을 위하여 관리자에게 문의해주세요. \n오류 문의 : adm_manager@blockodyssey.io'
    }
};

export const SUBMIT_CANCEL = {
    reset: {
        messageType: 'confirm',
        confirmType: 'reset',
        title: '초기화',
        message: '입력한 내용을 삭제하시겠습니까?',
        text: '초기화'
    },
    uploadCancel: {
        messageType: 'confirm',
        confirmType: 'return',
        title: '목록으로 돌아가기',
        message: '목록으로 돌아가시겠습니까? \n입력된 정보는 저장되지 않습니다.'
    },
    editCancel: {
        messageType: 'confirm',
        confirmType: 'return',
        title: '목록으로 돌아가기',
        message: '목록으로 돌아가시겠습니까? \n입력된 정보는 수정되지 않습니다.'
    }
};

export const SUBMIT_MESSAGES = {
    submit: {
        messageType: 'confirm',
        confirmType: 'submit',
        title: '등록',
        message: '입력한 정보를 등록하시겠습니까?',
        text: '등록'
    },
    editSubmit: {
        messageType: 'confirm',
        confirmType: 'submit',
        title: '수정',
        message: '정보를 수정하시겠습니까?',
        text: '수정'
    },
    uploadComplete: {
        title: '등록 완료',
        message: '등록되었습니다.',
        isRedirect: 'progress'
    },
    editComplete: {
        title: '수정 완료',
        message: '수정되었습니다.'
    }
};

export const VALIDATION_MESSAGES = {
    uploadImage: {
        title: '이미지 업로드 오류',
        message: '이미지를 불러오는 중 문제가 발생하였습니다. 잠시 후 다시 시도해주세요.'
    },
    fileSizePx: {
        title: '파일 사이즈 오류',
        message: '가로/세로 600px 이상의 파일을 첨부해주세요'
    },
    fileSizeMb: {
        title: '파일 사이즈 오류',
        message: '5MB 이하의 이미지를 첨부해주세요'
    },
    fileType: {
        title: '파일 형식 오류',
        message: '.jpg, .jpeg, .png, .gif 파일을 첨부해주세요'
    }
};

export const DELETE_CONFIRM_MESSAGES = {
    delete: {
        messageType: 'confirm',
        title: '삭제',
        message: '삭제하시겠습니까?',
        text: '삭제'
    },
    deleteComplete: {
        title: '삭제 완료',
        message: '삭제되었습니다.'
    }
};

export const SEARCH_MESSAGES = {
    noDate: {
        title: '검색 오류',
        message: '시작일과 종료일을 선택해주세요.'
    }
};
