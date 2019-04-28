export const TOGGLE_ABOUT_APP_MODAL = 'TOGGLE_ABOUT_APP_MODAL';

export interface IToggleAboutAppModalAction {
  readonly type: typeof TOGGLE_ABOUT_APP_MODAL;
  readonly visible: boolean;
}

export function toggleAboutAppModal(visibility: boolean): IToggleAboutAppModalAction {
  return {
    type: TOGGLE_ABOUT_APP_MODAL,
    visible: visibility,
  };
}
