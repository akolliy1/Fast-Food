/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */

import { Switch } from './modules/lazyload.js';
import { Homepage } from './container/home.js';
import { Signup } from './container/signup.js';
import { Signin } from './container/signin.js';
import { UserMenus } from './container/meals-list.js';
import { UserHistory } from './container/meals-history.js';
import { Admin } from './container/admin.js';
import { AdminMenus } from './container/adminMenus.js';
import { AdminHistory } from './container/adminHistory.js';
import { ConfirmOrders } from './container/confirmOrders.js';
import { DeliveryDetails } from './container/deliveryDetails.js';

Switch([
/* Route( */{ render: Homepage, exact: true, path: '/' }/* ); */,
  /* Route( */{ render: Signup, exact: true, path: '/signup' }/* ); */,
  /* Route( */{ render: Signin, exact: true, path: '/signin' }/* ); */,
  /* Route( */{ render: Signup, exact: true, path: '/signup' }/* ); */,
  /* Route( */{ render: UserMenus, exact: true, path: '/meals' }/* ); */,
  /* Route( */{ render: UserHistory, exact: true, path: '/mymeals' }/* ); */,
  /* Route( */{ render: Admin, exact: true, path: '/admin' }/* ); */,
  /* Route( */{ render: AdminMenus, exact: true, path: '/admin-meals' }/* ); */,
  /* Route( */{ render: AdminHistory, exact: true, path: '/admin-history' }/* ); */,
  /* Route( */{ render: ConfirmOrders, exact: true, path: '/confirm-order' }/* ); */,
  /* Route( */{ render: DeliveryDetails, exact: true, path: '/proceed=yes' }/* ); */,
  /* default page */
  /* Route( */{ render: Signin, path: '/*' }/* ); */
]);
