'use strict';

// phone-block logic

const phoneIcn = document.getElementById('phone-icon');
const numberToShow = document.querySelector('.phone-block');

phoneIcn.addEventListener('click', () => {
  numberToShow.classList.toggle('visible');
});

const form = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
});

// modal logic

const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');
const declineBtn = document.getElementById('decline-btn');
const modalChoiceBtns = document.getElementById('modal-choice-btns');

setTimeout(function() {
  modal.style.display = 'inline';
}, 1500);

modalCloseBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

declineBtn.addEventListener('mouseenter', function() {
  modalChoiceBtns.classList.toggle('modal__btns-reverse');
});

consentForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get('fullName');

  modalText.innerHTML = `
    <div class="modal__content--loading">
        <img src="loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;

  setTimeout(function() {
    document.getElementById('upload-text').innerText = `
        Making the sale...`;
  }, 1500);

  setTimeout(function() {
    document.getElementById('modal-inner').innerHTML = `
      <div class="modal__gif">
          <img src="talking-head.gif">
      </div>
      <h2 class="modal__title">Thanks <span class="modal__name-display">${fullName}</span>, you smarty pants!</h2>
      <p class="modal__paragraph">I just sold the rights to your eternal soul.</p>
    `;
    modalCloseBtn.disabled = false;
  }, 3000);
});

function openNav() {
  document.getElementById('mySidepanel').style.width = '500px';
}

function closeNav() {
  document.getElementById('mySidepanel').style.width = '0';
}

document.querySelector('.openbtn').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);
