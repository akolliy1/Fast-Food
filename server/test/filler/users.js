const create = {
  incomplete: {
    name: {
      firstName: '',
      lastName: 'marouf',
      email: 'marouf@exaple.com',
      password: 'maroufat1234'
    },
    nameLenght: {
      firstName: 'ma',
      lastName: 'marouf',
      email: 'marouf@exaple.com',
      password: 'maroufat1234'
    },
    lastName: {
      firstName: 'marouf',
      lastName: '',
      email: 'marouf@exaple.com',
      password: 'maroufat1234'
    },
    lastNameLenght: {
      firstName: 'marouf',
      lastName: 'ma',
      email: 'marouf@exaple.com',
      password: 'maroufat1234'
    },
    email: {
      firstName: 'marouf',
      lastName: 'murouf',
      email: '',
      password: 'maroufat1234'
    },
    password: {
      firstName: 'marouf',
      lastName: 'murouf',
      email: 'marouf@exaple.com',
      password: ''
    },
    passwordLenght: {
      firstName: 'marouf',
      lastName: 'murouf',
      email: 'marouf@exaple.com',
      password: 'ma'
    }
  },
  complete: {
    userId: 10,
    firstName: 'maroufatul',
    lastName: 'marouf',
    email: 'maroufatul@gmail.com',
    password: 'maroufatul1234',
    role: 1
  }
};

const login = {
  incomplete: {
    email: {
      email: '',
      password: 'maroufat1234'
    },
    invalidEmail: {
      email: 'maroufat',
      password: 'maroufat1234'
    },
    password: {
      email: 'marouf@exaple.com',
      password: ''
    },
    invalidPassword: {
      email: 'marouf@exaple.com',
      password: 'ma'
    }
  },
  incorrect: {
    email: 'maroufatu@gmail.com',
    password: 'maroufatul12',
  },
  correct: {
    email: 'maroufatul@gmail.com',
    password: 'maroufatul1234',
  }
};

module.exports = {
  create: { ...create },
  login: { ...login }
};
