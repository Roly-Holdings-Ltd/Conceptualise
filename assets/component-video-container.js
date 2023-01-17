class VideoContainer extends HTMLElement {
    constructor() {
      super();
      this.video = this.querySelector('video');
      this.videoPoster = this.querySelector('.video-container__poster');
      this.playPause();
    }

    playPause(){
        let self = this;
        let video = self.video;
        let videoPoster = self.videoPoster;

        videoPoster.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                videoPoster.style.display = 'none';
                video.controls = true;
            }
        })
    }
  }
  
  customElements.define('video-container', VideoContainer);
  