/* tslint:disable */
/* eslint-disable */
import { ValidationFail } from '../models/validation-fail';
export interface ErrorResponse {
  errors?: Array<ValidationFail> | null;
  message?: string | null;
}
