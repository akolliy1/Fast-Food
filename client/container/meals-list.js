/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { propTypes } from '../modules/propTypes.js';
import { redirect } from '../modules/redirect.js';
import { getAllMeal_Success, getAllMeal_Fail } from '../modules/action.js';

const baseUrl = '/api/v1';

/**
 * @class signup
 * @returns {object} render
 */
export class UserMenus extends Components {
  constructor() {
    super();

    /**
     * @method shoppingCart
     * @description dropdown meal card
     * @param {HTMLDivElement} Empty
     * @returns {void} void
     */
    this.shoppingCart = {
      cart: {},
      orderCount: 0,
      addToCart(id) {
        if (id) {
          if (this.cart[id] === undefined) {
            this.cart[id] = [id];
            this.orderCount += 1;
          } else {
            this.cart[id].push(id);
          }
        }
      },
      deleteInCart(id) {
        if (this.cart[id]) {
          this.cart[id].slice(0, 1);
        } /* else {
          this.cart[id] = [];
          this.cart[id].push(id);
        } */
      },
      confirmPayment() {}
    };

    /* GET from store */
    this.mapStoreToProps({
      meals: store.meals.meals,
      auth: store.auth.isAuth,
      name: store.auth.data ? store.auth.data.user.firstName : '',
      userBtn: true,
      orderCount: this.shoppingCart.orderCount
    });
    /* validate props */
    this.propTypes = {
      meals: propTypes.isArr,
      auth: propTypes.isBool,
      name: propTypes.isString,
      userBtn: true
    };
  }

  /**
   * @method mealCardDropdown
   * @description dropdown meal card
   * @param {HTMLDivElement} Empty
   * @returns {void} void
   */
  mealCardDropdown() {
    const that = this;
    const mealCard = document.querySelectorAll('.meal-card');
    const mealCardBtn = document.querySelectorAll('.meal-card button');

    /* Order Button */
    mealCardBtn.forEach((ev) => {
      ev.addEventListener('click', (e) => {
        e.stopPropagation();
        const { accessKey } = e.target;
        that.shoppingCart.addToCart(accessKey);
        /* update notification */
        that.notification(that.shoppingCart.orderCount);
        that.flash('added to cart', 'success');
      });
    });

    /* Flip Meal Card */
    mealCard.forEach((el) => {
      el.addEventListener('click', function onclick(ev) {
        ev.preventDefault();
        this.classList.toggle('meal-card-height');
        this.lastChild.previousSibling.classList.toggle('show-meal-card');
      });
    });
  }

  /**
   * @method notification
   * @description notification circle
   * @param {number} num
   * @returns {void} void
   */
  notification(num) {
    /* query notification icon */
    const noteIcon = document.querySelectorAll('#icon');

    /* Append notification innerHtml */
    noteIcon.innerHTML = num;
  }

  /**
   * @method dropdown
   * @description fetch meals from server and add to store
   * @param {*} Empty
   * @returns {void} void
   */
  dropdown() {
    const isDropdown = document.querySelectorAll('.dropdown');
    isDropdown.forEach((el) => {
      el.addEventListener('click', () => {
        const isChild = el.lastChild.previousElementSibling;
        if (isChild.style.display !== 'block') {
          this.timer(isChild.style.display = 'block', 1000);
        } else {
          this.timer(isChild.style.display = 'none', 2000);
        }
      });
    });
  }

  /**
   * @method appendMealsDocAfterServerFetched
   * @description fetch meals from server and add to store
   * @param {*} isMeals
   * @returns {void} void
   */
  appendMealsDocAfterServerFetched(isMeals) {
    const div = document.createElement('div');
    div.innerHTML = this.mealCard({ meals: isMeals, userBtn: true });
    document.querySelector('.user-menu').appendChild(div);
  }

  /**
   * @method fetchMealsFromServer
   * @description fetch meals from server and add to store
   * @param {HTMLDivElement} Empty
   * @returns {void} void
   */
  fetchMealsFromServer() {
    const that = this;
    if (!this.props.auth) {
      this.flash(' You are not authenticated Please login', 'warning', 3000); /* 3 seconds */
      this.timer(redirect('/signin'), 3000);
      return false;
    }
    this.Spinner(true);
    this.flash(' Welcome ', 'success');
    const xheader = new Headers();
    xheader.append('Accept', 'application/json');
    xheader.append('Content-type', 'application/json');
    fetch(`${baseUrl}/meals`, { method: 'GET' })
      .then(res => res.json())
      .then((res) => {
        if (res.isMeals) {
          that.AddToStore('meals', getAllMeal_Success(res.isMeals)); /* add to public store */
          that.Spinner(false);
          that.appendMealsDocAfterServerFetched(res.isMeals);
          that.setProps({ meals: res.isMeals });
        } else {
          that.flash(res.message, 'warning', 10000); /* flash err msg to user */
          that.Spinner(false);
          that.AddToStore('meals', getAllMeal_Fail(res.message)); /* add to public store */
        }
      }).catch((/* err */) => console.log('there was an err')); /* possibility of error */
  }

  /**
   * @method render
   * @description render to client
   * @param {HTMLDivElement} Empty
   * @returns {void} void
   */
  render() {
    this.fetchMealsFromServer();
    setTimeout(() => {
      this.mealCardDropdown();
      this.dropdown();
    }, 2000);
    return (`<div id="background-picture"
          style="background-image: url(/app/public/images/chicken-fajitas.jpg);"></div>
      <div class="container">
          ${this.userNav(this.props)}
          <div class="clear"></div>
          <div class="user-menu col-xl-12 col-sm-12 p-1">
              <div class="page-heading text-center mt-1 mb-1">
                  <h2 class="mb-1">Today's Meal</h2>
                  <hr>
              </div>
          </div>
      </div>`
    );
  }
}
