/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable arrow-parens */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
/* eslint-disable indent */

/**
 * @class constructor
 * @returns {object} render
 */
class Constructor {
  /**
   * @method heroBackground
   * @param Empty
   * @returns {object} viod
   */
  heroBackground() {
    const hero = `
        <section class="hero" style="background-image: url(./app/public/images/food-hero.jpg)">
            <div id="hero-content-area">
                <h1>Fast Food</h1>
                <h4>
                    <i>Fast-Food-Fast</i> is an online store for ordering your favourite meals</h4>
                <a href="/meals" class="btn">place order</a>
            </div>
        </section>`;
    return hero;
  }

  /**
   * @method userNav
   * @param Empty
   * @returns {object} viod
   */
  userNav(props) {
    const nav = `
        <nav class="top-bar p-2">
            <div id="title">
                ${!props || !props.admin ? ''
                : `<a class="toggle-side-bar" onclick="showSideBar()">
                        <span class="fa fa-bars color-green"></span>
                   </a>`
                }
                <a href="">
                    fast-food-fast
                </a>
            </div>
            <ul class="short-dropdown">
                <li class="dropdown mr-3 remove-notify-icon">
                  <a href="#">
                    <span class="fa fa-bell fa-1x color-green" style="font-size: 20px"></span>
                  </a>
                      <ul class="dropdown-menu mt-3 bg-green">
                          <li class="dropdown-item">
                            <a href="#" class="color-white">Your order was cancelled</a>
                          </li>
                      </ul>
                </li>
                <li class="dropdown">
                    <a href="#">
                        <span id="signout">${props.name} &blacktriangledown;</span>
                        <span class="toggle-side-bar">
                          <i class="fab fa-opencart color-green fa-2x"></i>
                        </span>
                    </a>
                    <ul class="dropdown-menu mt-3 bg-green">
                        <li class="dropdown-image color-white">
                            <img src="/app/public/images/chicken.jpg" alt=""> Jenny Hess</li>
                        <li class="dropdown-item">
                            <a href="#" class="color-white">Profile</a>
                        </li>
                        <li class="dropdown-divider">
                            <hr>
                        </li>
                        <li class="dropdown-item">
                            <a href="/mymeals" class="color-white">Order</a>
                        </li>
                        <li class="dropdown-divider">
                            <hr>
                        </li>
                        <li class="dropdown-item notify">
                            <a href="#" class="color-white">Notification</a>
                        </li>
                        <li class="dropdown-item">
                            <a href="#" class="color-white">History</a>
                        </li>
                        <li class="dropdown-item">
                            <a href="/signin" id="signin" class="color-white">Log out</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>`;
    return nav;
  }

  /**
   * @method sideBar
   * @param Empty
   * @returns {object} viod
   */
  sideBar() {
    const sideBar = `<div class="side-bar-backdrop bg-gray" onclick="closeSideBarBackdrop()"></div>
        <div class="side-bar col-xl-2 col-sm-8">
            <section title="profile" class="profile favorit-color pb-1">
                <span class="toggler" onclick="hideSideBar()">&times;</span>
                <img class="avatar mt-1" srcset="/app/public/images/favicon.png" alt="images">
                <div class="profile-detail text-center color-white">
                    <h4 class="p-1">Jenny Hass</h4>
                    <h4>Logout</h4>
                </div>
            </section>
            <section class="color-white">
                <a href="/admin">
                    <h3 class="p-1 color-black active-dashboard">Dashboard</h3>
                </a>
                <a href="/admin-menu">
                    <h3 class="p-1 color-black">Meals</h3>
                </a>
                <a href="/admin-history">
                    <h3 class="p-1 color-black">Order</h3>
                </a>
            </section>
        </div>`;
    return sideBar;
  }

  /**
   * @method form
   * @param {Object} props Object
   * @example { children: string, actionVal: string, queries: string,
   * redirectLink: string, redirectText: string }
   * @children insert the form group that has label and input has it's children.
   * @queries fills the text for alternative options like Already a user.
   * @redirectLink path to alternative eg '/signin'.
   * @redirectText fills text for the alternative button eg Signin.
   * @returns {object} viod
   */
  formTag(props) {
    this.setProps(props);
    this.propsVerification(); /* verify props */
    const form = `<div class="form">
            <div id="page-title">
                <h4>Join us</h4>
                <hr/>
            </div>
            ${props.children}
            <div class="form-group">
                <input type="button" value="${props.actionVal}">
            </div>
            <div class="form-group">
                <h4>${props.queries}?
                  <a href=${props.redirectLink} onclick="openModal()">
                    ${props.redirectText}
                  </a>
                </h4>
            </div>
        </div>`;
    return form;
  }

  /**
   * @method formInput
   * @param {Object} props Object
   * @example { name: string, labelFor: string, type: string, placeholder: string }
   * @name fills the spaces for the label for attributes and input name attribute and id.
   * @labelFor fills the space for the label name.
   * @type fills the space for the input types eg text, email etc.
   * @placeholder fills the space for the input placeholder.
   * @returns {object} viod __form Input and label
   */
  formInput(props) {
    this.setProps(props);
    const input = `
          <div class="form-group">
                <label for="${props.name}">${props.labelFor}</label>
                <input type="${props.type}"
                  ${props.type === 'password' ? `class='input valid' id='${props.name}'` : `id="${props.name}"  class="input"`}
                  ${props.minLength !== undefined ? `name="${props.name}" minlength="${props.minLength}"`
                      : `name="${props.name}"`
                  }
                  ${props.onChange !== undefined ? `onchange="${props.onChange(event)}"`
                  : `type="${props.type}"`} required
                    placeholder="${props.placeholder}"
                >
          </div>`;
    return input;
  }

