// @flow

/**
 * Replace line breaks to save on server
 * @param str
 * @returns {string}
 */
export function replaceUrlLinebreaks (str: string): string {
    return str.replace(/\r?\n/g, "%0A");
}
