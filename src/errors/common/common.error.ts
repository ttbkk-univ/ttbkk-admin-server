import { CommonError } from '../error.interfaces';

export const ForbiddenError: CommonError = {
  code: 'ForbiddenError',
  description: '접근권한이 없습니다',
};

export const ExpiredTokenError: CommonError = {
  code: 'ExpiredTokenError',
  description: '토큰이 만료되었습니다',
};

export const ClassValidatorError: CommonError = {
  code: 'ClassValidatorError',
  description: 'ClassValidatorError 발생',
};

export const BlockedAccountError: CommonError = {
  code: 'BlockedAccountError',
  description: '계정이 블록되어있습니다',
};
