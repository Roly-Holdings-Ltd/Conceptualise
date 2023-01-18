const animateElements = document.querySelectorAll(".js-animate");

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('js-animate--active');
        }else{
            // entry.target.classList.remove('js-animate--active');
        }
    });

  },
  { threshold: 0.1 }
);
animateElements.forEach(el => {
    observer.observe(el); 
});