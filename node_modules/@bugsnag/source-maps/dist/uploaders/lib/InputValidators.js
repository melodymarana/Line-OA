"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNoUnknownArgs = exports.validateObjects = exports.validateBooleans = exports.validateOptionalStrings = exports.validateRequiredStrings = void 0;
function validateRequiredStrings(opts, keys) {
    // required strings
    for (const requiredString of keys) {
        if (typeof opts[requiredString] !== 'string' || opts[requiredString].length === 0) {
            throw new Error(`${requiredString} is required and must be a string`);
        }
    }
}
exports.validateRequiredStrings = validateRequiredStrings;
function validateOptionalStrings(opts, keys) {
    for (const optionalString of keys) {
        if (typeof opts[optionalString] !== 'undefined') {
            if (typeof opts[optionalString] !== 'string' || opts[optionalString].length === 0) {
                throw new Error(`${optionalString} must be a string`);
            }
        }
    }
}
exports.validateOptionalStrings = validateOptionalStrings;
function validateBooleans(opts, keys) {
    for (const bool of keys) {
        if (typeof opts[bool] !== 'boolean') {
            throw new Error(`${bool} must be true or false`);
        }
    }
}
exports.validateBooleans = validateBooleans;
function validateObjects(opts, keys) {
    for (const obj of keys) {
        if (typeof opts[obj] !== 'object' || !opts[obj]) {
            throw new Error(`${obj} must be an object`);
        }
    }
}
exports.validateObjects = validateObjects;
function validateNoUnknownArgs(unknownArgs) {
    if (Object.keys(unknownArgs).length > 0) {
        throw new Error(`Unrecognized option(s): ${Object.keys(unknownArgs).join(', ')}`);
    }
}
exports.validateNoUnknownArgs = validateNoUnknownArgs;
//# sourceMappingURL=InputValidators.js.map