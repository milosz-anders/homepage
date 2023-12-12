{
  const welcome = () => {
    console.log("Witam wszystkich developerów tutaj zaglądających!");
  }

  const runHighContrastTheme = () => {
    const bodyElement = document.querySelector(".js-body");
    const menuNavigationElement = document.querySelector(".js-navigation");
    const footerElement = document.querySelector(".js-footer");
    const mainHeaderElement = document.querySelector('.js-headerTitle');
    const tableCellElement = document.querySelectorAll('.js-tableCell');
    const tableRowElement = document.querySelectorAll('.js-tableRow');
    const menuListItemElement = document.querySelectorAll('.js-navigationItem');
    const themeName = document.querySelector('.js-themeName');

    bodyElement.classList.toggle("body--highContrast");
    themeName.innerText = bodyElement.classList.contains("body--highContrast") ? "Włącz motyw podstawowy" : "Włącz tryb wysokiego kontrastu";
    menuNavigationElement.classList.toggle("navigation--highContrast");
    footerElement.classList.toggle("footer--highContrast");
    mainHeaderElement.classList.toggle("header__title--highContrast");

    tableCellElement.forEach(table__cell => {
      table__cell.classList.toggle("table__cell--highContrast");
    });

    tableRowElement.forEach(table__row => {
      table__row.classList.toggle("table__row--highContrast");
    });

    menuListItemElement.forEach(menuNavigation__menuListItem => {
      menuNavigation__menuListItem.classList.toggle("navigation__item--hightContrast");
    });
  };

  const init = () => {
    const buttonElement = document.querySelector(".js-button");
    buttonElement.addEventListener("click", runHighContrastTheme);

    welcome();
  };

  init();
}