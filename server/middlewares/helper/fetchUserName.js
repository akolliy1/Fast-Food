import users from '../../dummyDB/users';

/**
 * @description fetch user's first name
 * @function fetchUserName
 * @param {*} userId
 * @return {Object} obbjetc
 */
const fetchUserName = userId => users.filter(user => user.userId === userId);

export default fetchUserName;
