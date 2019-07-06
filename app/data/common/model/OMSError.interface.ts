/**
 * Error description in while-run of editor
 */
export interface OMSError {
  /** Error code (will be describe in docs) */
  code: number;

  /** Error desc */
  message: string;

  /** All info about error */
  data: any;
}
