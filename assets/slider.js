class SliderComponentV2 extends HTMLElement {
  constructor() {
    super();
    this.construct();
  }

  construct() {

    const self = this;

    this.slider = this.querySelector('ul');
    this.sliderItems = this.querySelectorAll('li');
    this.currentPage = 0;
    this.pageCount = this.querySelector('.slider-counter--current');
    this.pageTotal = this.querySelector('.slider-counter--total');
    this.prevButton = this.querySelector('button[name="previous"]') || false;
    this.nextButton = this.querySelector('button[name="next"]') || false;
    this.sliderButtons = this.querySelectorAll('[data-slider-button]').length == 0 ? document.querySelectorAll(`[data-slider-button="${this.id}"]`) : this.querySelectorAll('[data-slider-button]');
    this.dots = this.querySelectorAll('.slider__dot') || false;

    if (!this.slider) return;

    const resizeObserver = new ResizeObserver(entries => this.initPages());
    resizeObserver.observe(this.slider);

    this.debouncedUpdate = debounce((event) => {
      self.update(event);
    }, 300);

    this.handleSlideButtonsClicks();
    this.handleDotClick();

    this.slider.addEventListener('scroll', this.updateAll.bind(this));

    if (this.prevButton) this.prevButton.addEventListener('click', this.onButtonClick.bind(this));
    if (this.nextButton) this.nextButton.addEventListener('click', this.onButtonClick.bind(this));

    this.slider.scrollTo({
      left: 0
    });
  }

  updateAll() {
    this.updateDots();
    this.debouncedUpdate()
  }

  /*
   * Buttons within the slider component that slide to a specific slide.
   * This function looks for elements with [data-slider-button] attributes.
   * If none exist, they search the document for [data-slider-button="ID HERE"]
   * where the "ID HERE" matches the ID of this element.
   */
  handleSlideButtonsClicks() {

    if (this.sliderButtons.length == 0) return;

    const _this = this;

    this.sliderButtons.forEach((button, index) => {

      button.addEventListener('click', _this.goToSlide.bind(this, index));
    });
  }

  initPages() {
    if (!this.sliderItems.length === 0) return;
    this.slidesPerPage = Math.floor(this.slider.clientWidth / this.sliderItems[0].clientWidth);
    this.totalPages = this.sliderItems.length - this.slidesPerPage + 1;
    this.update();
  }

  update() {

    if (!this.pageCount || !this.pageTotal) return;
    this.currentPage = Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1;

    if (this.currentPage === 1) {
      this.prevButton.setAttribute('disabled', true);
      this.prevButton.style.opacity = 0;
    } else {
      this.prevButton.removeAttribute('disabled');
      this.prevButton.style.opacity = 1;
    }

    if (this.currentPage === this.totalPages) {
      this.nextButton.setAttribute('disabled', true);
      this.nextButton.style.opacity = 0;
    } else {
      this.nextButton.removeAttribute('disabled');
      this.nextButton.style.opacity = 1;
    }

    this.pageCount.textContent = this.currentPage;
    this.pageTotal.textContent = this.totalPages;
  }

  onButtonClick(event) {
    event.preventDefault();

    const slideScrollPosition = event.currentTarget.name === 'next' ? this.slider.scrollLeft + this.sliderItems[0].clientWidth : this.slider.scrollLeft - this.sliderItems[0].clientWidth;

    this.slider.scrollTo({
      left: slideScrollPosition
    });
  }

  /* @Function: goToSlide
   * @param index - The index of the slide to scroll to
   *
   * Function to scroll to the designated slide.
   */
  goToSlide(index) {

    this.slider.scrollTo({
      left: this.sliderItems[0].clientWidth * index
    });

    this.update();
    this.updateDots();
  }

  updateDots() {
    const currentPage = Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1;

    if (!this.dots) return;

    Array.from(this.dots).find((dot) => dot.classList.contains('active')).classList.remove('active');

    this.dots[currentPage - 1].classList.add('active');

    // this.dots.forEach((dot, index)=>{

    //   const realIndex = index + 1;
    //   dot.classList.remove('active');

    //   if( realIndex == currentPage ){
    //     dot.classList.add('active');
    //   }
    // });
  }

  /* @Function: handleDotClick
   *
   * Function to scroll to the designated slide when a dot is clicked.
   */
  handleDotClick() {

    if (!this.dots) return;

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', this.goToSlide.bind(this, index));
    });
  }
}

customElements.define('slider-component-v2', SliderComponentV2);
