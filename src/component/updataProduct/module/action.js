export const clickAdd = () => (dispatch, store) => {
    dispatch({
        type:'DT_add',
    })
}
export const uploadImg = ({ fileList }) => (dispatch, store) => {
    dispatch({
        type:'UP_uploadImg',
        fileList:{ fileList }
    })
}
export const previewImageShow = (file,previewVisible) => ({
        type:'UP_previewImage',
        imageUrl:file.url || file.thumbUrl,
        previewVisible
})
export const handleCancel = () => ({
    type:'UP_handleCancel',
})

export const handleInputChange = (value,key) => ({
    type:'UP_handleInputChange',
    key,
    value,
})




