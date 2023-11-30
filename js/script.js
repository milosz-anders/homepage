let buttonElement = document.querySelector(".js-button");
let bodyElement = document.querySelector(".js-body");
let menuNavigationElement = document.querySelector(".js-navigation");
let footerElement = document.querySelector(".js-footer");
let mainHeaderElement = document.querySelector('.js-headerTitle');
var tableCellElement = document.querySelectorAll('.js-tableCell');
var tableRowElement = document.querySelectorAll('.js-tableRow');
var menuListItemElement = document.querySelectorAll('.js-navigationItem');
let themeName = document.querySelector('.js-themeName');


buttonElement.addEventListener("click", () => {
  bodyElement.classList.toggle("body--highContrast");

  themeName.innerText = bodyElement.classList.contains("body--highContrast") ? "Włącz motyw podstawowy" : "Włącz tryb wysokiego kontrastu";

  menuNavigationElement.classList.toggle("navigation--highContrast");
  footerElement.classList.toggle("footer--highContrast");
  mainHeaderElement.classList.toggle("header__title--highContrast");


  tableCellElement.forEach(function (table__cell) {
    table__cell.classList.toggle("table__cell--highContrast");
  });


  tableRowElement.forEach(function (table__row) {
    table__row.classList.toggle("table__row--highContrast");
  });

  menuListItemElement.forEach(function (menuNavigation__menuListItem) {
    menuNavigation__menuListItem.classList.toggle("navigation__item--hightContrast");
  });

});