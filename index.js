//+++ GET THE ELEMENTS OF THE DOM +++

const pages = document.getElementById("pages");
const labels = document.querySelectorAll("#pagination > label");
const pagination = document.getElementById("pagination");
const inputs = document.querySelectorAll("#pages > input");

let currentPage = 0;
let startTouch = 0;
let endTouch = 0;

// +++ SET THE EVENTLISTENER +++

pagination.addEventListener("click", setDirection);
pages.addEventListener("touchstart", getTheStartTouch);
pages.addEventListener("touchend", mobileSetDirection);

// +++++ FUNCTIONS +++++

function setDirection(e) {
  if (e.target.nodeName == "LABEL") {
    moveToPage(e.target.dataset.pag);
  }
}

function moveToPage(numOfPage) {
  labels[currentPage].classList.remove("sel");
  labels[numOfPage].classList.add("sel");
  inputs[numOfPage].checked = "true";
  currentPage = numOfPage;
  if (currentPage == 1 || currentPage == 4 || currentPage == 8) {
    for (let x = 0; x < labels.length; x++) {
      labels[x].classList.replace("label", "label-dark");
      document.body.style.color = "black";
    }
  } else {
    for (let xx = 0; xx < labels.length; xx++) {
      labels[xx].classList.replace("label-dark", "label");
      document.body.style.color = "white";
    }
  }
}

function getTheStartTouch(e) {
  startTouch = e.changedTouches[0].screenX;
}

function mobileSetDirection(e) {
  endTouch = e.changedTouches[0].screenX;

  if (endTouch < startTouch && currentPage < labels.length - 1) {
    moveToPage(currentPage + 1);
  } else if (endTouch > startTouch && currentPage > 0) {
    moveToPage(currentPage - 1);
  }
}
