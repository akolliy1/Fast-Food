/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

import { propTypes } from '../modules/propTypes.js';
import { redirect } from '../modules/redirect.js';
import { isAuth_Fail, isAuth_Success } from '../modules/action.js';

/**
 * @class Signin
 * @returns {object} render
 */
export class Signin extends Components {
  constructor() {
    super();
    this.submitBtn = this.submitBtn.bind(this);

    /* validate this props */
    this.propTypes = {
      children: propTypes.isString,
      actionVal: propTypes.isString,
      queries: propTypes.isString,
      redirectLink: propTypes.isString,
      redirectText: propTypes.isString,
      labelFor: propTypes.isString,
      // onKeyup: propTypes.isFunc,
      type: propTypes.isString,
      name: propTypes.isString,
      placeholder: propTypes.isString,
    };
    /* create state for the component */
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
              that.flash(res.errors); /* flash err msg to user */
              that.Spinner(false);
              that.AddToStore('auth', isAuth_Fail(res)); /* add to public store */
            }
          });
      } else { that.flash(' You are not authenticated please fill in', 'warning'); }
    };
  }

  /**
   * @method render
   * @description render to client
   * @param {HTMLDivElement} Empty
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
      this.submitBtn();
      this.onchange();
    }, 500);

    return (`
      <link rel="stylesheet" href="./app/public/css/form.css">
      <div class="container">
        ${this.formNav()}
        ${this.formTag({
        children: inputs.join('\n'), /* convert inputs array to string on a new line */
        actionVal: 'Signin',
        queries: 'I don\'t have an account',
        redirectText: 'Create Account',
        redirectLink: '/signup'
      })}
      </div>
    `);
  }
}
