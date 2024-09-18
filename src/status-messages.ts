/**
 * Enum representing informational HTTP status messages (100-103).
 * Enum representing successful HTTP status messages (200-226).
 * Enum representing redirection HTTP status messages (300-308).
 * Enum representing client error HTTP status messages (400-451).
 * Enum representing server error HTTP status codes (500-511).
 * @enum {string}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status}
 */

export enum statusMessages {
  /**
   * Message for status code 100 - Continue.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100}
   */
  CONTINUE = "Continue sending data.",

  /**
   * Message for status code 101 - Switching Protocols.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101}
   */
  SWITCHING_PROTOCOLS = "Switching protocols as requested.",

  /**
   * Message for status code 102 - Processing (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102}
   */
  PROCESSING = "The server has received the request and is still processing it.",

  /**
   * Message for status code 103 - Early Hints.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103}
   */
  EARLY_HINTS = "The server is returning some headers before the final response.",

  // Enum representing successful HTTP status codes (200-226).

  /**
   * Message for status code 200 - OK.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200}
   */
  OK = "Success! Your request has been completed.",

  /**
   * Message for status code 201 - Created.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201}
   */
  CREATED = "Success! New resource created.",

  /**
   * Message for status code 202 - Accepted.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202}
   */
  ACCEPTED = "Request received! We're working on it.",

  /**
   * Message for status code 203 - Non-Authoritative Information.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203}
   */
  NON_AUTHORITATIVE_INFORMATION = "The request was successful but the information may be from a third party.",

  /**
   * Message for status code 204 - No Content.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204}
   */
  NO_CONTENT = "Success! No additional content available.",

  /**
   * Message for status code 205 - Reset Content.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205}
   */
  RESET_CONTENT = "The request was successful, please reset the document view.",

  /**
   * Message for status code 206 - Partial Content.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206}
   */
  PARTIAL_CONTENT = "The server is delivering only part of the resource due to a range header sent by the client.",

  /**
   * Message for status code 207 - Multi-Status (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207}
   */
  MULTI_STATUS = "The message body contains multiple status codes for separate operations (WebDAV).",

  /**
   * Message for status code 208 - Already Reported (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208}
   */
  ALREADY_REPORTED = "The members of a DAV binding have already been enumerated (WebDAV).",

  /**
   * Message for status code 226 - IM Used (HTTP Delta encoding).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226}
   */
  IM_USED = "The server has fulfilled the request for the resource, and the response is a representation of the result of one or more instance manipulations applied to the current instance.",

  // Enum representing redirection HTTP status messages (300-308).

  /**
   * Message for status code 300 - Multiple Choices.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300}
   */
  MULTIPLE_CHOICES = "Multiple options available. Please choose one.",

  /**
   * Message for status code 301 - Moved Permanently.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301}
   */
  MOVED_PERMANENTLY = "The requested resource has been permanently moved to a new URL.",

  /**
   * Message for status code 302 - Found (Previously "Moved Temporarily").
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302}
   */
  FOUND = "The requested resource resides temporarily under a different URI.",

  /**
   * Message for status code 303 - See Other.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303}
   */
  SEE_OTHER = "The response can be found under another URI using a GET method.",

  /**
   * Message for status code 304 - Not Modified.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304}
   */
  NOT_MODIFIED = "The resource has not been modified since the last request.",

  /**
   * Message for status code 305 - Use Proxy (Deprecated).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305}
   */
  USE_PROXY = "The requested resource must be accessed through the proxy.",

  /**
   * Message for status code 307 - Temporary Redirect.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307}
   */
  TEMPORARY_REDIRECT = "The request should be repeated with another URI temporarily.",

  /**
   * Message for status code 308 - Permanent Redirect.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308}
   */
  PERMANENT_REDIRECT = "The request and future requests should be repeated with another URI permanently.",

  // Enum representing client error HTTP status messages (400-451).

  /**
   * Message for status code 400 - Bad Request.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400}
   */
  BAD_REQUEST = "The server could not understand the request due to invalid syntax.",

  /**
   * Message for status code 401 - Unauthorized.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401}
   */
  UNAUTHORIZED = "The client needs authentication for the response.",

  /**
   * Message for status code 402 - Payment Required (Experimental).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402}
   */
  PAYMENT_REQUIRED = "Payment is required to access the requested resource.",

  /**
   * Message for status code 403 - Forbidden.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403}
   */
  FORBIDDEN = "The client does not have access rights to the content.",

  /**
   * Message for status code 404 - Not Found.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404}
   */
  NOT_FOUND = "The server can not find the requested resource.",

  /**
   * Message for status code 405 - Method Not Allowed.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405}
   */
  METHOD_NOT_ALLOWED = "The method specified in the request is not allowed for the resource.",

  /**
   * Message for status code 406 - Not Acceptable.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406}
   */
  NOT_ACCEPTABLE = "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.",

