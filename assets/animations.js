const displayScrollElement = (el) => {
    el.classList.add('scrolled');
}
const hideScrollElement = (el) => {
    el.classList.remove('scrolled');
}


const animateElements = document.querySelectorAll(".js-animate");

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
        console.log(entry.isIntersecting);
        if(entry.isIntersecting){
            displayScrollElement(entry.target)
            entry.target.classList.add('js-animate--active');
        }else{
            entry.target.classList.remove('js-animate--active');
        }
    });
  },
  { threshold: 0.1 }
);
animateElements.forEach(el => {
    observer.observe(el); 
});



