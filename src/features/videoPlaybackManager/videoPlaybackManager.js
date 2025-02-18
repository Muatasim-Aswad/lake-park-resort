//play pause based on window view location
//play pause based on mouse location
export const videoPlaybackManager = () => {
  const video = document.getElementById("video");
  const videoContainer = document.getElementById("video-container");

  window.addEventListener("scroll", () =>
    playVideoOnView(videoContainer, video),
  );
  videoContainer.addEventListener("mouseenter", () => video.play());
  videoContainer.addEventListener("mouseleave", () => video.pause());
};

function playVideoOnView(videoContainer, video) {
  const videoTop = videoContainer.offsetTop;
  const videoHeight = video.offsetHeight;
  const videoBottom = videoTop + videoHeight;
  const viewLocation = window.scrollY;

  video.pause();
  if (
    viewLocation + 0.7 * videoHeight > videoTop &&
    viewLocation + 0.4 * videoHeight < videoBottom
  ) {
    video.play();
  } else {
    video.pause();
  }
}
