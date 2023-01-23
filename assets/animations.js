const animateElements = document.querySelectorAll(".js-animate");
const sections = document.querySelectorAll(".shopify-section");

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
sections.forEach(el => {
    observer.observe(el);
});

// var div, i, span = "";
//   div = document.querySelectorAll(".icon-text-rows__section-heading h2")[0];
//   for (i = 0; i < div.innerText.length; i++) {
//       span += "<span>";
//       span += div.innerText[i];
//       span += "</span>";
//   }
//   div.innerHTML = span;

// document.addEventListener('scroll', () => {
//     let el = document.querySelector('.icon-text-rows__section-heading');
//     let top = el.getBoundingClientRect().bottom - 300;

//     for (let i = 0; i < div.children.length; i++) {
//       const element = div.children[i];
//       if (top > 0 && top < 250) {
//         let l = 250 - top;
//         let r = l - 200;
//         // element.style.position = 'absolute';
//         element.style.transform = `translate3D(${l}px, ${l}px, ${l}px) rotate(${l}deg)`
//       }else if (top > 0){
//         element.style.transform = `translate3D(0px, 0px, 0px) rotate(0deg)`
//         element.style.position = 'unset';
//       }
//     }

// })