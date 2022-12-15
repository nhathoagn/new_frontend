import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {
    dark: true
}

const themeReducer = (state = initialState, action) => {
    switch (action.type){
        case GLOBALTYPES.TOGGLE_THEME:
            return {
                dark: action.dark
            };
        case GLOBALTYPES.SET_THEME:
            return {
                dark: action.dark
            }
        default:
            return state;
    }
}


export default themeReducer