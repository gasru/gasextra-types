/**
 * @typedef {(
 *  'DIMENSION_UNSPECIFIED'|
 *  'ROWS'|
 *  'COLUMNS'
 * )} GASExtra.sheets_v4.enums.MajorDimension
 */

/**
 * @typedef {(
 *  'FORMATTED_VALUE'|
 *  'UNFORMATTED_VALUE'|
 *  'FORMULA'
 * )} GASExtra.sheets_v4.enums.ValueRenderOption
 */

/**
 * @typedef {(
 *  'SERIAL_NUMBER'|
 *  'FORMATTED_STRING'
 * )} GASExtra.sheets_v4.enums.DateTimeRenderOption
 */

/**
 * @typedef {(
 *  'INPUT_VALUE_OPTION_UNSPECIFIED'|
 *  'RAW'|
 *  'USER_ENTERED'
 * )} GASExtra.sheets_v4.enums.ValueInputOption
 */

/**
 * @typedef {{
 *  ranges?: string[];
 *  majorDimension?: GASExtra.sheets_v4.enums.MajorDimension;
 *  valueRenderOption?: GASExtra.sheets_v4.enums.ValueRenderOption;
 *  dateTimeRenderOption?: GASExtra.sheets_v4.enums.DateTimeRenderOption;
 * }} GASExtra.sheets_v4.Schema.BatchGetValuesRequestOptionalArgs
 */

/**
 * @typedef {{
 *  valueInputOption: GASExtra.sheets_v4.enums.ValueInputOption;
 *  includeValuesInResponse: boolean;
 *  responseValueRenderOption: GASExtra.sheets_v4.enums.ValueRenderOption;
 *  responseDateTimeRenderOption: GASExtra.sheets_v4.enums.DateTimeRenderOption
 * }} GASExtra.sheets_v4.Schema.UpdateValuesRequestOptionalArgs
 */
