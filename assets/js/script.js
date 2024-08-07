'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// click button
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// custom alert
function showAlert() {
  var alertBox = document.getElementById("customAlert");
  var progressBar = document.getElementById("progressBar");
  alertBox.style.display = "block";
  progressBar.style.width = "100%";
  
  var width = 100;
  var interval = setInterval(frame, 50);

  function frame() {
      if (width <= 0) {
          clearInterval(interval);
          alertBox.style.display = "none";
      } else {
          width--;
          progressBar.style.width = width + '%';
      }
  }
}

// send email
function showAlert() {
  var alertBox = document.getElementById("customAlert");
  var progressBar = document.getElementById("progressBar");
  alertBox.style.display = "block";
  progressBar.style.width = "100%";
  
  var width = 100;
  var interval = setInterval(frame, 50);

  function frame() {
      if (width <= 0) {
          clearInterval(interval);
          alertBox.style.display = "none";
      } else {
          width--;
          progressBar.style.width = width + '%';
      }
  }
}

function validateAndSendMail(event) {
  event.preventDefault();
  
  var fullName = document.getElementById("fullName").value;
  var emailId = document.getElementById("email_id").value;
  var message = document.getElementById("message").value;
  
  if (!fullName || !emailId || !message) {
    alert("Tutti i campi sono obbligatori.");
    return false;
  }

  var params = {
      from_name: fullName,
      email_id: emailId,
      message: message
  }

  emailjs.send("service_gy7ndzy", "template_8vy99xq", params).then(function() {
    showAlert();
  }).catch(function(error) {
    alert("Si è verificato un errore durante l'invio della mail: " + error.text);
  });

  return true;
}