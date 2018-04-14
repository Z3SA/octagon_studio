import { TOGGLE_WORK_ENV, TOGGLE_SETTINGS_WIN } from "../actions/app";

// Main app container reducers

// Initial state of app
const initialState = {
    workDevEnabled: false,
    settingsWinVisible: false
}

export default const appMain = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_WORK_ENV:
            return Object.assign({}, state, {
                workDevEnabled: action.state
            })
        case TOGGLE_SETTINGS_WIN:
            return Object.assign({}, state, {
                settingsWinVisible: action.state
            })
        default:
            return state
    }

    return state
}