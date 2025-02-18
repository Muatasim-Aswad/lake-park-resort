import { adaptHeader } from "../headerAdapter/headerAdapter.js";
//define let for all elements
let hamburgerButton, closeButton, dropdownContainer, overlay, header;

//dropdown nav menu
export const dropdownToggler = () => {
  hamburgerButton = document.getElementById("hamburger-button");
  closeButton = document.getElementById("close-button");
  dropdownContainer = document.getElementById("dropdown-container");
  overlay = document.getElementById("overlay");
  header = document.getElementById("header");

  hamburgerButton.addEventListener("click", showDropdown);
};

function showDropdown(event) {
  event.stopPropagation();

  hamburgerButton.classList.add("hide");
  closeButton.classList.add("show");
  dropdownContainer.classList.add("show");
  overlay.classList.toggle("show");
  header.classList.add("primary-color");

  window.removeEventListener("scroll", adaptHeader);

  window.addEventListener("click", closeDropdown);
  window.addEventListener("resize", closeDropdown);
  window.addEventListener("hashchange", closeDropdown);
}

function closeDropdown(event) {
  if (
    dropdownContainer.classList.contains("show") &&
    (event.type === "resize" ||
      event.type === "hashchange" ||
      !dropdownContainer.contains(event.target))
  ) {
    hamburgerButton.classList.remove("hide");
    closeButton.classList.remove("show");
    dropdownContainer.classList.remove("show");
    overlay.classList.toggle("show");
    header.classList.remove("primary-color");

    adaptHeader();
    window.addEventListener("scroll", adaptHeader);
  }
}
