// Toggle work env mode (change access to some lists on top menu and other UI elements)
export const TOGGLE_WORK_ENV = 'TOGGLE_WORK_ENV';

export function toggleWorkEnv(state) {
  return { type: TOGGLE_WORK_ENV, state };
}

// Toggle settings window visibility
export const TOGGLE_SETTINGS_WIN = 'TOGGLE_SETTINGS_WIN';

export function toggleSettings(state) {
  return { type: TOGGLE_SETTINGS_WIN, state };
}
