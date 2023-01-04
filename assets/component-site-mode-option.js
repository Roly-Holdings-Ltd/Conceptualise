class SiteModeOption extends HTMLElement {
    constructor() {
      super();

      this.checkbox = this.querySelector('#checkbox');
      this.checkboxToggle();

      // setInterval(() => {
      //   document.body.classList.toggle('theme-dark-mode');
      // }, 5000);
    }

    checkboxToggle(){
      let self = this;

      let cookieName = 'theme';
      const d = new Date();
      d.setTime(d.getTime() + (1*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();

      self.checkbox.addEventListener('change', ()=>{
        document.body.classList.toggle('theme-dark-mode');

        if (self.checkbox.checked == true){
          document.cookie = 'site-theme' + "=" + 'dark' + ";" + expires + ";path=/";
        } else {
          document.cookie = 'site-theme' + "=" + 'light' + ";" + expires + ";path=/";
        }
      })
    }
  }
  
  customElements.define('site-mode-option', SiteModeOption);
  