import ar from "./ar.js";
import tr from "./tr.js";
const en = {};

export const translations = () => {
  initializeTranslations({ en, tr, ar });
};

/**
 * Initializes language translations for the webpage.
 *
 * @param {Object} texts - An object containing language data.
 * Each language object should include:
 * - `name` {string}: Language code (e.g., "en", "tr").
 * - `dir` {string}: Text direction ("ltr" or "rtl").
 * - `placeholders` {Object}: Input placeholder texts, with `data-txt` keys.
 * - Other properties: Correspond to `data-txt` attributes for text content.
 *
 * @example
 * translations({
 *   en: {
 *     name: "en",
 *     dir: "ltr",
 *     placeholders: {
 *       form0l1: "Only letters and -",
 *     },
 *     home0c20b: "Discover Stay",
 *     home0c30h: "Unparalleled Beauty",
 *   },
 *   tr,
 *   ar
 * });
 */
const initializeTranslations = (texts) => {
  const supportedLangs = Object.keys(texts);
  cacheDefaultTexts(); // Store default English texts

  const buttons = [];
  supportedLangs.forEach((lang) => {
    const button = document.querySelector(`#${lang}`);
    if (button) buttons.push(button);
  });

  // Auto-select user-preferred language
  const userPreference = localStorage.getItem("lang");
  let userDefault = null;

  if (!userPreference) {
    userDefault = navigator.language?.split("-")[0];
    if (userDefault === "en" || !supportedLangs.includes(userDefault)) {
      userDefault = null;
    }
  }

  userPreference && changeLanguage(texts[userPreference], buttons);
  userDefault && changeLanguage(texts[userDefault], buttons);

  // Enable language switching on button click
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      changeLanguage(texts[button.id], buttons);
      localStorage.setItem("lang", button.id);
    });
  });
};

/**
 * Updates the page to the selected language.
 *
 * @param {Object} lang - The language object to apply.
 * @param {HTMLElement[]} buttons - The language selection buttons.
 */
function changeLanguage(lang, buttons) {
  // Highlight the active language button
  buttons.forEach((button) => button.classList.remove("current"));
  const currentButton = buttons.find((button) => button.id === lang.name);
  currentButton?.classList.add("current");

  // Update document language settings
  document.documentElement.lang = lang.name;
  document.documentElement.dir = lang.dir;

  // Apply translations
  changeTexts(lang);
}

/**
 * Caches default English texts for fallback purposes.
 */
function cacheDefaultTexts() {
  en.name = "en";
  en.dir = "ltr";
  en.placeholders = {};

  forEachTextElement((element) => {
    en[element.dataset.txt] = element.innerHTML;

    // Store placeholder texts for input elements
    if (element.tagName === "LABEL") {
      const inputElement = element.nextElementSibling;
      if (inputElement?.placeholder) {
        en.placeholders[element.dataset.txt] = inputElement.placeholder;
      }
    }
  });
}

/**
 * Updates all text content on the page based on the selected language.
 *
 * @param {Object} lang - The language object containing translations.
 */
function changeTexts(lang) {
  forEachTextElement((element) => {
    element.innerHTML = lang[element.dataset.txt] || "";

    // Update placeholder texts for input elements
    if (element.tagName === "LABEL") {
      const inputElement = element.nextElementSibling;
      if (inputElement?.placeholder) {
        inputElement.placeholder = lang.placeholders[element.dataset.txt] || "";
      }
    }
  });
}

/**
 * Iterates over elements that contain translatable text.
 *
 * @param {Function} callback - Function to execute on each matched element.
 */
function forEachTextElement(callback) {
  const keys = Object.keys(ar);

  keys.forEach((key) => {
    const elements = document.querySelectorAll(`[data-txt="${key}"]`);
    elements.forEach(callback);
  });
}
