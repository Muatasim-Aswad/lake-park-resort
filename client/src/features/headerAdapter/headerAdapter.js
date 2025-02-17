//header - start:
/*style & display header based on its position relative to the whole page*/
export const adaptHeader = () => {
  const header = document.getElementById("header");
  const footer = document.querySelector("#footer");
  const logo = document.getElementById("logo");
  const firstContainerH1 =
    document.querySelector(".container:first-of-type>h1") ||
    document.querySelector("main").children[1];
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  const heading1stPosition = firstContainerH1.offsetTop;
  const footerPosition = footer.offsetTop;

  header.classList.add("transition");
  //first area near the header

  if (scrollPosition < heading1stPosition - 0.3 * windowHeight) {
    header.classList.remove("hide");
    header.classList.remove("primary-color");
    header.classList.remove("justify");
    logo.classList.remove("hide");
  }
  //middle area - the numbers are different to prevent a rapid change when the user keeps moving around the threshold
  else if (
    scrollPosition > heading1stPosition - 0.2 * windowHeight &&
    scrollPosition < footerPosition - windowHeight
  ) {
    header.classList.remove("hide");
    logo.classList.add("hide");
    header.classList.add("primary-color");
    header.classList.add("justify");
  }
  //last area near the footer
  else if (scrollPosition > footerPosition - windowHeight) {
    header.classList.add("hide");
  }
};

export const headerAdapter = () => {
  window.addEventListener("scroll", adaptHeader);
  window.addEventListener("resize", adaptHeader);
  window.addEventListener("load", adaptHeader);
};
/*end - header*/
