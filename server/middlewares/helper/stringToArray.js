/**
 * @description convert String To An Array
 * @function stringToArray
 * @param {*} arg
 * @return {Array} array
 */
const stringToArray = arg => arg.split(',').map(el => Number(el));

export default stringToArray;
