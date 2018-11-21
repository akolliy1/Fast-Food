/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

let store = {
  auth: {
    isAuth: false,
    validated: false,
    data: null,
    error: null
  },
  meals: {
    meals: null,
    error: null,
    success: null
  },
  orders: {
    mealIds: []
  }
};

if (localStorage.key('store') === 'store') {
  store = localStorage.getItem('store');
  store = JSON.parse(store);
}
