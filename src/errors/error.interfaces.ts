export interface CommonError {
  code: string;
  description: string;
}

export interface CriticalError extends CommonError {
  isUnexpected: true;
}