  /**
   * Message for status code 407 - Proxy Authentication Required.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407}
   */
  PROXY_AUTHENTICATION_REQUIRED = "The client must authenticate itself with the proxy.",

  /**
   * Message for status code 408 - Request Timeout.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408}
   */
  REQUEST_TIMEOUT = "The server timed out waiting for the request.",

  /**
   * Message for status code 409 - Conflict.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409}
   */
  CONFLICT = "The request conflicts with the current state of the resource.",

  /**
   * Message for status code 410 - Gone.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410}
   */
  GONE = "The requested resource is no longer available and will not be available again.",

  /**
   * Message for status code 411 - Length Required.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411}
   */
  LENGTH_REQUIRED = "The server requires the Content-Length header to be sent with the request.",

  /**
   * Message for status code 412 - Precondition Failed.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412}
   */
  PRECONDITION_FAILED = "One or more conditions given in the request header fields were evaluated as false.",

  /**
   * Message for status code 413 - Payload Too Large.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413}
   */
  PAYLOAD_TOO_LARGE = "The request is larger than the server is willing or able to process.",

  /**
   * Message for status code 414 - URI Too Long.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414}
   */
  URI_TOO_LONG = "The URI provided was too long for the server to process.",

  /**
   * Message for status code 415 - Unsupported Media Type.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415}
   */
  UNSUPPORTED_MEDIA_TYPE = "The media format of the requested data is not supported by the server.",

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
  EXPECTATION_FAILED = "The expectation given in the request header could not be met by the server.",

  /**
   * Message for status code 418 - I'm a Teapot (RFC 2324).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418}
   */
  IM_A_TEAPOT = "The server refuses the attempt to brew coffee with a teapot.",

  /**
   * Message for status code 421 - Misdirected Request.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421}
   */
  MISDIRECTED_REQUEST = "The request was directed at a server that is not able to produce a response.",

  /**
   * Message for status code 422 - Unprocessable Entity (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422}
   */
  UNPROCESSABLE_ENTITY = "The request was well-formed but was unable to be followed due to semantic errors.",

  /**
   * Message for status code 423 - Locked (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423}
   */
  LOCKED = "The resource that is being accessed is locked.",

  /**
   * Message for status code 424 - Failed Dependency (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424}
   */
  FAILED_DEPENDENCY = "The request failed due to failure of a previous request.",

  /**
   * Message for status code 425 - Too Early (RFC 8470).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425}
   */
  TOO_EARLY = "The server is unwilling to risk processing a request that might be replayed.",

  /**
   * Message for status code 426 - Upgrade Required.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426}
   */
  UPGRADE_REQUIRED = "The client should switch to a different protocol.",

  /**
   * Message for status code 428 - Precondition Required.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428}
   */
  PRECONDITION_REQUIRED = "The origin server requires the request to be conditional.",

  /**
   * Message for status code 429 - Too Many Requests.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429}
   */
  TOO_MANY_REQUESTS = "The user has sent too many requests in a given amount of time.",

  /**
   * Message for status code 431 - Request Header Fields Too Large.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431}
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = "The server is unwilling to process the request because its header fields are too large.",

  /**
   * Message for status code 451 - Unavailable For Legal Reasons.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451}
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = "The server is denying access to the resource as a consequence of a legal demand.",

  // Enum representing server error HTTP status codes (500-511).

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
  NOT_IMPLEMENTED = "The server does not support the functionality required to fulfill the request.",

  /**
   * Message for status code 502 - Bad Gateway.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502}
   */
  BAD_GATEWAY = "The server, while acting as a gateway or proxy, received an invalid response from the upstream server.",

  /**
   * Message for status code 503 - Service Unavailable.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503}
   */
  SERVICE_UNAVAILABLE = "The server is not ready to handle the request, usually due to being overloaded or down for maintenance.",

  /**
   * Message for status code 504 - Gateway Timeout.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504}
   */
  GATEWAY_TIMEOUT = "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.",

  /**
   * Message for status code 505 - HTTP Version Not Supported.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505}
   */
  HTTP_VERSION_NOT_SUPPORTED = "The server does not support the HTTP protocol version that was used in the request.",

  /**
   * Message for status code 506 - Variant Also Negotiates.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506}
   */
  VARIANT_ALSO_NEGOTIATES = "The server has an internal configuration error and needs to negotiate a different variant.",

  /**
   * Message for status code 507 - Insufficient Storage (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507}
   */
  INSUFFICIENT_STORAGE = "The server is unable to store the representation needed to complete the request.",

  /**
   * Message for status code 508 - Loop Detected (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508}
   */
  LOOP_DETECTED = "The server detected an infinite loop while processing the request (WebDAV).",

  /**
   * Message for status code 510 - Not Extended.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510}
   */
  NOT_EXTENDED = "Further extensions to the request are required for the server to fulfill it.",
}
