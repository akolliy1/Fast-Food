/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */

import { Route } from './route.js';

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


export const Switch = (route) => {
  const url = location.pathname;
  let isRoute = route.filter(props => props.path === url);
  if (isRoute.length < 1) {
    isRoute = route.filter(props => props.path === '/*');
  }
  return Route(isRoute[0]);
};
