//image gallery - start:
/*changes images in 2 directions based on click & swipe(mouse - touch) -- hides swipe instructions once used -- progress bar*/
export const imageGalleryHandler = () => {
  const photos = [
    "https://res.cloudinary.com/dhhfikgdp/image/upload/v1715937573/images/gallery/photo1_pnavkp.jpg",
    "https://res.cloudinary.com/dhhfikgdp/image/upload/v1715937572/images/gallery/photo2_ui9snp.jpg",
    "https://res.cloudinary.com/dhhfikgdp/image/upload/v1715937573/images/gallery/photo3_bmi1av.jpg",
    "https://res.cloudinary.com/dhhfikgdp/image/upload/v1715937573/images/gallery/photo4_vhycto.jpg",
    "https://res.cloudinary.com/dhhfikgdp/image/upload/v1715937573/images/gallery/photo5_r6xyym.jpg",
    "https://res.cloudinary.com/dhhfikgdp/image/upload/v1715937573/images/gallery/photo6_px6qvn.jpg",
    "https://res.cloudinary.com/dhhfikgdp/image/upload/v1715937573/images/gallery/photo7_kn0arj.jpg",
    "https://res.cloudinary.com/dhhfikgdp/image/upload/v1715937575/images/gallery/photo8_yuqqhq.jpg",
    "https://res.cloudinary.com/dhhfikgdp/image/upload/v1715937576/images/gallery/photo9_fdo4hu.jpg",
    "https://res.cloudinary.com/dhhfikgdp/image/upload/v1715937572/images/gallery/photo10_oarmrt.jpg",
  ];

  let currentIndex = 1; //donates to the currently in display img index in photos array
  let previousIndex = () =>
    currentIndex === 0 ? photos.length - 1 : currentIndex - 1; //previous index
  let nextIndex = () =>
    currentIndex === photos.length - 1 ? 0 : currentIndex + 1; //next index
  let direction = "next"; // "next" or "left". next: to right, forward. previous: to left, backward.

  const bigImg = document.querySelector("#main-photo > img");
  const previousImg = document.querySelector("#previous-img > img");
  const currentImg = document.querySelector("#current-img > img");
  const nextImg = document.getElementById("next-img").firstElementChild;

  const swipeIcon = document.getElementById("swipe").style;
  const previousBtn = document.getElementById("btn-left");
  const nextBtn = document.getElementById("btn-right");
  const progressBar = document.getElementById("progress-bar");
  const steps = progressBar.children;

  const updateGallery = (event) => {
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
    const stateDirection = (event) => {
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

    stateDirection(event);
    changeCurrentIndex();
    updateImgs();
    updateProgressBar();

    autoUpdate = setInterval(updateGallery, 5000);

    if (event && swipeIcon.display !== "none") swipeIcon.display = "none";
  };

  let swipePrevious = false; //true: the user swiped right, previous. false: swiped left, next

  //swipe functionality
  (() => {
    let swipeStartX = 0;
    let swipeEndX = 0;
    let swipeStartY = 0;
    let swipeEndY = 0;

    //register the coordinations of mouse down and up
    const registerClick = (event) => {
      event.preventDefault();

      if (event.type.includes("down")) {
        swipeStartX = event.screenX;
        swipeStartY = event.screenY;
      } else {
        swipeEndX = event.screenX;
        swipeEndY = event.screenY;
      }
    };

    //register the coordinations of touch start and end
    const registerTouch = (event) => {
      if (event.type.includes("start")) {
        swipeStartX = event.changedTouches[0].screenX;
        swipeStartY = event.changedTouches[0].screenY;
      } else {
        swipeEndX = event.changedTouches[0].screenX;
        swipeEndY = event.changedTouches[0].screenY;
      }
    };

    //decide whether a mouse or hand movement is a swipe
    //if swipe it updates the gallery
    const isSwiped = () => {
      const swipeX = swipeEndX - swipeStartX;
      const swipeY = swipeEndY - swipeStartY;

      if (swipeX !== 0 && Math.abs(swipeX) > Math.abs(swipeY)) {
        swipePrevious = swipeX > 0 ? true : false;
        updateGallery();
        swipePrevious = false; //to keep the auto behavior as next: see stateDirection
        if (swipeIcon.display !== "none") swipeIcon.display = "none";
      }
    };

    bigImg.parentElement.addEventListener("touchstart", registerTouch, {
      passive: true,
    });
    bigImg.parentElement.addEventListener("touchend", registerTouch, {
      passive: true,
    });
    bigImg.parentElement.addEventListener("touchend", isSwiped);
    bigImg.parentElement.addEventListener("mousedown", registerClick);
    bigImg.parentElement.addEventListener("mouseup", registerClick);
    bigImg.parentElement.addEventListener("mouseup", isSwiped);
  })();

  window.addEventListener("load", updateGallery);
  let autoUpdate = setInterval(updateGallery, 5000);
  previousBtn.addEventListener("click", updateGallery);
  nextBtn.addEventListener("click", updateGallery);
};
/*end - image gallery*/
