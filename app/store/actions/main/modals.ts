export const TOGGLE_ABOUT_APP_MODAL = 'TOGGLE_ABOUT_APP_MODAL';
export const TOGGLE_SETTINGS_MODAL = 'TOGGLE_SETTINGS_MODAL';
export const TOGGLE_HOTKEYS_MODAL = 'TOGGLE_HOTKEYS_MODAL';

export interface IToggleModalAction<T> {
  readonly type: T;
  readonly visible: boolean;
}

export function toggleAboutAppModal(
  visibility: boolean
): IToggleModalAction<typeof TOGGLE_ABOUT_APP_MODAL> {
  return {
    type: TOGGLE_ABOUT_APP_MODAL,
    visible: visibility,
  };
}

export function toggleSettingsModal(
  visibility: boolean
): IToggleModalAction<typeof TOGGLE_SETTINGS_MODAL> {
  return {
    type: TOGGLE_SETTINGS_MODAL,
    visible: visibility,
  };
}

export function toggleHotkeysModal(
  visibility: boolean
): IToggleModalAction<typeof TOGGLE_HOTKEYS_MODAL> {
  return {
    type: TOGGLE_HOTKEYS_MODAL,
    visible: visibility,
  };
}
