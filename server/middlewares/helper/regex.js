/**
 * @description regex for valid name to match
 */

const validName = /[\d\s]/g;

/* eslint-disable */
/**
 * @description regex for valid email
 */
const validMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
/* eslint-enable */

/**
 * @description regex for valid password
 */
const validPassword = /[a-z][0-9]/gi;

module.exports = {
  validName,
  validMail,
  validPassword
};
