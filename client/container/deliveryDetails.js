/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { propTypes } from '../modules/propTypes.js';

/**
 * @class homepage
 * @returns {object} render
 */
export class DeliveryDetails {
  /**
       * @method render
       * @returns {void} void
       */
  render() {
    const page = `<div id="background-picture"
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
                            <a href="/Dashboard.html" class="color-white">Profile</a>
                        </li>
                        <li class="dropdown-divider">
                            <hr>
                        </li>
                        <li class="dropdown-item">
                            <a href="/order" class="color-white">Order</a>
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
                        <h4>Delivery Details</h4>
                    </div>
                </div>
                <div class="modal-body order-confirmation order-details">
                    <div class="form-group">
                        <label for="number">Phone Number</label>
                        <input type="number" name="number" id="number">
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <textarea name="address" id="address" cols="10" rows="5"></textarea>
                    </div>
                    <div class="form-group-green pb-2">
                        <button>Proceed</button>
                    </div>
                </div>
            </div>
        </div>

    </div>`;
    return page;
  }
}
