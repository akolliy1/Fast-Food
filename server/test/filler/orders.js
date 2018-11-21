const create = {
  incomplete: {
    userId: {
      id: 10,
      userId: null,
      orderId: 10,
      mealId: '1,2,3,4,5'
    },
    orderId: {
      id: 10,
      userId: 4,
      orderId: null,
      mealId: '1,2,3,4,5'
    },
    mealId: {
      id: 10,
      userId: 4,
      orderId: 10,
      mealId: null
    }
  },
  complete: {
    a: {
      id: 10,
      userId: 4,
      orderId: 10,
      mealId: '1,2,3,4,5'
    },
    b: {
      id: 10,
      userId: 4,
      orderId: 11,
      mealId: '1,2,3,4,5'
    },
    c: {
      id: 10,
      userId: 4,
      orderId: 12,
      mealId: '1,2,3,4,5'
    },
    d: {
      id: 10,
      userId: 4,
      orderId: 13,
      mealId: '1,2,3,4,5'
    }
  }
};

const modify = {
  incorrect: {
    a: {
      status: 14,
      mealId: '1,2,3,4,5'
    },
    b: {
      status: 15,
      mealId: '1,2,3'
    },
    c: {
      status: 16,
      mealId: '1'
    }
  },
  complete: {
    a: {
      status: 10,
      mealId: '1,2,5'
    },
    b: {
      status: 11,
      mealId: '1,2,4,5'
    },
    c: {
      status: 12,
      mealId: '3,4,5'
    },
  }
};

module.exports = {
  create: { ...create },
  modify: { ...modify }
};