  /**
   * @method formNav
   * @param  Empty
   * @returns {object} viod
   */
  formNav() {
    return (`
      <div id="background-picture"
      style="background-image: url(./app/public/images/food-hero.jpg);"></div>
      <nav id="header">
          <div id="title">
              <a href="./">
                  fast-food-fast
              </a>
          </div>
      </nav>
    `);
  }

  popupForm(props) {
      this.setProps(props);
    return (`
      <section class="backdrop-form">
        <div class="backdrop"></div>
        <div class="form push-down">
            <div id="page-title">
                <h4>Signin</h4>
                <hr/>
            </div>
            ${props.input}
            <div class="form-group">
                <input type="button" value="signin">
            </div>
            <div class="form-group">
                <span id="back">&larr; Back</span>
                <h4>I don't have an account?
                    <a href="/signup">Create account</a>
                </h4>
            </div>
        </div>
      </section>
    `);
  }

  mealCard(props) {
      this.setProps(props);
      const mealCard = `
            <ul id='meals' class="mt-3 row no-p justify-center row-center">
              ${props.meals.map(meal => `<li accessKey="${meal.mealId}" class="col-xl-3 col-lg-4${props.className ? ' '
                : ' col-md-6 '}col-sm-9 col-xs-12 p-2">
                    <div class="meal-card bg-default" accessKey="${meal.mealId}">
                        <img class="full" srcset="${meal.img ? meal.img
                            : '/app/public/images/chicken-fajitas.jpg'}" alt="meal Image"
                        />
                        <div class="meal-card-title" accessKey="${meal.mealId}">
                                <h2>${meal.title}</h2>
                        </div>
                        <div class="Meal-card-body">
                            <div>
                                <h4 class="price">₦ ${meal.price}</h4>
                                <h4>${meal.desc}</h4>
                            </div>
                            <div class="Meal-card-btns">
                            ${props.userBtn ? `<div class="form-group-default">
                                                    <button>Order Now</button>
                                               </div>`
                                            : `<button class="btn color-success" id="edit-meal">Edit</button>
                                               <button class="btn color-danger" id="delete-meal">Delete</button>`
                            }
                            </div>
                        </div>
                    </div>
                </li>`).join('\n')}
            </ul>`;
    return mealCard;
  }

  historyContainer() {
    const mealHistory = `
        <div class="main-menu col-xl-10 col-sm-12 p-1 col align-center">
            <div class="page-heading text-center mt-1 mb-1">
                <h2 class="mb-1">Order History</h2>
                <hr>
            </div>
            <div class="mt-2 col-xl-6 col-md-10 col-xs-12 order-card">
                <a href="" class="color-gray">
                    <div class="row order-header no-p">
                        <h4>#1234567</h4>
                        <h4>13/12/17 12:38pm</h4>
                    </div>
                    <hr class="row mt-1 mb-1">
                    <div class="row order-details no-p">
                        <h4>Mr. Tosin Gbamila - 7, sanusi Street, Obalende</h4>
                    </div>
                    <div class="row order-footer mt-2 no-p">
                        <h4>Status: <span class="color-danger status"> Cancelled</span></h4>
                        <h4 class="order-amount color-green"> ₦1200.00</h4>
                    </div>
                </a>
            </div>
            <div class="mt-2 col-xl-6 col-md-10 col-xs-12 order-card">
                <a href="" class="color-gray">
                    <div class="row order-header no-p">
                        <h4>#1234567</h4>
                        <h4>13/12/17 12:38pm</h4>
                    </div>
                    <hr class="row mt-1 mb-1">
                    <div class="row order-details no-p">
                        <h4>Mr. Adura Isong - 7, sanusi Street, Obalende</h4>
                    </div>
                    <div class="row order-footer mt-2 no-p">
                        <h4>Status: <span class="color-success status"> Delivered</span></h4>
                        <h4 class="order-amount color-green"> ₦1200.00</h4>
                    </div>
                </a>
            </div>
            <div class="mt-2 col-xl-6 col-md-10 col-xs-12 order-card">
                <a href="" class="color-gray">
                    <div class="row order-header no-p">
                        <h4>#1234567</h4>
                        <h4>13/12/17 12:38pm</h4>
                    </div>
                    <hr class="row mt-1 mb-1">
                    <div class="row order-details no-p">
                        <h4>Mr. Ogungbe ayan - 7, sanusi Street, Obalende</h4>
                    </div>
                    <div class="row order-footer mt-2 no-p">
                        <h4>Status: <span class="color-warning status"> Pending</span></h4>
                        <h4 class="order-amount color-green"> ₦1200.00</h4>
                    </div>
                </a>
            </div>
    
        </div>
    `;
    return mealHistory;
  }

  historyCard(props) {
      this.setProps(props);
    const historyCard = `
      <div class="mt-2 col-xl-6 col-md-10 col-xs-12 order-card">
        <a href="" class="color-gray">
            <div class="row order-header no-p">
                <h4>#1234567</h4>
                <h4>13/12/17 12:38pm</h4>
            </div>
            <hr class="row mt-1 mb-1">
            <div class="row order-details no-p">
                <h4>Mr. Ogungbe ayan - 7, sanusi Street, Obalende</h4>
            </div>
            <div class="row order-footer mt-2 no-p">
                <h4>Status: <span class="color-warning status"> Pending</span></h4>
                <h4 class="order-amount color-green"> ₦1200.00</h4>
            </div>
        </a>
      </div>
    `;
    return historyCard;
  }
}
