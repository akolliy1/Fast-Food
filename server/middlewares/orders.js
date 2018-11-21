/** @description validate user Details
 * @class validateUsers
 */
class validateOrders {
  /** @description confirm Orders details
 * @function confirmMealCreation
 * @param {object} body
 * @returns {Array} errors
 */
  static confirmOrder(body) {
    const { orderId, userId, mealId } = body;
    const mealErrors = [];
    if (!orderId) {
      mealErrors.push({ orderId: 'order id not found' });
    } if (!userId) {
      mealErrors.push({ userId: 'user id not found' });
    } if (!mealId) mealErrors.push({ mealId: 'meal id not found' });
    return mealErrors;
  }
}

export default validateOrders;
