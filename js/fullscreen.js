document.querySelectorAll('img#click').forEach(image => {
  image.addEventListener('click', function() {
    if (!document.fullscreenElement) {
      if (this.requestFullscreen) {
        this.requestFullscreen();
      } else if (this.mozRequestFullScreen) {
        this.mozRequestFullScreen();
      } else if (this.webkitRequestFullscreen) {
        this.webkitRequestFullscreen();
      } else if (this.msRequestFullscreen) {
        this.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  });
});
