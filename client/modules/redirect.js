/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-alert */

export function redirect(where) {
  location.href = where;
}

export function reload() {
  window.location.href = window.location.href;
}

export function confirmPopup(text, done, error) {
  let txt;
  if (confirm(text)) {
    done();
    txt = 'You pressed OK!';
  } else {
    error();
    txt = 'You pressed Cancel!';
  }
  document.getElementById('demo').innerHTML = txt;
}
