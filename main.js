'use strict';

function toggleLanguage(event, langCode) {
  let htmlEl = document.querySelector('html');
  htmlEl.setAttribute('lang', langCode);
  event.target.classList.add('active');
  if (langCode === 'en') {
    event.target.nextSibling.classList.remove('active');
  } else {
    event.target.previousSibling.classList.remove('active');
  }
}
