import "./styles/general.css";
import "./styles/language.css";
import "./styles/util.css";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/book.css";
import "./styles/explore.css";
import "./styles/reach.css";
import "./styles/footer.css";
import "./styles/other.css";

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
