/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { propTypes } from '../modules/propTypes.js';

/**
 * @class admin
 * @returns {object} render
 */

export class Admin extends Components {
  render() {
    return (`<div id="background-picture"
        style="background-image: url(/app/public/images/food-hero.jpg);"></div>
      <div class="container">
          ${this.userNav({ admin: true })}
          <div class="side-bar-backdrop bg-gray" onclick="closeSideBarBackdrop()"></div>
          ${this.sideBar()}
          <div class="main-menu col-xl-10 col-sm-12 p-1 pt-2 font">
              <div class="row no-p">
                  <div class="col-xl-4 col-xs-11">
                      <div class="col card card-highest bg-default center">
                          <h2 class="color-success">345</h2>
                          <h2 class="color-success">order</h2>
                      </div>
  
                  </div>
                  <div class="col-xl-4 col-xs-11">
                      <div class="col card card-highest bg-default center color-danger">
                          <h3>42 Asun Deals</h3>
                          <h3>59 Banana Souffle</h3>
                          <h3>17 shawama</h3>
                          <h3>30 Jollof Rice Packs </h3>
                      </div>
  
                  </div>
                  <div class="col-xl-4 col-xs-11">
                      <div class="col card card-highest bg-default center">
                          <h2 class="color-success"># 500, 000.00</h2>
                      </div>
  
                  </div>
              </div>
              
              <table>
                  <thead class="color-default">
                      <th class="p-0">Order Id</th>
                      <th class="p-0">Menu Item(s)</th>
                      <th class="p-0">Customer</th>
                      <th class="p-0">Amount</th>
                      <th class="p-0">Date</th>
                      <th class="p-0">Status</th>
                  </thead>
                  <tbody>
                      <tr>
                          <td class="p-0">11234</td>
                          <td class="p-0">Potato cheeps</td>
                          <td class="p-0">Mr akanni</td>
                          <td class="p-0">#2, 500</td>
                          <td class="p-0">12/08/18 8:50pm</td>
                          <td class="p-0 color-danger">Cancelled</td>
                      </tr>
                      <tr>
                          <td class="p-0">11235</td>
                          <td class="p-0">Sausage rolls</td>
                          <td class="p-0">Mrs bimpe</td>
                          <td class="p-0">#1, 500</td>
                          <td class="p-0">2/08/18 8:10pm</td>
                          <td class="p-0 color-success">Delivered</td>
                      </tr>
                      <tr>
                          <td class="p-0">11235</td>
                          <td class="p-0">Sausage rolls</td>
                          <td class="p-0">Mrs bimpe</td>
                          <td class="p-0">#1, 500</td>
                          <td class="p-0">24/08/18 8:10pm</td>
                          <td class="p-0 color-success">Delivered</td>
                      </tr>
                      <tr>
                          <td class="p-0">11234</td>
                          <td class="p-0">Potato cheeps</td>
                          <td class="p-0">Mr maruf</td>
                          <td class="p-0">#2, 000</td>
                          <td class="p-0">21/04/18 8:50pm</td>
                          <td class="p-0 color-danger">Cancelled</td>
                      </tr>
                      <tr>
                          <td class="p-0">11234</td>
                          <td class="p-0">rice and chicken</td>
                          <td class="p-0">Mr akin</td>
                          <td class="p-0">#2, 700</td>
                          <td class="p-0">21/04/18 4:50pm</td>
                          <td class="p-0 color-warning">Pending</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    `);
  }
}
