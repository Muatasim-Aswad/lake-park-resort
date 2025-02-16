//video - start:
/*on off based on hover*/
export const videoPlaybackManager = () => {
  const video = document.getElementById("video");
  const videoContainer = document.getElementById("video-container");

  const scrollVideo = () => {
    const videoTop = videoContainer.offsetTop;
    const videoHeight = video.offsetHeight;
    const videoBottom = videoTop + videoHeight;
    const viewLocation = window.scrollY;

    video.pause(); //ERROR move up
    if (
      viewLocation + 0.7 * videoHeight > videoTop &&
      viewLocation + 0.4 * videoHeight < videoBottom
    ) {
      video.play();
    } else {
      video.pause();
    }
  };

  window.addEventListener("scroll", scrollVideo);
  videoContainer.addEventListener("mouseleave", () => {
    video.pause();
  });
  videoContainer.addEventListener("mouseenter", () => {
    video.play();
  });
};
/*end - video*/
