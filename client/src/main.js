import { attachHeaderHandlers } from "./features/modules/headerManipulate.js";
import { currentNavButtonHighlighter } from "./features/modules/currentNavButtonHighlighter.js";
import { dropdownToggle } from "./features/modules/dropdownToggle.js";
import { videoPlaybackManager } from "./features/modules/videoPlaybackManager.js";
import { bookingSearchHandler } from "./features/modules/bookingSearchHandler.js";
import { imageGalleryHandler } from "./features/modules/imageGalleryHandler.js";
import { translations } from "./features/translations/translations.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  attachHeaderHandlers();
  currentNavButtonHighlighter();
  dropdownToggle();
  videoPlaybackManager();
  bookingSearchHandler();
  imageGalleryHandler();
  translations();
}
