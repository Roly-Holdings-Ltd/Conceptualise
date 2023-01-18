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


// var leftItem = document.querySelector('.icon-image-row__section-heading'),
//     rightItem = document.getElementById('item1');

// ;(function(){

//   var throttle = function(type, name, obj){
//     var obj = obj || window;
//     var running = false;
//     var func = function(){
//       if (running){ return; }
//       running = true;
//       requestAnimationFrame(function(){
//         obj.dispatchEvent(new CustomEvent(name));
//         running = false;
//       });
//     };
//     obj.addEventListener(type, func);
//   };
  
//   throttle("scroll", "optimizedScroll");
// })();

// window.addEventListener("optimizedScroll", function(){
//     // leftItem.style.transform = `rotate(-${window.pageYOffset}deg)`;
// })


// window.onscroll = function(e) {
//     let scrollDirection;
//     if(this.oldScroll > this.scrollY){
//         scrollDirection = 'up'
//     } else{
//         scrollDirection = 'down'
//     }
//     this.oldScroll = this.scrollY;
//   }