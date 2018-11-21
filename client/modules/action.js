export const isAuth_Success = res => ({ data: res, isAuth: true, error: null });
export const isAuth_Fail = err => ({ error: err, isAuth: false, data: null });
export const getAllMeal_Success = isMeals => ({ error: null, meals: isMeals, success: true });
export const getAllMeal_Fail = err => ({ error: err, meals: null, success: false });
export const getUserOrder_Success = order => ({ orders: order });
export const getUserOrder_Fail = order => ({ orders: order });
export const removeUserOrder_Success = order => ({ orders: order });
export const removeUserOrder_Fail = order => ({ orders: order });
export const userOrder_Removed = orderId => ({ orders: orderId });
