/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable array-callback-return */


const rootDocument = document.querySelector('#root');
const url = location;

/**
* @function Route
* @param {Object} props { render: route, exact: boolean, path: '/' }
* @returns {viod} viod
*/
export function Route(props) {
  const { render, path, exact } = props;
  const component = new render();
  if (exact) {
    if (path === url.pathname) {
      rootDocument.innerHTML = component.render();
    }
  } else {
    rootDocument.innerHTML = component.render();
  }
}
