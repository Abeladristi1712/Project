// Hero video: play only from 1:15 to 1:20.
const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  const startTime = 75;
  const stopTime = 80;

  heroVideo.loop = false;

  heroVideo.addEventListener("loadedmetadata", () => {
    if (heroVideo.duration > startTime) {
      heroVideo.currentTime = startTime;
    }
  }, { once: true });

  heroVideo.addEventListener("timeupdate", () => {
    if (heroVideo.currentTime >= stopTime) {
      heroVideo.pause();
    }
  });
}
