import { FileExtensions } from './file-system';

/** Folders and files in App Data folder of editor */
const appData = {
  folder: `${process.env.APPDATA}/Octagon Modmaking Studio/Data`,
  cfg: `octagon.${FileExtensions.CFG}`,
  langsFolder: '/langs',
  langsMeta: `langsmeta.${FileExtensions.CFG}`,
  session: `session.${FileExtensions.CFG}`,
  windowSession: `window_session.${FileExtensions.CFG}`,
  theme: `theme.${FileExtensions.CFG}`,
  user: `user.${FileExtensions.CFG}`,
};

export default appData;
