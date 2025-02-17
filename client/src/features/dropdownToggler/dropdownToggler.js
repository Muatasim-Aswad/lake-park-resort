import { adaptHeader } from "../headerAdapter/headerAdapter.js";

//dropdown nav menu
export const dropdownToggler = () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const closeButton = document.getElementById("close-button");
  const dropdownContainer = document.getElementById("dropdown-container");
  const overlay = document.getElementById("overlay");
  const header = document.getElementById("header");

  hamburgerButton.addEventListener("click", showDropdown);

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
};
