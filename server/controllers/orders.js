import orderDB from '../dummyDB/orders';
import orderMealDB from '../dummyDB/orderMeal';
import validateOrders from '../middlewares/orders';
import stringToArray from '../middlewares/helper/stringToArray';
import fetchUserName from '../middlewares/helper/fetchUserName';
import strToNum from '../middlewares/helper/strToNum';

/** @description orders class
 * @class orders
 */
class orders {
  static async createOrder(req, res) {
    const action = 0;
    const status = null;
    const { mealId } = req.body;
    let { id, orderId, userId } = req.body;
    const errors = await validateOrders.confirmOrder({ orderId, userId, mealId });
    if (errors[0]) return res.status(400).send({ success: false, errors });
    /* convert all ids to number */
    id = strToNum(id);
    orderId = strToNum(orderId);
    userId = strToNum(userId);
    /* End of conversion */
    const mealIds = stringToArray(mealId);
    const userName = await fetchUserName(userId);
    if (userName[0]) {
      await orderDB.push({
        id,
        userId,
        orderId,
        action,
        status
      });

      await orderMealDB.push({
        id,
        orderId,
        firstName: userName[0].firstName,
        mealIds
      });
      return res.status(201).send({
        success: true,
        message: 'successfully ordered'
      });
    }
  }

  static async getAllOrder(req, res) {
    const allOrders = [];
    await orderDB.filter(order => orderMealDB.find(meal => (meal.orderId === order.orderId
      ? allOrders.push({
        ...meal,
        ...order
      })
      : null)));

    if (allOrders.length < 1) {
      return res.status(400).json({
        success: false,
        message: 'no order available'
      });
    }
    return res.status(200).json({
      success: true,
      allOrders
    });
  }

  static async getSingleOrder(req, res) {
    const orderId = strToNum(req.params.orderId);
    const order = await orderDB.filter(isOrder => isOrder.orderId === orderId);
    const meal = await orderMealDB.filter(isMeal => isMeal.orderId === orderId);
    if (order[0] && meal[0]) {
      const orderObject = {
        ...order[0],
        ...meal[0]
      };
      return res.status(200).send({
        success: true,
        orderObject
      });
    }
    return res.status(400).json({
      success: false,
      message: 'no order available'
    });
  }

  static async modifyMeal(req, res) {
    const orderId = strToNum(req.params.orderId);
    const { mealId } = req.body;
    const mealIds = stringToArray(mealId);
    if (!mealId && !orderId) return res.status(400).send({ message: 'provide valid id' });
    const order = await orderDB.filter(isOrder => isOrder.orderId === orderId);
    const meal = await orderMealDB.filter(isMeal => isMeal.orderId === orderId);
    if (meal[0] && order[0] && mealIds[0] !== 0) {
      meal[0].mealIds = mealIds; /* modify meals id */
      const orderObject = {
        ...order[0],
        ...meal[0]
      };
      return res.status(200).send({
        success: true,
        orderObject
      });
    }
    return res.status(400).send({
      success: false,
      message: 'order not available'
    });
  }
}
export default orders;
