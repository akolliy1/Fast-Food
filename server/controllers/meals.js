import db from '../dummyDB/meals';
import validation from '../middlewares/meals';

/**
 * @function checkIfMealExist
 * @param {*} title meal title
 */
const checkIfMealExisted = title => db.find(meal => title === meal.title);

/** @description meals class
 * @class meals
 */
class meals {
  static async createMeal(req, res) {
    const { mealId, img, title, desc, price } = req.body;

    const error = await validation
      .confirmMealCreation({ img, title, desc, price });
    if (error[0]) {
      return res.status(400).json({
        success: false,
        error
      });
    }
    const alreadyAMeal = await checkIfMealExisted(title);
    if (alreadyAMeal) {
      return res.status(400).json({
        success: false,
        message: 'meal already created!'
      });
    }
    await db.push({ mealId, img, title, desc, price });
    return res.status(201).json({
      success: true,
      message: 'meal successfully created'
    });
  }

  static async getAllMeals(req, res) {
    const isMeals = await db.map(allMeals => allMeals);
    if (isMeals[0]) {
      return res.status(200).json({
        message: 'Success!',
        isMeals
      });
    }
    return res.status(400).json({
      success: false,
      message: 'No available meals yet! please, Try Again In 20 Minutes'
    });
  }

  static async getSingleMeal(req, res) {
    const mealId = parseInt(req.params.mealId, 10);
    const isSingleMeal = await db.filter(meal => mealId === meal.mealId);
    if (isSingleMeal[0]) {
      return res.status(200).json({
        success: true,
        isSingleMeal
      });
    }
    return res.status(400).json({
      success: false,
      message: 'meal not found'
    });
  }
}
export default meals;
