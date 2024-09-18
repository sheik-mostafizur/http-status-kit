import {
  ClientErrorMessage,
  ClientErrorStatusCode,
} from './client-error-responses';
import {
  InformationalMessage,
  InformationalStatusCode,
} from './informational-responses';
import {
  RedirectionMessage,
  RedirectionStatusCode,
} from './redirection-responses';
import {
  ServerErrorMessage,
  ServerErrorStatusCode,
} from './server-error-responses';
import {
  SuccessfulMessage,
  SuccessfulStatusCode,
} from './successful-responses';

type EnumValues<T> = T[keyof T];

type StatusCodeResponses =
  | EnumValues<typeof InformationalStatusCode>
  | EnumValues<typeof SuccessfulStatusCode>
  | EnumValues<typeof RedirectionStatusCode>
  | EnumValues<typeof ClientErrorStatusCode>
  | EnumValues<typeof ServerErrorStatusCode>;

type StatusMessageResponses =
  | EnumValues<typeof InformationalMessage>
  | EnumValues<typeof SuccessfulMessage>
  | EnumValues<typeof RedirectionMessage>
  | EnumValues<typeof ClientErrorMessage>
  | EnumValues<typeof ServerErrorMessage>;

/**
 * Object containing HTTP status codes categorized by type.
 * Includes informational, successful, redirection, client error, and server error status codes.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status} for more information on HTTP status codes.
 */
export const StatusCodes = {
  ...InformationalStatusCode,
  ...SuccessfulStatusCode,
  ...RedirectionStatusCode,
  ...ClientErrorStatusCode,
  ...ServerErrorStatusCode,
} as const;

/**
 * Type representing all possible HTTP status codes.
 */
export type StatusCodes = StatusCodeResponses;

/**
 * Object containing HTTP status messages categorized by type.
 * Includes informational, successful, redirection, client error, and server error status messages.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status} for more information on HTTP status codes.
 */
export const StatusMessages = {
  ...InformationalMessage,
  ...SuccessfulMessage,
  ...RedirectionMessage,
  ...ClientErrorMessage,
  ...ServerErrorMessage,
} as const;

/**
 * Type representing all possible HTTP status messages.
 */
export type StatusMessages = StatusMessageResponses;
