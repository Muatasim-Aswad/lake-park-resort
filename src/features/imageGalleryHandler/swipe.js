export default (bigImg, swipeIcon, onSwipe) => {
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
      let swipePrevious = swipeX > 0 ? true : false;
      onSwipe(null, swipePrevious);
      if (swipeIcon.display !== "none") swipeIcon.display = "none";
    }
  };

  bigImg.parentElement.addEventListener("touchstart", registerTouch, {
    passive: true,
  });
  bigImg.parentElement.addEventListener("touchend", registerTouch, {
    passive: true,
  });
  bigImg.parentElement.addEventListener("mousedown", registerClick);
  bigImg.parentElement.addEventListener("mouseup", registerClick);

  bigImg.parentElement.addEventListener("touchend", isSwiped);
  bigImg.parentElement.addEventListener("mouseup", isSwiped);
};
