/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { propTypes } from '../modules/propTypes.js';

/**
 * @class adminMenus
 * @returns {object} render
 */
export class ConfirmOrders {
  render() {
    return (`<div id="background-picture" 
        style="background-image: url(/app/public/images/food-hero.jpg);"></div>
      <div class="container">
        <nav class="top-bar p-2">
            <div id="title">
                <a href="/">
                    fast-food-fast
                </a>
            </div>
            <ul class="short-dropdown">
                <li class="dropdown mr-3 remove-notify-icon">
                    <a href="">
                        <span class="fa fa-bell fa-2x color-green"></span>
                    </a>
                    <ul class="dropdown-menu mt-3 bg-green">
                        <li class="dropdown-item">
                            <a href="" class="color-white">Your order was cancelled</a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">
                        <span id="signout">Sign Out &blacktriangledown;</span>
                        <span class="toggle-side-bar">
                            <i class="fab fa-opencart color-green fa-2x"></i>
                        </span>
                    </a>
                    <ul class="dropdown-menu mt-3 bg-green">
                        <li class="dropdown-image color-white">
                            <img src="/app/public/images/chicken.jpg" alt=""> Jenny Hess</li>
                        <li class="dropdown-item">
                            <a href="/Dashboard" class="color-white">Profile</a>
                        </li>
                        <li class="dropdown-divider">
                            <hr>
                        </li>
                        <li class="dropdown-item">
                            <a href="/order-confirmation" class="color-white">Order</a>
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
        </nav>

        <div class="modal" id="order-confirmation">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">
                        <h4>Please Confirm Your Order Details</h4>
                    </div>
                </div>
                <div class="modal-body order-confirmation order-details">
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
                    <div class="order-misc pb-2">
                        <p class="order-date">15/12/2017 07:45pm</p>
                        <p>Mrs. Tola Olanipekun</p>
                        <p>Address Provided: 4, Church Street, Yaba</p>
                        <p>Number Provided: +2348134567890</p>
                    </div>
                    <div class="form-group-default pb-1">
                        <button>Edit</button>
                    </div>
                    <div class="form-group-green pb-2">
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        
      </div>`);
  }
}
