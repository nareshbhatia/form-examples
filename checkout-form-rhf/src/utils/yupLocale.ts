// @ts-nocheck (to ignore typechecking on validation function parameters)
export const yupLocale = {
    mixed: {
        default: {
            key: 'validations.invalid',
        },
        required: {
            key: 'validations.required',
        },
        notType: ({ type }) => ({
            key: 'validations.invalidType',
            values: { type },
        }),
    },
    string: {
        email: {
            key: 'validations.email',
        },
        min: ({ min }) => ({
            key: 'validations.stringMin',
            values: { min },
        }),
        max: ({ max }) => ({
            key: 'validations.stringMax',
            values: { max },
        }),
    },
    number: {},
    boolean: {},
};
