/** @description validate user Details
 * @class validateUsers
 */
class validateMeals {
  /** @description confirm meals details
 * @function confirmMealCreation
 * @param {object} body
 * @returns {Array} errors
 */
  static confirmMealCreation(body) {
    const { img, title, desc, price } = body;
    const mealErrors = [];
    if (!title || title.length < 3) {
      mealErrors.push({ title: 'title field cannot be empty' });
    } if (!desc || desc.length < 3) {
      mealErrors.push({ desc: 'desc field cannot be empty' });
    } if (!price || parseFloat(price) < 100) {
      mealErrors.push({ price: 'price field msut be greather than 100' });
    } if (!img) mealErrors.push({ img: 'image field cannot be empty' });
    return mealErrors;
  }
}

export default validateMeals;
