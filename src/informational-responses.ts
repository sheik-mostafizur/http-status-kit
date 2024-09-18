/**
 * Enum representing informational HTTP status codes (100-103).
 * @enum {number}
 */
export enum InformationalStatusCode {
  /**
   * Status code 100 - Continue.
   * @type {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100}
   */
  Continue = 100,

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
}

/**
 * Enum representing informational HTTP status messages (100-103).
 * @enum {string}
 */
export enum InformationalMessage {
  /**
   * Message for status code 100 - Continue.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100}
   */
  Continue = 'Continue sending data.',

  /**
   * Message for status code 101 - Switching Protocols.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101}
   */
  SWITCHING_PROTOCOLS = 'Switching protocols as requested.',

  /**
   * Message for status code 102 - Processing (WebDAV).
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102}
   */
  PROCESSING = 'The server has received the request and is still processing it.',

  /**
   * Message for status code 103 - Early Hints.
   * @type {string}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103}
   */
  EARLY_HINTS = 'The server is returning some headers before the final response.',
}
