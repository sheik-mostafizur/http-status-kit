/**
 * Enum representing server error HTTP status codes (500-511).
 * @enum {number}
 */
export enum ServerErrorStatusCode {
  /**
   * Status code 500 - Internal Server Error.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500}
   */
  INTERNAL_SERVER_ERROR = 500,

  /**
   * Status code 501 - Not Implemented.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501}
   */
  NOT_IMPLEMENTED = 501,

  /**
   * Status code 502 - Bad Gateway.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502}
   */
  BAD_GATEWAY = 502,

  /**
   * Status code 503 - Service Unavailable.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503}
   */
  SERVICE_UNAVAILABLE = 503,

  /**
   * Status code 504 - Gateway Timeout.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504}
   */
  GATEWAY_TIMEOUT = 504,

  /**
   * Status code 505 - HTTP Version Not Supported.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505}
   */
  HTTP_VERSION_NOT_SUPPORTED = 505,

  /**
   * Status code 506 - Variant Also Negotiates.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506}
   */
  VARIANT_ALSO_NEGOTIATES = 506,

  /**
   * Status code 507 - Insufficient Storage (WebDAV).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507}
   */
  INSUFFICIENT_STORAGE = 507,

  /**
   * Status code 508 - Loop Detected (WebDAV).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508}
   */
  LOOP_DETECTED = 508,

  /**
   * Status code 510 - Not Extended.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510}
   */
  NOT_EXTENDED = 510,
}

/**
 * Enum representing server error HTTP status messages (500-511).
 * @enum {string}
 */
export enum ServerErrorMessage {
  /**
   * Message for status code 500 - Internal Server Error.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500}
   */
  INTERNAL_SERVER_ERROR = "The server has encountered a situation it doesn't know how to handle.",

  /**
   * Message for status code 501 - Not Implemented.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501}
   */
  NOT_IMPLEMENTED = 'The server does not support the functionality required to fulfill the request.',

  /**
   * Message for status code 502 - Bad Gateway.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502}
   */
  BAD_GATEWAY = 'The server, while acting as a gateway or proxy, received an invalid response from the upstream server.',

  /**
   * Message for status code 503 - Service Unavailable.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503}
   */
  SERVICE_UNAVAILABLE = 'The server is not ready to handle the request, usually due to being overloaded or down for maintenance.',

  /**
   * Message for status code 504 - Gateway Timeout.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504}
   */
  GATEWAY_TIMEOUT = 'The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.',

  /**
   * Message for status code 505 - HTTP Version Not Supported.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505}
   */
  HTTP_VERSION_NOT_SUPPORTED = 'The server does not support the HTTP protocol version that was used in the request.',

  /**
   * Message for status code 506 - Variant Also Negotiates.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506}
   */
  VARIANT_ALSO_NEGOTIATES = 'The server has an internal configuration error and needs to negotiate a different variant.',

  /**
   * Message for status code 507 - Insufficient Storage (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507}
   */
  INSUFFICIENT_STORAGE = 'The server is unable to store the representation needed to complete the request.',

  /**
   * Message for status code 508 - Loop Detected (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508}
   */
  LOOP_DETECTED = 'The server detected an infinite loop while processing the request (WebDAV).',

  /**
   * Message for status code 510 - Not Extended.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510}
   */
  NOT_EXTENDED = 'Further extensions to the request are required for the server to fulfill it.',
}
