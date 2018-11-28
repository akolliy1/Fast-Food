/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { propTypes } from '../modules/propTypes.js';

/**
 * @class UserHistory
 * @returns {object} render
 */
export class UserHistory extends Components {
  constructor() {
    super();
    this.mapStoreToProps({
      meals: store.meals.meals,
      auth: store.auth.isAuth,
      name: store.auth.data ? store.auth.data.user.firstName : '',
      userBtn: true
    });
    this.propTypes = {
      meals: propTypes.isArr,
    };
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

  render() {
    this.timer(this.dropdown(), 2000);
    return (`<div id="background-picture" 
            style="background-image: url(/app/public/images/food-hero.jpg);"></div>
        <div class="container">
            ${this.userNav(this.props)}
            <div class="user-menu col-xl-12 col-sm-12 p-1">
                <div class="page-heading text-center mt-1 mb-1">
                    <h2 class="mb-1">Order History</h2>
                    <hr>
                </div>
                <div class="row no-p center">
                  <div class="mt-2 col-xl-7 col-md-10 col-xs-12 order-card">
                    <a href="" class="color-gray">
                        <div class="row order-header no-p">
                            <h4>#1234567</h4>
                            <h4>13/12/17 12:38pm</h4>
                        </div>
                        <hr class="row mt-1 mb-1">
                        <div class="row order-details no-p">
                            <h4>2X  Revenge Body Pack ...</h4>
                        </div>
                        <div class="row order-footer mt-2 no-p">
                            <h4>Status: <span class="color-warning status"> Pending</span></h4>
                            <h4 class="order-amount color-green"> ₦1200.00</h4>
                        </div>
                    </a>
                  </div>
                </div>
            </div>
    
            <div class="modal hide-modal" id="order-details-modal">
                <div class="modal-content" data-bg-text="FAST-FOOD-FAST">
                    <div class="modal-header">
                        <div class="modal-title">
                            <h4>Order #12345678</h4>
                        </div>
                        <div class="close" onclick="closeOrderDetailsModal()">
                            <a href="#" aria-hidden="true" id="modal-close-icon">&times;</a>
                        </div>
                    </div>
                    <hr>
                    <div class="modal-body order-confirmation order-details">
                        <div class="order-misc">
                            <p class="order-date">15/12/2017 07:45pm</p>
                            <p>Status:
                                <span class="warning">Pending</span>
                            </p>
                            <p>Mrs. Tola Olanipekun</p>
                            <p>Address Provided: 4, Church Street, Yaba</p>
                            <p>Number Provided: +2348134567890</p>
                        </div>
                        <div class="order-summary">
                            <div>
                                <p>2x</p>
                                <p>Jollof Rice</p>
                                <p>&#8358;300.00</p>
                            </div>
                            <div>
                                <p>1x</p>
                                <p>Basmati Rice</p>
                                <p>&#8358;800.00</p>
                            </div>
                            <div>
                                <p>1x</p>
                                <p>Spagetti</p>
                                <p>&#8358;800.00</p>
                            </div>
                        </div>
                        <div class="order-amount admin-order-total">
                            <div>
                                <p>Subtotal</p>
                                <p>&#8358;1900.00</p>
                            </div>
                            <div>
                                <p>Delivery Fee</p>
                                <p>&#8358;600.00</p>
                            </div>
                            <div>
                                <p>Including VAT</p>
                                <p>&#8358;13.29</p>
                            </div>
                            <div>
                                <p>Total</p>
                                <h1>&#8358;2513.29</h1>
                            </div>
                        </div>
                        <div class="form-group-default pb-1">
                            <button>Cancell</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
  }
}
