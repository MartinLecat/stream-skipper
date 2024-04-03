/**
 * Creates a new object based on `console` with custom styling
 * @param {string} ns
 * @returns
 */
export function Logger(ns = "Stream Skipper") {
    const CONFIGS = {
        log: "color: #06b6d4; border: 2px solid currentColor; padding: 0.5rem; font-weight: bold",
        error: "color: #dc2626; border: 2px solid currentColor; padding: 0.5rem; font-weight: bold",
        warn: "color: #ca8a04; border: 2px solid currentColor; padding: 0.5rem; font-weight: bold",
    };

    return {
        ...console,

        error: console.error.bind(console, `%c[${ns}]`, CONFIGS.error, " - "),
        log: console.log.bind(console, `%c[${ns}]`, CONFIGS.log, " - "),
        warn: console.warn.bind(console, `%c[${ns}]`, CONFIGS.warn, " - "),
    };
}

/**
 * Check if param is an HTML Element
 * @param {any} obj
 * @returns {boolean}
 */
export function isElement(obj: any): obj is HTMLElement {
    return typeof HTMLElement === "object"
        ? obj instanceof HTMLElement //DOM2
        : obj &&
              typeof obj === "object" &&
              obj !== null &&
              obj.nodeType === 1 &&
              typeof obj.nodeName === "string";
}

export function triggerAction(action: string, elem: HTMLElement) {}
