import { isNotEmpty, maxLength, isNumber } from "./../library/validator.js";

export const formGroupConfig = {
    "first-name": [isNotEmpty, maxLength(16)],
    "last-name": [isNotEmpty, maxLength(20)],
    "age": [isNotEmpty, isNumber]
};