/**
 * Enum representing successful HTTP status codes (200-226).
 * @enum {number}
 */
export enum SuccessfulStatusCode {
  /**
   * Status code 200 - OK.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200}
   */
  OK = 200,

  /**
   * Status code 201 - Created.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201}
   */
  CREATED = 201,

  /**
   * Status code 202 - Accepted.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202}
   */
  ACCEPTED = 202,

  /**
   * Status code 203 - Non-Authoritative Information.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203}
   */
  NON_AUTHORITATIVE_INFORMATION = 203,

  /**
   * Status code 204 - No Content.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204}
   */
  NO_CONTENT = 204,

  /**
   * Status code 205 - Reset Content.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205}
   */
  RESET_CONTENT = 205,

  /**
   * Status code 206 - Partial Content.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206}
   */
  PARTIAL_CONTENT = 206,

  /**
   * Status code 207 - Multi-Status (WebDAV).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207}
   */
  MULTI_STATUS = 207,

  /**
   * Status code 208 - Already Reported (WebDAV).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208}
   */
  ALREADY_REPORTED = 208,

  /**
   * Status code 226 - IM Used (HTTP Delta encoding).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226}
   */
  IM_USED = 226,
}

/**
 * Enum representing successful HTTP status messages (200-226).
 * @enum {string}
 */
export enum SuccessfulMessage {
  /**
   * Message for status code 200 - OK.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200}
   */
  OK = 'The request has succeeded.',

  /**
   * Message for status code 201 - Created.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201}
   */
  CREATED = 'The request has been fulfilled and a new resource has been created.',

  /**
   * Message for status code 202 - Accepted.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202}
   */
  ACCEPTED = 'The request has been accepted for processing, but the processing has not been completed.',

  /**
   * Message for status code 203 - Non-Authoritative Information.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203}
   */
  NON_AUTHORITATIVE_INFORMATION = 'The request was successful but the information may be from a third party.',

  /**
   * Message for status code 204 - No Content.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204}
   */
  NO_CONTENT = 'The request was successful but there is no content to send in the response.',

  /**
   * Message for status code 205 - Reset Content.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205}
   */
  RESET_CONTENT = 'The request was successful, please reset the document view.',

  /**
   * Message for status code 206 - Partial Content.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206}
   */
  PARTIAL_CONTENT = 'The server is delivering only part of the resource due to a range header sent by the client.',

  /**
   * Message for status code 207 - Multi-Status (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207}
   */
  MULTI_STATUS = 'The message body contains multiple status codes for separate operations (WebDAV).',

  /**
   * Message for status code 208 - Already Reported (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208}
   */
  ALREADY_REPORTED = 'The members of a DAV binding have already been enumerated (WebDAV).',

  /**
   * Message for status code 226 - IM Used (HTTP Delta encoding).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226}
   */
  IM_USED = 'The server has fulfilled the request for the resource, and the response is a representation of the result of one or more instance manipulations applied to the current instance.',
}
