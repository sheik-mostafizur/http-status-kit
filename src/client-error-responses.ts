/**
 * Enum representing client error HTTP status codes (400-451).
 * @enum {number}
 */
export enum ClientErrorStatusCode {
  /**
   * Status code 400 - Bad Request.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400}
   */
  BAD_REQUEST = 400,

  /**
   * Status code 401 - Unauthorized.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401}
   */
  UNAUTHORIZED = 401,

  /**
   * Status code 402 - Payment Required (Experimental).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402}
   */
  PAYMENT_REQUIRED = 402,

  /**
   * Status code 403 - Forbidden.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403}
   */
  FORBIDDEN = 403,

  /**
   * Status code 404 - Not Found.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404}
   */
  NOT_FOUND = 404,

  /**
   * Status code 405 - Method Not Allowed.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405}
   */
  METHOD_NOT_ALLOWED = 405,

  /**
   * Status code 406 - Not Acceptable.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406}
   */
  NOT_ACCEPTABLE = 406,

  /**
   * Status code 407 - Proxy Authentication Required.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407}
   */
  PROXY_AUTHENTICATION_REQUIRED = 407,

  /**
   * Status code 408 - Request Timeout.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408}
   */
  REQUEST_TIMEOUT = 408,

  /**
   * Status code 409 - Conflict.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409}
   */
  CONFLICT = 409,

  /**
   * Status code 410 - Gone.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410}
   */
  GONE = 410,

  /**
   * Status code 411 - Length Required.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411}
   */
  LENGTH_REQUIRED = 411,

  /**
   * Status code 412 - Precondition Failed.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412}
   */
  PRECONDITION_FAILED = 412,

  /**
   * Status code 413 - Payload Too Large.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413}
   */
  PAYLOAD_TOO_LARGE = 413,

  /**
   * Status code 414 - URI Too Long.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414}
   */
  URI_TOO_LONG = 414,

  /**
   * Status code 415 - Unsupported Media Type.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415}
   */
  UNSUPPORTED_MEDIA_TYPE = 415,

  /**
   * Status code 416 - Range Not Satisfiable.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416}
   */
  RANGE_NOT_SATISFIABLE = 416,

  /**
   * Status code 417 - Expectation Failed.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417}
   */
  EXPECTATION_FAILED = 417,

  /**
   * Status code 418 - I'm a Teapot (RFC 2324).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418}
   */
  IM_A_TEAPOT = 418,

  /**
   * Status code 421 - Misdirected Request.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421}
   */
  MISDIRECTED_REQUEST = 421,

  /**
   * Status code 422 - Unprocessable Entity (WebDAV).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422}
   */
  UNPROCESSABLE_ENTITY = 422,

  /**
   * Status code 423 - Locked (WebDAV).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423}
   */
  LOCKED = 423,

  /**
   * Status code 424 - Failed Dependency (WebDAV).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424}
   */
  FAILED_DEPENDENCY = 424,

  /**
   * Status code 425 - Too Early (RFC 8470).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425}
   */
  TOO_EARLY = 425,

  /**
   * Status code 426 - Upgrade Required.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426}
   */
  UPGRADE_REQUIRED = 426,

  /**
   * Status code 428 - Precondition Required.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428}
   */
  PRECONDITION_REQUIRED = 428,

  /**
   * Status code 429 - Too Many Requests.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429}
   */
  TOO_MANY_REQUESTS = 429,

  /**
   * Status code 431 - Request Header Fields Too Large.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431}
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,

  /**
   * Status code 451 - Unavailable For Legal Reasons.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451}
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
}

/**
 * Enum representing client error HTTP status messages (400-451).
 * @enum {string}
 */
export enum ClientErrorMessage {
  /**
   * Message for status code 400 - Bad Request.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400}
   */
  BAD_REQUEST = 'The server could not understand the request due to invalid syntax.',

  /**
   * Message for status code 401 - Unauthorized.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401}
   */
  UNAUTHORIZED = 'The client must authenticate itself to get the requested response.',

  /**
   * Message for status code 402 - Payment Required (Experimental).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402}
   */
  PAYMENT_REQUIRED = 'Payment is required to access the requested resource.',

