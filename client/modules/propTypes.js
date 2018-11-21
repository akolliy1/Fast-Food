/* eslint-disable import/prefer-default-export */

/**
 * @description props validations
 * @constant propTypes
 * @requires isReq
 * @property isFunc function
 * @returns {Object} object
 */
export const propTypes = {
  isFunc: 'function', /* is function */
  isString: 'string',
  isBool: 'boolean',
  isNum: 'number',
  isSymbol: 'symbol',
  isObj: 'object',
  isArr: 'array',
  isReq: {
    isFunc: 'function',
    isString: 'string',
    isBool: 'boolean',
    isNum: 'number',
    isSymbol: 'symbol',
    isObj: 'object',
    isArr: 'array',
  }
};
