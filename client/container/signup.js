/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import { propTypes } from '../modules/propTypes.js';
import { redirect } from '../modules/redirect.js';
import { isAuth_Fail, isAuth_Success } from '../modules/action.js';

/**
 * @class signup
 * @returns {object} render
 */
export class Signup extends Components {
  constructor() {
    super();
    this.onchange = this.onchange.bind(this);
    this.submitBtn = this.submitBtn.bind(this);

    /* validate this props */
    this.propTypes = {
      children: propTypes.isString,
      actionVal: propTypes.isString,
      queries: propTypes.isString,
      redirectLink: propTypes.isString,
      redirectText: propTypes.isString,
      onChange: propTypes.isFunc,
      labelFor: propTypes.isString,
      type: propTypes.isString,
      name: propTypes.isString,
      placeholder: propTypes.isString,
    };

    this.state = {
      validated: false,
      display: false,
      data: {
        firstName: {
          elementConfig: {
            labelFor: 'First Name',
            type: 'text',
            name: 'firstName',
            placeholder: 'e.g John',
            minLength: 3,
          },
          value: '',
          len: 3,
          error: 'First Name chracter must be valid',
          valid: false,
          match: false
        },
        lastName: {
          elementConfig: {
            labelFor: 'Last Name',
            type: 'text',
            name: 'lastName',
            placeholder: 'e.g Bull',
            minLength: 3,
          },
          value: '',
          len: 3,
          error: 'Last Name chracter must be valid',
          valid: false,
          match: false
        },
        email: {
          elementConfig: {
            labelFor: 'Email',
            type: 'email',
            name: 'email',
            placeholder: 'e.g Baptista@gmail.com',
            // minLength: 7,
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
            minLength: 5
          },
          value: '',
          len: 5,
          error: 'Password chracter must be valid',
          valid: false,
          match: false
        },
        confirmPassword: {
          elementConfig: {
            labelFor: 'Confirm Password',
            type: 'password',
            name: 'confirmPassword',
            placeholder: 'e.g Baptista1234',
            minLength: 5
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
    const { firstName, lastName, email, password } = this.state.data;
    submitBtn.onclick = function click() {
      if (that.state.validated) {
        that.isOfflineMode();
        const xheader = new Headers();
        xheader.append('Accept', 'application/json');
        xheader.append('Content-type', 'application/json');
        fetch('/api/v1/users/signup', {
          method: 'POST',
          headers: xheader,
          body: JSON.stringify({
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            email: email.value.trim(),
            password: password.value.trim()
          })
        }).then(res => res.json())
          .then((res) => {
            if (res.success) {
              that.Spinner(false);
              that.flash(res.message, 'success'); /* flash msg to user */
              that.AddToStore('auth', isAuth_Success(res)); /* add to public store */
              localStorage
                .setItem('user', JSON.stringify(res.user)); /* store in local storage */
              redirect('/meals');
            } else {
              that.flash(res.errors[0].password); /* flash err msg to user */
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
          // onChange: this.onchange
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
        children: inputs.join('\n'), /* convert inputs array to string */
        actionVal: 'Create Account',
        redirectLink: '/signin',
        redirectText: 'Signin',
        queries: 'Already a user'
      })}
      </div>
    `);
  }
}
