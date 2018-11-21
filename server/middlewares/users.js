import { validName, validMail, validPassword } from './helper/regex';

/** @description validate user Details
 * @class validateUsers
 */
class validateUsers {
  /** @description confirm user details
 * @function confirmSignUp
 * @param {object} body
 * @returns {Array} errors
 */
  static confirmSignUp(body) {
    const { firstName, lastName, email, password } = body;
    const signUpErrors = [];
    if (!firstName || firstName.length < 3 || validName.test(firstName) === true) {
      signUpErrors.push({
        firstName: 'first name must be at least 3 aphabeltical characters'
      });
    } if (!lastName || lastName.length < 3 || validName.test(lastName) === true) {
      signUpErrors.push({
        lastName: 'last name must be at least 3 aphabeltical characters'
      });
    } if (!email || !validMail.test(email)) {
      signUpErrors.push({
        email: 'Email chracter must be valid'
      });
    } if (!password || password.length < 4 || !validPassword.test(password)) {
      signUpErrors.push({
        password: 'Password chracter must be valid'
      });
    }
    return signUpErrors;
  }

  /** @description confirm user details
 * @method confirmSignIn
 * @param {object} body
 * @returns {Array} errors
 */
  static confirmSignIn(body) {
    const { email, password } = body;
    const signInErrors = [];
    if (!email || !validMail.test(email)) {
      signInErrors.push({
        email: 'Email chracter must be valid'
      });
    } if (!password || password.length < 4) {
      signInErrors.push({
        password: 'Password chracter must be valid'
      });
    }
    return signInErrors;
  }
}

export default validateUsers;
