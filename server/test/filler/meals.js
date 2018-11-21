const create = {
  incomplete: {
    title: {
      mealId: 1,
      img: 'http://www.preciouscore.com/wp-content/uploads/2017/11/'
            + 'How-to-cook-jollof-rice-in-the-oven-750x500.jpg',
      title: '',
      desc: 'Jollof Rice, Beef and Plantain. 2 pieces of beef per plate',
      price: 1500
    },
    desc: {
      mealId: 1,
      img: 'http://www.preciouscore.com/wp-content/uploads/2017/11/'
          + 'How-to-cook-jollof-rice-in-the-oven-750x500.jpg',
      title: 'Jollof Rice Meal',
      desc: '',
      price: 1500
    },
    price: {
      mealId: 1,
      img: 'http://www.preciouscore.com/wp-content/uploads/2017/11/'
              + 'How-to-cook-jollof-rice-in-the-oven-750x500.jpg',
      title: 'Jollof Rice Meal',
      desc: 'Jollof Rice, Beef and Plantain. 2 pieces of beef per plate',
      price: 0
    },
    img: {
      mealId: 1,
      img: '',
      title: 'Jollof Rice Meal',
      desc: 'Jollof Rice, Beef and Plantain. 2 pieces of beef per plate',
      price: 1500
    },
    deep: {
      mealId: 1,
      img: '',
      title: '',
      desc: '',
      price: 0
    },
  },
  complete: {
    mealId: 10,
    img: 'http://www.preciouscore.com/wp-content/uploads/2017/11/'
        + 'How-to-cook-jollof-rice-in-the-oven-750x500.jpg',
    title: 'peppered Jollof Rice',
    desc: 'Jollof Rice, Beef and Plantain. 2 pieces of beef per plate',
    price: 1500
  },
  alreadyExist: {
    mealId: 10,
    img: 'http://www.preciouscore.com/wp-content/uploads/2017/11/'
        + 'How-to-cook-jollof-rice-in-the-oven-750x500.jpg',
    title: 'peppered Jollof Rice',
    desc: 'Jollof Rice, Beef and Plantain. 2 pieces of beef per plate',
    price: 1500
  },
};


const put = {
  noDifference: {
    mealId: 1,
    img: 'http://www.preciouscore.com/wp-content/uploads/2017/11/'
                + 'How-to-cook-jollof-rice-in-the-oven-750x500.jpg',
    title: 'Revenge Body Spag',
    desc: 'Jollof Rice, Beef and Plantain. 2 pieces of beef per plate',
    price: 1500
  },
  correct: {
    mealId: 10,
    img: 'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-0.3.5&ixid=eyJh'
    + 'cHBfaWQiOjEyMDd9&s=71cdddf5cc615224cf2c26614d20154d&auto=format&fit=crop&w=1053&q=80',
    title: 'Revenge Body Spag',
    desc: 'Meal consists of Spaghetti, Vegetable Salad and Shredded smoked chicken',
    price: 1700
  },
};

module.exports = {
  create: { ...create },
  put: { ...put }
};
