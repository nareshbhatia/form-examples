/**
 * Validation Error
 *
 * Example:
 *   {
 *       key: 'validations.stringMin',
 *       values: {
 *           min: 2
 *       }
 *   }
 *
 * Assume that the key maps into the following tokenized error message
 *   Must be at least {{min}} characters
 *
 * Then the final error message will be
 *   Must be at least 2 characters
 */
export interface ValidationError {
    /** key into translation file */
    key: string;

    /** token values */
    values?: { [key: string]: any };
}
