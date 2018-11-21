import db from '../dummyDB/users';
import validation from '../middlewares/users';

/** @description user class
 * @class default
 */
class users {
  /** @description create user
     * @method createUser
     * @param {*} req
     * @param {*} res
     * @returns {object} object
     */
  static async createUser(req, res) {
    const { userId, firstName, lastName, email, password, status } = req.body;
    const errors = await validation.confirmSignUp({ firstName, lastName, email, password });
    if (errors[0]) {
      return res.status(400).json({
        success: false,
        errors
      });
    }
    await db.push({
      userId,
      firstName,
      lastName,
      email,
      password,
      status
    });
    return res.status(201).json({
      success: true,
      message: 'user successfully created',
      user: { firstName, lastName, email }
    });
  }

  /** @description signin user
     * @method signinUser
     * @param {*} req
     * @param {*} res
     * @returns {object} object
     */
  static async signinUser(req, res) {
    const { email, password } = req.body;
    return new Promise(async (resolve, reject) => {
      const errors = await validation.confirmSignIn({ email, password });
      if (errors[0]) {
        reject(errors);
      }
      const isUser = await db
        .filter(user => email === user.email && password === user.password);
      if (isUser[0]) {
        resolve(isUser);
      } else {
        const error = new Error('user not found');
        reject(error);
      }
    })
      .then(user => res.status(200).json({ message: 'login successfuly', user }))
      .catch(err => res.status(400).json({
        success: false,
        errors: typeof err.message === 'string' ? err.message : err
      }));
  }
}

export default users;
