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

function formSubmit(event) {
  var url = 'http://145.239.66.155:8080/api/newsletter/save-subscriber';
  var request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('content-type', 'application/json');

  request.onload = function() {
    if (!request.responseText) {
      event.target['0'].value = '';
      let successEl = document.querySelector('.success-text');
      successEl.classList.add('show');
    } else {
      let successEl = document.querySelector('.error-text');
      successEl.classList.add('show');
    }
  };

  /*
  ToDo: Ask Mateusz to make correct error handler on BE and then uncomment this code and remove condition from success response
    request.onerror = function() {
      let successEl = document.querySelector('.error-text');
      successEl.classList.add('show');
    };
  */
  request.send(JSON.stringify({ email: event.target['0'].value }));
  event.preventDefault();
}

document.getElementById('subscribe-form').addEventListener('submit', formSubmit);
