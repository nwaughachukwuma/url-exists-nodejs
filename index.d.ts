/**
 * Check if a URL exists in node.js
 *
 * @param url The URL to check.
 *
 * @example
 * ```
 * import urlExistNodeJS from "url-exist-nodejs"
 *
 * await urlExistNodeJS("https://google.com")  // Output: true
 *
 * await urlExistNodeJS("https://googlecom") // Output: false
 *
 * ```
 */
declare function urlExistNodeJS(url: string): Promise<boolean>

export default urlExistNodeJS
