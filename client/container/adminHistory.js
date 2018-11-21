/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { propTypes } from '../modules/propTypes.js';

/**
 * @class adminMenus
 * @returns {object} render
 */
export class AdminHistory extends Components {
  render() {
    return (`<div id="background-picture" 
            style="background-image: url(/app/public/images/food-hero.jpg);"></div>
        <div class="container">
            ${this.userNav({ admin: true })}
            <div class="side-bar-backdrop bg-gray" onclick="closeSideBarBackdrop()"></div>
            ${this.sideBar()}
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
                    </div>
                </div>
            </div>
        </div>
    `);
  }
}
