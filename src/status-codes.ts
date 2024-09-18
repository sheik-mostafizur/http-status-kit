/**
 * Enum representing informational HTTP status codes (100-103).
 * Enum representing successful HTTP status codes (200-226).
 * Enum representing redirection HTTP status codes (300-308).
 * Enum representing client error HTTP status codes (400-451).
 * Enum representing server error HTTP status codes (500-511).
 * @enum {number}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status}
 */
export enum statusCodes {
  /**
   * Status code 100 - Continue.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100}
   */
  CONTINUE = 100,

  /**
   * Status code 101 - Switching Protocols.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101}
   */
  SWITCHING_PROTOCOLS = 101,

  /**
   * Status code 102 - Processing (WebDAV).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102}
   */
  PROCESSING = 102,

  /**
   * Status code 103 - Early Hints (Used to return some response headers before final HTTP message).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103}
   */
  EARLY_HINTS = 103,

  // Enum representing successful HTTP status codes (200-226).

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

  // Enum representing redirection HTTP status codes (300-308).

  /**
   * Status code 300 - Multiple Choices.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300}
   */
  MULTIPLE_CHOICES = 300,

  /**
   * Status code 301 - Moved Permanently.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301}
   */
  MOVED_PERMANENTLY = 301,

  /**
   * Status code 302 - Found (Previously "Moved Temporarily").
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302}
   */
  FOUND = 302,

  /**
   * Status code 303 - See Other.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303}
   */
  SEE_OTHER = 303,

  /**
   * Status code 304 - Not Modified.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304}
   */
  NOT_MODIFIED = 304,

  /**
   * Status code 305 - Use Proxy (Deprecated).
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305}
   */
  USE_PROXY = 305,

  /**
   * Status code 307 - Temporary Redirect.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307}
   */
  TEMPORARY_REDIRECT = 307,

  /**
   * Status code 308 - Permanent Redirect.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308}
   */
  PERMANENT_REDIRECT = 308,

  //  Enum representing client error HTTP status codes (400-451).

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

  // Enum representing server error HTTP status codes (500-511).

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
