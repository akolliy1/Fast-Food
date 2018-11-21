/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable arrow-parens */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

/**
 * @class constructor
 * @returns {object} render
 */
class Components extends Constructor {
  constructor() {
    super();
    this.state = null;
    this.props = null;
    this.propTypes = null;
    this.handleInputError = this.handleInputError.bind(this);
    this.validateHandler = this.validateHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);

    /**
   * @method setState
   * @description set state without mutating the initial state
   * @param {*} data
   * @returns {void} change state
   */
    this.setState = (data) => {
      if (this.state.constructor.name === 'Object') {
        this.state = { ...this.state, ...data };
      } else if (this.state.constructor.name === 'Array') {
        this.state = [...this.state, ...data];
      } else {
        this.state = data;
      }
    };

    /**
   * @method setProps
   * @description set Props without mutating the initial Props
   * @param {*} data
   * @returns {void} props
   */
    this.setProps = (data) => {
      if (data.constructor.name === 'Object') {
        this.props = { ...this.props, ...data };
      } else if (data.constructor.name === 'Array') {
        this.props = [...this.props, ...data];
      } else {
        this.props = data;
      }
    };

    /**
   * @method mapStoreToProps
   * @description retrieve data from store to props
   * @param {*} data
   * @returns {void} props
   */
    this.mapStoreToProps = (data) => {
      if (data.constructor.name === 'Object') {
        this.props = { ...this.props, ...data };
      } else if (data.constructor.name === 'Array') {
        this.props = [...this.props, ...data];
      } else {
        this.props = data;
      }
    };
    /**
   * @method AddToStore
   * @description set state without mutating the state
   * @param {*} storeName
   * @param {*} data object
   * @returns {void} add to store object
   */
    this.AddToStore = (storeName, data) => {
      if (data.constructor.name === 'Object') {
        if (localStorage.key('store') === 'store') {
          let getStore = localStorage.getItem('store');
          getStore = JSON.parse(getStore);
          getStore[storeName] = { ...getStore[storeName], ...data };
          localStorage.setItem('store', JSON.stringify(getStore));
          store = { ...getStore };
          // store[storeName] = { ...store[storeName], ...data }; /* for immediate changes */
        } else {
          store[storeName] = { ...store[storeName], ...data };
          localStorage.setItem('store', JSON.stringify(store));
        }
      }
    };
  }

  /**
   * @method isOfflineMode
   * @description check if conection was offline
   * @param {*} Empty
   * @returns {void} void
   */
  isOfflineMode() {
    // setInterval(()=> {}, 1000)
    // clearInterval(timerId);
    if (!navigator.onLine) {
      this.flash('Your Internet Connection is down [ ... Reconnecting ]', 'warning');
      return null;
    }
    this.Spinner(true); /* spin while waiting for request */
  }


  /**
   * @method timer
   * @description set state without mutating the initial state
   * @param {*} handler
   * @param {*} time
   * @returns {void} change state
   */
  timer(handler, timeout) {
    setTimeout(() => {
      const caller = handler;
    }, timeout); /* spin while waiting for request */
  }


  /**
   * @method inputHandler
   * @description set state base on user inputs
   * @param {string} name
   * @param {string} value
   * @returns {void} void
   */
  inputHandler(name, value) {
    const data = { ...this.state.data };
    data[name].value = value;
    data[name].valid = data[name].value.length >= data[name].len;
    this.setState({ data });
  }


  /**
   * @method Spinner
   * @description show spinner while waiting for request
   * @param {Boolean} loading
   * @returns {void} void
   */
  Spinner(loading) {
    const container = document.querySelector('body');
    const spinner = document.createElement('div');
    spinner.className = 'Spinner';
    if (loading) {
      container.appendChild(spinner);
    } else {
      const spin = document.querySelector('.Spinner');
      spin.style.display = 'none';
      container.removeChild(spin);
    }
  }


  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }


  /**
   * @method onchange
   * @description for input changes validation
   * @param {Event} e
   * @returns {void} void
   */
  onchange() {
    const that = this;
    // console.log(that);
    const inputs = document.querySelectorAll('.input');
    inputs.forEach((e) => {
      e.addEventListener('keyup', (el) => {
        const { name, value } = el.target;
        that.inputHandler(name, value);
        that.handleInputError(el);

        /* show password for some seconds */
        if (el.target.className === 'input valid') {
          el.target.type = 'text';
          setTimeout(() => {
            el.target.type = 'password';
          }, 500);
        }
      });
    });
  }

  /**
   * @method flash
   * @description show msg to user
   * @param {string} msg
   * @param {string} type
   * @returns {void} void
   */
  flash(msg = 'Please fil out those input field', type = 'danger', time = 1500) {
    const container = document.querySelector('body');
    const createDiv = document.createElement('div');
    const create_h6 = document.createElement('h6');
    const createSpan = document.createElement('span');
    createDiv.className = 'flash';
    createSpan.innerHTML = '&times;';
    create_h6.innerHTML = msg;
    if (type === 'success') { createDiv.style.background = 'rgb(36, 180, 36)'; create_h6.style.color = 'white'; } else if (type === 'warning') {
      createDiv.style.background = 'rgb(245, 172, 143)'; create_h6.style.color = 'white';
    } else { createDiv.style.background = 'rgb(247, 68, 68)'; create_h6.style.color = 'white'; }
    createSpan.addEventListener('click', (event) => {
      document.querySelector('.flash').style.display = 'none';
    });
    createDiv.appendChild(create_h6);
    createDiv.appendChild(createSpan);
    container.appendChild(createDiv);
    setTimeout(() => {
      document.querySelector('.flash').className = 'cancel';
      setTimeout(() => {
        document.querySelectorAll('.cancel')
          .forEach(el => el.remove());
      }, 500);
    }, time);
  }


  /**
   * @method validateHandler
   * @description set state base on user inputs
   * @param {string} name
   * @param {string} msg
   * @returns {void} void
   */
  validateHandler(name, msg) {
    const data = { ...this.state.data };
    let validated = false;
    /* check if it match and no validation msg on d client side */
    data[name].match = data[name].value.length >= data[name].len && msg === '';
    Object.keys(data).map(el => {
      validated = data[el].match === true;
      if (validated && data.confirmPassword) {
        if (data.confirmPassword.value === data.password.value) {
          this.setState({ data, validated });
          this.AddToStore('auth', { validated }); /* add to store */
        } else { this.setState({ data, validated: false }); this.AddToStore('auth', { validated }); /* add to store */ }
      } else {
        this.AddToStore('auth', { validated }); /* add to store */
        this.setState({ data, validated }); /* add to component state */
      }
    });
  }


  /**
   * @method handleInputError
   * @param {*} el dom element
   * @returns {viod} viod
   */
  handleInputError(el) {
    const that = this;
    const { name, value } = el.target;
    /* set state and store validity */
    this.validateHandler(name, el.target.validationMessage);
    if (el.target.validationMessage !== '') { /* check for self validation msg */
      if (el.target.nextElementSibling) { /* check if there's nexted element */
        el.target /* parse error message to the client side */
          .nextElementSibling.innerHTML = `${that.state.data[name].error} @${value}`;
      } else { /* if there wasn't nexted element */
        const p = document.createElement('p'); /* create a paragraph element */
        p.classList.add('color-danger'); /* add class for styling purpose and concate -conc */
        p.textContent = `${that.state.data[name].error} @${value}`;/* conc wit template eng */
        el.target.parentElement.appendChild(p); /* append d paragraph by parentNode */
      } /* if all inputs are validated, remove the paragraph (error text) */
    } else if (el.target.validationMessage === '' && el.target.nextElementSibling) {
      const remove = el.target.nextElementSibling;
      el.target.parentElement.removeChild(remove);
    }
  }


  propsVerification() {
    if (this.propTypes) {
      Object.keys(this.propTypes).map((key) => {
        if (this.propTypes[key] === 'function') {
          if (typeof this.props[key] !== 'function') {
            console.warn(`expected props ${key} which was typeof a ${typeof this.props[key]} @${this.constructor.name} to be a Function but equals to ${typeof this.props[key]} ${this.props[key]}`);
          }
        }
        if (this.propTypes[key] === 'string') {
          if (typeof this.props[key] !== 'string') {
            console.warn(`expected props ${key} which was typeof a ${typeof this.props[key]} @${this.constructor.name} to be a string but equals to ${typeof this.props[key]} ${this.props[key]}`);
          }
        }
        if (this.propTypes[key] === 'array') {
          if (this.props[key].constructor.name !== 'Array' && typeof this.props[key] !== 'object') {
            console.warn(`expected props ${key} which was typeof a ${typeof this.props[key]} @${this.constructor.name} to be an Array but equals to ${typeof this.props[key]} ${this.props[key]}`);
          }
        }
        if (this.propTypes[key] === 'object') {
          if (typeof this.props[key] !== 'object' && this.props[key].constructor.name !== 'Object') {
            console.warn(`expected props ${key} which was typeof ${typeof this.props[key]} @${this.constructor.name} to be an Object but equals to ${typeof this.props[key]} ${this.props[key]}`);
          }
        }
        if (this.propTypes[key] === 'boolean') {
          if (typeof this.props[key] !== 'boolean') {
            console.warn(`expected props ${key} which was typeof ${typeof this.props[key]} @${this.constructor.name} to be a Boolean but equals to ${typeof this.props[key]} ${this.props[key]}`);
          }
        }
        if (this.propTypes[key] === 'number') {
          if (typeof this.props[key] !== 'number') {
            console.warn(`expected props ${key} which was typeof ${typeof this.props[key]} @${this.constructor.name} to be a Number but equals to ${typeof this.props[key]} ${this.props[key]}`);
          }
        }
        if (this.propTypes[key] === 'symbol') {
          if (typeof this.props[key] !== 'symbol') {
            console.warn(`expected props ${key} which was typeof a ${typeof this.props[key]} @${this.constructor.name} to be a Symbol but equals to ${typeof this.props[key]} ${this.props[key]}`);
          }
        }
      });
    }
  }
}
