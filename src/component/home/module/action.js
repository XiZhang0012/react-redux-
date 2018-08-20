
export const clickAdd = () => (dispatch, store) => {
        dispatch({
            type:'HM_add',
        })
}

export const clickRever =() => ({
        type:'HM_clickRever',
})



export const goDetail = () => (dispatch, store) => {
    dispatch({
        type:'HM_clickRever',
    })
}

