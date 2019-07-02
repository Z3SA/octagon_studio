import { fileExtensions } from './fileExtensions.enum';

/** Folders and files in App Data folder of editor */
const appData = {
  folder: `${process.env.APPDATA}/Octagon Modmaking Studio/Data`,
  cfg: `octagon.${fileExtensions.CFG}`,
  langsFolder: '/langs',
  langsMeta: `langsmeta.${fileExtensions.CFG}`,
  session: `session.${fileExtensions.CFG}`,
  windowSession: `window_session.${fileExtensions.CFG}`,
  theme: `theme.${fileExtensions.CFG}`,
  user: `user.${fileExtensions.CFG}`,
};

export default appData;
