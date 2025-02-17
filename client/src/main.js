import { headerAdapter } from "./features/headerAdapter/headerAdapter.js";
import { currentNavButtonHighlighter } from "./features/currentNavButtonHighlighter/currentNavButtonHighlighter.js";
import { dropdownToggler } from "./features/dropdownToggler/dropdownToggler.js";
import { videoPlaybackManager } from "./features/videoPlaybackManager/videoPlaybackManager.js";
import { bookingSearchHandler } from "./features/bookingSearchHandler/bookingSearchHandler.js";
import { imageGalleryHandler } from "./features/imageGalleryHandler/imageGalleryHandler.js";
import { translations } from "./features/translations/translations.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  headerAdapter();
  currentNavButtonHighlighter();
  dropdownToggler();
  videoPlaybackManager();
  bookingSearchHandler();
  imageGalleryHandler();
  translations();
}
