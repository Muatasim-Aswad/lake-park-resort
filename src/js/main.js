import { attachHeaderHandlers } from "./modules/headerManipulate.js";
import { currentNavButtonHighlighter } from "./modules/currentNavButtonHighlighter.js";
import { dropdownToggle } from "./modules/dropdownToggle.js";
import { videoPlaybackManager } from "./modules/videoPlaybackManager.js";
import { bookingSearchHandler } from "./modules/bookingSearchHandler.js";
import { imageGalleryHandler } from "./modules/imageGalleryHandler.js";
import { arabicTranslation } from "./translations/arabicTranslation.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  attachHeaderHandlers();
  currentNavButtonHighlighter();
  dropdownToggle();
  videoPlaybackManager();
  bookingSearchHandler();
  imageGalleryHandler();
  arabicTranslation();
}
