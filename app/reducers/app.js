import { TOGGLE_WORK_ENV, TOGGLE_SETTINGS_WIN } from '../actions/app';

// Main app container reducers

// Initial state of app
const initialState = {
  workDevDisabled: true,
  settingsWinVisible: false
};

export default function appMain(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_WORK_ENV:
      return Object.assign({}, state, {
        workDevDisabled: action.state
      });
    case TOGGLE_SETTINGS_WIN:
      return Object.assign({}, state, {
        settingsWinVisible: action.state
      });
    default:
      return state;
  }
}
