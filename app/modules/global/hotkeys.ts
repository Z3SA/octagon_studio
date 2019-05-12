import { KeyMap } from 'react-hotkeys';

export interface IGlobalHotkeyMap extends KeyMap {
  OPEN_SETTINGS: any;
}

interface IDefaultHotKeyHandler {
  [key: string]: (keyEvent?: KeyboardEvent) => void;
}

export interface IGLobalHotkeyResolver extends IDefaultHotKeyHandler {
  OPEN_SETTINGS: () => void;
}

export const globalHotKeyMap: IGlobalHotkeyMap = {
  OPEN_SETTINGS: 'f10',
};
