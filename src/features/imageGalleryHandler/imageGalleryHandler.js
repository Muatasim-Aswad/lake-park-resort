import photos from "./photos.js";
import swipe from "./swipe.js";

//image gallery - start:
/*changes images in 2 directions based on click & swipe(mouse - touch) -- hides swipe instructions once used -- progress bar*/
export const imageGalleryHandler = () => {
  const bigImg = document.querySelector("#main-photo > img");
  const previousImg = document.querySelector("#previous-img > img");
  const currentImg = document.querySelector("#current-img > img");
  const nextImg = document.getElementById("next-img").firstElementChild;

  const swipeIcon = document.getElementById("swipe").style;
  const previousBtn = document.getElementById("btn-left");
  const nextBtn = document.getElementById("btn-right");
  const progressBar = document.getElementById("progress-bar");
  const steps = progressBar.children;

  let currentIndex = 1; //donates to the currently in display img index in photos array
  let previousIndex = () =>
    currentIndex === 0 ? photos.length - 1 : currentIndex - 1; //previous index
  let nextIndex = () =>
    currentIndex === photos.length - 1 ? 0 : currentIndex + 1; //next index
  let direction = "next"; // "next" or "left". next: to right, forward. previous: to left, backward.

  const updateGallery = (event, swipeDirection) => {
    if (swipeDirection) swipePrevious = swipeDirection;
    //to create blocks in progressBar as much as the elements of photos array
    const rebuildProgressBar = () => {
      const stepsFactory = () => {
        let step = document.createElement("div");
        step.classList.add("step");
        progressBar.appendChild(step);
      };

      //only when the progressBar steps are not equal to images' number
      if (steps.length !== photos.length) {
        while (progressBar.firstChild) {
          progressBar.removeChild(progressBar.firstChild);
        }
        photos.forEach(stepsFactory);
        updateProgressBar();
      }
    };

    //decides if the flow of change forward or backward
    const setDirection = (event) => {
      if (swipePrevious || (event && event.target.contains(previousBtn))) {
        direction = "previous";
      } else {
        direction = "next";
      }
    };

    //which photo to display now?
    const changeCurrentIndex = () => {
      if (direction === "next")
        currentIndex =
          currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
      else
        currentIndex =
          currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    };

    const updateImgs = () => {
      const assignImg = (destination, link) => {
        destination.style.opacity = "0.4";
        destination.src = link;
        if (destination !== bigImg) {
          destination.parentElement.style.animation =
            direction === "next"
              ? "slide-left 0.7s ease-in-out"
              : "slide-right 0.7s ease-in-out";
        }
        setTimeout(() => {
          destination.style.opacity = "1";

          if (destination !== bigImg)
            destination.parentElement.style.animation = "";
        }, 700);
      };

      assignImg(bigImg, photos[currentIndex]);
      assignImg(previousImg, photos[previousIndex()]);
      assignImg(currentImg, photos[currentIndex]);
      assignImg(nextImg, photos[nextIndex()]);
    };

    const updateProgressBar = () => {
      steps[previousIndex()].classList.remove("current-step");
      steps[nextIndex()].classList.remove("current-step");
      steps[currentIndex].classList.add("current-step");
    };

    if (event && event.type === "load") {
      updateImgs();
      rebuildProgressBar();
      removeEventListener("load", updateGallery);
      return;
    }

    clearInterval(autoUpdate);

    setDirection(event);
    changeCurrentIndex();
    updateImgs();
    updateProgressBar();

    autoUpdate = setInterval(updateGallery, 5000);

    if (event && swipeIcon.display !== "none") swipeIcon.display = "none";
  };

  let swipePrevious = false; //true: the user swiped right, previous. false: swiped left, next

  //swipe functionality

  swipe(bigImg, swipeIcon, (event, swipeDirection) => {
    updateGallery(event, swipeDirection);
    swipePrevious = false; //to keep the auto behavior as next: see stateDirection
  });

  window.addEventListener("load", updateGallery);
  let autoUpdate = setInterval(updateGallery, 5000);
  previousBtn.addEventListener("click", updateGallery);
  nextBtn.addEventListener("click", updateGallery);
};
/*end - image gallery*/
