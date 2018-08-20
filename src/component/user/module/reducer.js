const defaultDetail = {
    content:"sbsbssbsbsbsxsakdagdahsdvahjsdvashdvahdgadvashdgahdajvdagsdjasdjhasdghasda"
}
export default function reducer(state = defaultDetail, action) {
    switch (action.type) {
        case 'DT_add':
            return {
                ...state,
                index:state.index+1
        }
        default:
            return state

    }
}

