export const TOGGLE_ABOUT_APP_MODAL = 'TOGGLE_ABOUT_APP_MODAL';

export const hideAboutAppModal = () => {
  return {
    type: TOGGLE_ABOUT_APP_MODAL,
    visible: false,
  };
};

export const showAboutAppModal = () => {
  return {
    type: TOGGLE_ABOUT_APP_MODAL,
    visible: true,
  };
};
