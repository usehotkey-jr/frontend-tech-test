// @flow

const sizeTemplate = {
    spacing: 5,
    radius: 3,
};

export const size = {
    small: templateTo(1),
    medium: templateTo(2),
    large: templateTo(3),
};

/**
 * Prepare size block by template
 * @param multiplier
 * @returns {{}}
 */
function templateTo (multiplier: number) {
    const result = {};

    Object.keys(sizeTemplate).forEach(key => {
        if (typeof sizeTemplate[key] === "number") {
            result[key] = px(sizeTemplate[key] * multiplier);
        }
    });

    return result;
}

/**
 * Convert number to px
 * @param value
 * @returns {string}
 */
function px (value: number): string {
    return `${value}px`;
}
