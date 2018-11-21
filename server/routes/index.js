import express from 'express';
import users from '../controllers/users';
import meals from '../controllers/meals';
import orders from '../controllers/orders';

const app = express.Router();

app.post('/users/signup', users.createUser);
app.post('/users/signin', users.signinUser);

app.route('/meals')
  .post(meals.createMeal)
  .get(meals.getAllMeals);

app.get('/meals/:mealId', meals.getSingleMeal);

app.route('/order')
  .get(orders.getAllOrder)
  .post(orders.createOrder);

app.route('/order/:orderId')
  .get(orders.getSingleOrder)
  .put(orders.modifyMeal);

export default app;
