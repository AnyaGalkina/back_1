import {body} from 'express-validator';

const firstNameValidationMiddleware =
    body('firstName', 'Name should be min 1 and max 100 symbols')
        .isString()
        .notEmpty()
        .trim()
        .isLength({min: 1, max: 100});

const surnameValidationMiddleware =
    body('surname', 'Surname should be min 1 and max 100 symbols')
        .isString()
        .notEmpty()
        .trim()
        .isLength({min: 1, max: 100});

const addressValidationMiddleware =
    body('address', 'Address should be min 1 and max 500 symbols')
        .isString()
        .notEmpty()
        .trim()
        .isLength({min: 1, max: 500});

const emailValidationMiddleware =
    body('email', 'should be valid email')
        .isString()
        .notEmpty()
        .trim()
        .isEmail();

const phoneValidationMiddleware =
    body('phone', 'should be valid phone')
        .isString()
        .notEmpty()
        .trim()
        .isMobilePhone('any');

export const orderValidationMiddleware = [
    firstNameValidationMiddleware,
    surnameValidationMiddleware,
    addressValidationMiddleware,
    emailValidationMiddleware,
    phoneValidationMiddleware
]