import ar from "./ar.js";
import tr from "./tr.js";
const en = {};

//arabic translation - start:
export const translations = () => {
  const supportedLangs = ["en", "tr", "ar"];
  const texts = { en, tr, ar };
  storeEnTexts(); //en is the doc default

  const userPreference = localStorage.getItem("lang");

  let userDefault = navigator.language || navigator.userLanguage;
  userDefault = userDefault.split("-")[0];
  if (userDefault === "en" || !supportedLangs.includes(userDefault))
    userDefault = null;

  const buttons = [];
  supportedLangs.forEach((lang) => {
    const button = document.querySelector(`#${lang}`);
    button && buttons.push(button);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      changeLanguage(texts[button.id], buttons);
      localStorage.setItem("lang", button.id);
    });
  });

  if (userPreference) changeLanguage(texts[userPreference], buttons);
  else if (userDefault) changeLanguage(texts[userDefault], buttons);
};

/*end arabic translation*/

//helper functions
function changeLanguage(lang, buttons) {
  buttons.forEach((button) => button.classList.remove("current"));
  const currentButton = buttons.find((button) => button.id === lang.name);
  currentButton.classList.add("current");

  document.documentElement.lang = lang.name;
  document.documentElement.dir = lang.dir;

  changeTexts(lang);
}

function storeEnTexts() {
  en.name = "en";
  en.dir = "ltr";
  en.placeholders = {};

  forEachTextElement((element) => {
    en[element.dataset.txt] = element.innerHTML;

    if (element.tagName === "LABEL") {
      const inputElement = element.nextElementSibling;
      if (inputElement && inputElement.placeholder)
        en.placeholders[element.dataset.txt] = inputElement.placeholder;
    }
  });
}

function changeTexts(lang) {
  forEachTextElement((element) => {
    element.innerHTML = lang[element.dataset.txt];

    if (element.tagName === "LABEL") {
      const inputElement = element.nextElementSibling;
      if (inputElement && inputElement.placeholder)
        inputElement.placeholder = lang.placeholders[element.dataset.txt];
    }
  });
}

function forEachTextElement(callback) {
  const keys = Object.keys(ar);

  keys.forEach((key) => {
    const matchElements = document.querySelectorAll(`[data-txt="${key}"]`); //can be multiple elements
    if (!matchElements.length) return;

    matchElements.forEach(callback);
  });
}
