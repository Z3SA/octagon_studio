// This exports is necessary for working of electron attrs and methods in whole React app
// eslint-disable-next-line global-require
export const electron = require('electron').remote;

export const { app } = electron;
