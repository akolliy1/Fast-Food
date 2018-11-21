/* eslint-disable */
const backdropForm = document.querySelector('.backdrop-form');
const dropdown = document.querySelectorAll('.dropdown');
const sideBarBackdrop = document.querySelector('.side-bar-backdrop');
const sideBar = document.querySelector('.side-bar');
const dropDownMenu = document.querySelector('.dropdown .dropdown-menu');
const orderCards = document.querySelectorAll('.order-card');
const mealCardHeight = document.querySelectorAll('.meal-card');
const orderHistoryModal = document.querySelectorAll('.modal');
const addMealModal = document.querySelector('#add-meal-modal');
// const formImage = document.querySelector('#jfjj')




/* form image */
document.querySelector('#meal-image-input').onchange = function changeImage(e) {
    const file = e.target.files[0];
    const preview = document.querySelector('#meal-form-image')
    const reader = new FileReader()
    reader.addEventListener('load', function () {
        preview.src = reader.result;
    }, false);
    reader.readAsDataURL(file);
}
/* end form image */





/* close backdrop at home page */
const closeBackdrop = function (event) {
   backdropForm.style.display = 'none'
}
const closeModal = function (event) {
    backdropForm.style.display = 'none'
}
const openModal = function (event) {
    backdropForm.style.display = 'block'
}
/* End of close backdrop at home page */





/* dropdown at admin page */
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function (e) {
        e.stopPropagation
        e.preventDefault();
        console.log(e)
        const x = this.lastChild.previousElementSibling;
        displayModal(x, 'show-animation', 'fold')
    }, true)
}





/* sidebar animation */
const hideSideBar = function (event) {
    sideBar.classList.remove('show-side-bar')
    sideBarBackdrop.style.display = 'none';
}

const showSideBar = function (event) {
    sideBar.classList.add('show-side-bar')
    sideBarBackdrop.style.display = 'block';
}
const closeSideBarBackdrop = function (event, done) {
    sideBarBackdrop.style.display = 'none';
    sideBar.classList.remove('show-side-bar')
}





/* order History Modal and cards */
for (let i = 0; i < orderCards.length; i++) {
    orderCards[i].addEventListener('click', function (event) {
        event.preventDefault();
        orderHistoryModal[0].classList.toggle('hide-modal')
    })
}




const closeOrderDetailsModal = function (event) {
    orderHistoryModal[0].classList.toggle('hide-modal')
}
/* End of History Modal */



/* create a meal Modal */
const toggleMealModal = function (event) {
    addMealModal.classList.toggle('hide-modal')
}




/* card dropdown */
for (let i = 0; i < mealCardHeight.length; i++) {
    mealCardHeight[i].addEventListener('click', function (event) {
        event.preventDefault();
        this.classList.toggle('meal-card-height')
        this.lastChild.previousSibling.classList.toggle('show-meal-card')
    })
}





/**
 * @description show and hide Element with animation
 * @function displayModal
 * @param {el} el
 * @returns {void} void
 */
function displayModal(el, show, remove) {
    const addSpaceToShowClass = ' ' + show;
    const addSpaceToRemoveClass = ' ' + remove;
    if (el.className.indexOf(show) == -1) {
        el.className += addSpaceToShowClass;
    }
    else if (el.className.indexOf(show) == -1 && el.className.indexOf(remove) !== -1) {
        el.className =
            el.className.replace(addSpaceToRemoveClass, addSpaceToShowClass);
    }
    else {
        el.className =
            el.className.replace(addSpaceToShowClass, addSpaceToRemoveClass)
    }
}