/**
 * Enum representing redirection HTTP status codes (300-308).
 * @enum {number}
 */
export enum RedirectionStatusCode {
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
}

/**
 * Enum representing redirection HTTP status messages (300-308).
 * @enum {string}
 */
export enum RedirectionMessage {
  /**
   * Message for status code 300 - Multiple Choices.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300}
   */
  MULTIPLE_CHOICES = 'The request has more than one possible response.',

  /**
   * Message for status code 301 - Moved Permanently.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301}
   */
  MOVED_PERMANENTLY = 'The requested resource has been permanently moved to a new URL.',

  /**
   * Message for status code 302 - Found (Previously "Moved Temporarily").
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302}
   */
  FOUND = 'The requested resource resides temporarily under a different URI.',

  /**
   * Message for status code 303 - See Other.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303}
   */
  SEE_OTHER = 'The response can be found under another URI using a GET method.',

  /**
   * Message for status code 304 - Not Modified.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304}
   */
  NOT_MODIFIED = 'The resource has not been modified since the last request.',

  /**
   * Message for status code 305 - Use Proxy (Deprecated).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305}
   */
  USE_PROXY = 'The requested resource must be accessed through the proxy.',

  /**
   * Message for status code 307 - Temporary Redirect.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307}
   */
  TEMPORARY_REDIRECT = 'The request should be repeated with another URI temporarily.',

  /**
   * Message for status code 308 - Permanent Redirect.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308}
   */
  PERMANENT_REDIRECT = 'The request and future requests should be repeated with another URI permanently.',
}
