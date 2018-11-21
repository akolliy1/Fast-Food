/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import { propTypes } from '../modules/propTypes.js';
import { redirect } from '../modules/redirect.js';
import { isAuth_Fail, isAuth_Success } from '../modules/action.js';

/**
 * @class homepage
 * @returns {object} render
 */
export class Homepage extends Components {
  constructor() {
    super();
    this.openAndCloseModal = this.openAndCloseModal.bind(this);
    this.submitBtn = this.submitBtn.bind(this);

    /* validate this props */
    this.propTypes = {
      children: propTypes.isString,
      actionVal: propTypes.isString,
      queries: propTypes.isString,
      redirectLink: propTypes.isString,
      redirectText: propTypes.isString,
      onKeyup: propTypes.isFunc,
      labelFor: propTypes.isString,
      type: propTypes.isString,
      name: propTypes.isString,
      placeholder: propTypes.isString,
    };

    this.state = {
      validated: false,
      display: false,
      data: {
        email: {
          elementConfig: {
            labelFor: 'Email',
            type: 'email',
            name: 'email',
            placeholder: 'e.g Baptista@gmail.com',
          },
          value: '',
          len: 7,
          error: 'Email chracter must be valid',
          valid: false,
          match: false
        },
        password: {
          elementConfig: {
            labelFor: 'Password',
            type: 'password',
            name: 'password',
            placeholder: 'e.g Baptista1234',
            minLength: 4
          },
          value: '',
          len: 5,
          error: 'Password chracter must be valid',
          valid: false,
          match: false
        },
      }
    };
  }


  /**
   * @method submitBtnHandler
   * @description submit user details
   * @param {*} Empty
   * @returns {void} void
   */
  submitBtn() {
    const that = this;
    const submitBtn = document.querySelector('input[type=button]');
    const { email, password } = this.state.data;
    submitBtn.onclick = function click() {
      if (that.state.validated) {
        that.isOfflineMode();
        const xheader = new Headers();
        xheader.append('Accept', 'application/json');
        xheader.append('Content-type', 'application/json');
        fetch('/api/v1/users/signin', {
          method: 'POST',
          headers: xheader,
          body: JSON.stringify({
            email: email.value.trim(),
            password: password.value.trim()
          })
        }).then(res => res.json())
          .then((res) => {
            if (res.user) {
              that.flash(res.message, 'success'); /* flash msg to user */
              that.AddToStore('auth',
                isAuth_Success({ res, user: res.user[0] })); /* add to public store */
              that.Spinner(false);
              localStorage
                .setItem('user', JSON.stringify({ ...res.user[0] })); /* store in local storage */
              redirect('/meals');
            } else {
              that.flash(res.errors, null, 4000); /* flash err msg to user */
              that.Spinner(false);
              that.AddToStore('auth', isAuth_Fail(res)); /* add to public store */
            }
          });
      } else { that.flash(' You are not authenticated please fill in', 'warning'); }
    };
  }

  /**
   * @method openAndCloseModal
   * @description popup signin form
   * @param {*} Empty
   * @returns {void} void
   */
  openAndCloseModal() {
    const backdropForm = document.querySelector('.backdrop-form');
    const backdrop = document.querySelector('.backdrop');
    const openModal = document.querySelector('#signin');
    const back = document.querySelector('#back');
    backdrop.onclick = function closeBackdrop() {
      backdropForm.style.display = 'none';
    };
    back.onclick = function closeModal() {
      backdropForm.style.display = 'none';
    };
    openModal.onclick = function open() {
      backdropForm.style.display = 'block';
    };
  }

  /**
     * @method render
     * @param {*} Empty
     * @returns {void} void
     */
  render() {
    const inputs = Object.keys(this.state.data)
      .map(el => this
        .formInput({
          ...this.state.data[el].elementConfig,
          // onKeyup: this.onchange
        })); /* form inputs */

    setTimeout(() => {
      this.openAndCloseModal();
      this.submitBtn();
      this.onchange();
    }, 500);

    return (`
        <link rel="stylesheet" href="./app/public/css/home.css">
        <div class="container">
            <nav id="header">
                <div id="title">
                    <a href="#">
                        fast-food-fast
                    </a>
                </div>
                <div id="activity">
                    <a href="#" id="signin">signin</a>
                    <a href="/signup">Create Account</a>
                </div>
            </nav>
            ${this.heroBackground()}
            <section id="services">
                <h4>How it works</h4>
                <ul>
                    <li>
                        <img src="./app/public/images/food-menu1.jpg" alt="">
                        <h5>Browse menus and your order in seconds without any delay</h5>
                    </li>
                    <li>
                        <img src="./app/public/images/delivery1.jpg" alt="">
                        <h5>Follow the status of your order with real-time alerts</h5>
                    </li>
                    <li>
                        <img src="./app/public/images/avail2.png" alt="">
                        <h5>Explore restaurants that deliver to your doorstep</h5>
                    </li>
                </ul>
            </section>
            ${this.popupForm({ input: inputs.join('\n') })}
        </div>
    `);
  }
}