  /**
   * Message for status code 403 - Forbidden.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403}
   */
  FORBIDDEN = 'The client does not have access rights to the content.',

  /**
   * Message for status code 404 - Not Found.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404}
   */
  NOT_FOUND = 'The server can not find the requested resource.',

  /**
   * Message for status code 405 - Method Not Allowed.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405}
   */
  METHOD_NOT_ALLOWED = 'The method specified in the request is not allowed for the resource.',

  /**
   * Message for status code 406 - Not Acceptable.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406}
   */
  NOT_ACCEPTABLE = 'The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.',

  /**
   * Message for status code 407 - Proxy Authentication Required.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407}
   */
  PROXY_AUTHENTICATION_REQUIRED = 'The client must authenticate itself with the proxy.',

  /**
   * Message for status code 408 - Request Timeout.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408}
   */
  REQUEST_TIMEOUT = 'The server timed out waiting for the request.',

  /**
   * Message for status code 409 - Conflict.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409}
   */
  CONFLICT = 'The request conflicts with the current state of the resource.',

  /**
   * Message for status code 410 - Gone.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410}
   */
  GONE = 'The requested resource is no longer available and will not be available again.',

  /**
   * Message for status code 411 - Length Required.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411}
   */
  LENGTH_REQUIRED = 'The server requires the Content-Length header to be sent with the request.',

  /**
   * Message for status code 412 - Precondition Failed.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412}
   */
  PRECONDITION_FAILED = 'One or more conditions given in the request header fields were evaluated as false.',

  /**
   * Message for status code 413 - Payload Too Large.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413}
   */
  PAYLOAD_TOO_LARGE = 'The request is larger than the server is willing or able to process.',

  /**
   * Message for status code 414 - URI Too Long.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414}
   */
  URI_TOO_LONG = 'The URI provided was too long for the server to process.',

  /**
   * Message for status code 415 - Unsupported Media Type.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415}
   */
  UNSUPPORTED_MEDIA_TYPE = 'The media format of the requested data is not supported by the server.',

  /**
   * Message for status code 416 - Range Not Satisfiable.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416}
   */
  RANGE_NOT_SATISFIABLE = "The range specified by the Range header field in the request can't be fulfilled.",

  /**
   * Message for status code 417 - Expectation Failed.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417}
   */
  EXPECTATION_FAILED = 'The expectation given in the request header could not be met by the server.',

  /**
   * Message for status code 418 - I'm a Teapot (RFC 2324).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418}
   */
  IM_A_TEAPOT = 'The server refuses the attempt to brew coffee with a teapot.',

  /**
   * Message for status code 421 - Misdirected Request.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421}
   */
  MISDIRECTED_REQUEST = 'The request was directed at a server that is not able to produce a response.',

  /**
   * Message for status code 422 - Unprocessable Entity (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422}
   */
  UNPROCESSABLE_ENTITY = 'The request was well-formed but was unable to be followed due to semantic errors.',

  /**
   * Message for status code 423 - Locked (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423}
   */
  LOCKED = 'The resource that is being accessed is locked.',

  /**
   * Message for status code 424 - Failed Dependency (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424}
   */
  FAILED_DEPENDENCY = 'The request failed due to failure of a previous request.',

  /**
   * Message for status code 425 - Too Early (RFC 8470).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425}
   */
  TOO_EARLY = 'The server is unwilling to risk processing a request that might be replayed.',

  /**
   * Message for status code 426 - Upgrade Required.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426}
   */
  UPGRADE_REQUIRED = 'The client should switch to a different protocol.',

  /**
   * Message for status code 428 - Precondition Required.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428}
   */
  PRECONDITION_REQUIRED = 'The origin server requires the request to be conditional.',

  /**
   * Message for status code 429 - Too Many Requests.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429}
   */
  TOO_MANY_REQUESTS = 'The user has sent too many requests in a given amount of time.',

  /**
   * Message for status code 431 - Request Header Fields Too Large.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431}
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'The server is unwilling to process the request because its header fields are too large.',

  /**
   * Message for status code 451 - Unavailable For Legal Reasons.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451}
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'The server is denying access to the resource as a consequence of a legal demand.',
}
