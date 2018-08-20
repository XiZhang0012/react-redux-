const defaultDetail = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
    
}
export default function reducer(state = defaultDetail, action) {
    switch (action.type) {
        case 'DT_add':
            return {
                ...state,
                index:state.index+1
        }
        case 'UP_uploadImg':
            return {
                ...state,
                fileList:[...action.fileList.fileList]
        }
        case 'UP_previewImage':
            return {
                ...state,
                previewImage:action.imageUrl,
                previewVisible: action.previewVisible
        }
        case 'UP_handleCancel':
            return {
                ...state,
                previewVisible: false
        }
        case 'UP_handleInputChange':
            return {
                ...state,
                [action.key]:action.value
        }
        default:
            return state

    }
}

