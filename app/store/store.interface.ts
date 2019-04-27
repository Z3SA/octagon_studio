interface IStore {
  /** Info about current project */
  project: any;

  /** State of main window */
  main: {
    modals: {
      /** Visibility of modal "About app" */
      aboutAppVisible: boolean;
    };
  };
}
