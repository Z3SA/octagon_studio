export const SET_MAIN_ENVIRONMENT = 'set_main_enviornment';

export enum mainEnvironmentStates {
  start = 'start',
  project = 'project',
  playground = 'playground',
}

export interface ISetMainEnvironmentAction {
  readonly type: typeof SET_MAIN_ENVIRONMENT;
  readonly state: mainEnvironmentStates;
}

export function setMainEnvironment(
  state: mainEnvironmentStates
): ISetMainEnvironmentAction {
  return {
    type: SET_MAIN_ENVIRONMENT,
    state,
  };
}
