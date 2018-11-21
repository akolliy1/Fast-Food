/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { propTypes } from '../modules/propTypes.js';

/**
 * @class adminMenus
 * @returns {object} render
 */
export class AdminMenus extends Components {
  render() {
    return (`<div id="background-picture"
            style="background-image: url(/app/public/images/food-hero.jpg);"></div>
      <div class="container">
          ${this.userNav({ admin: true })}
          <div class="side-bar-backdrop bg-gray" onclick="closeSideBarBackdrop()"></div>
          ${this.sideBar()}
          <div class="main-menu col-xl-10 col-sm-12 p-1">
              <div class="page-heading text-center mt-3 mb-3">
                  <a href="#" class="btn-medium btn-color color-white"
                      onclick="toggleMealModal()">Add a New Meal</a>
              </div>
              <ul class="row no-p justify-center">
                  <li class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 p-2">
                      <div class="meal-card bg-default">
                          <img class="full" src="/app/public/images/chicken-fajitas.jpg"
                              alt="" srcset="">
                          <div class="meal-card-title">
                              <h2>chicken wing</h2>
                          </div>
                          <div class="Meal-card-body">
                              <div>
                                  <h4 class="price">₦ 2000</h4>
                                  <h4>Meal consists of Spaghetti,
                                  Vegetable Salad and Shredded smoked chicken</h4>
                              </div>
                              <div class="Meal-card-btns">
                                  <button class="btn color-success" id="edit-meal">Edit</button>
                                  <button class="btn color-danger" id="delete-meal">Delete</button>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 p-2">
                      <div class="meal-card bg-default">
                          <img class="full"
                          src="/app/public/images/chicken-fajitas.jpg" alt="" srcset="">
                          <div class="meal-card-title">
                              <h2>chicken wing</h2>
                          </div>
                          <div class="Meal-card-body">
                              <div>
                                  <h4 class="price">₦ 2000</h4>
                                  <h4>Meal consists of Spaghetti,
                                  Vegetable Salad and Shredded smoked chicken</h4>
                              </div>
                              <div class="Meal-card-btns">
                                  <button class="btn color-success" id="edit-meal">Edit</button>
                                  <button class="btn color-danger" id="delete-meal">Delete</button>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
  
          <div class="modal hide-modal" id="add-meal-modal">
              <div class="modal-content" data-bg-text="FAST-FOOD-FAST">
                  <div class="modal-header">
                      <div class="modal-title">
                          <h4>Create a delicious Meal</h4>
                      </div>
                      <div class="close" onclick="closeOrderDetailsModal()">
                          <a href="#" aria-hidden="true" id="modal-close-icon">&times;</a>
                      </div>
                  </div>
                  <hr>
                  <div class="modal-body meal-details">
                      <div class="form-group">
                          <label for="Meal-name">Meal Name</label>
                          <input id="Meal-name" type="text" placeholder="Meal Name">
                      </div>
                      <div class="form-group-image">
                          <div class="img-overlay" id="img-overlay">
                              <p id="overlay-p">Please Select an Image</p></div>
                          <input id="meal-image-input" type="file"
                              accept="image/*" placeholder="image">
                          <img src="/app/public/images/placeholder-image.jpg"
                              alt="meal-image" id="meal-form-image" />
                      </div>
                      <div class="form-group">
                          <label for="price">Price</label>
                          <input id="price" type="number" placeholder="₦ 000">
                      </div>
                      <div class="form-group">
                          <label for="Description">Description</label>
                          <textarea name="" id="" cols="20" rows="6"></textarea>
                      </div>
                      <div class="form-group pb-1">
                          <input type="button" value="Add">
                      </div>
                  </div>
              </div>
          </div>
      </div>
    `);
  }
}
