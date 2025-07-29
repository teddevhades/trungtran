//[TMT]      script cho intro 

let intro = document.querySelector('.intro');
let welcome__text = document.querySelector('.welcome__header');
let welcome__text__span = document.querySelectorAll('.welcome__text');
window.addEventListener('DOMContentLoaded', () => {
   welcome__text__span.forEach((span, index) => {
      setTimeout(() => {
         welcome__text__span.forEach((span, index) => {
            setTimeout(() => {
               span.classList.add('active');
            }, (index +1) * 400);
         });
         setTimeout(() => {
            welcome__text__span.forEach((span, index) => {
               setTimeout(() => {
                  span.classList.remove('active');
                  span.classList.add('fade');
               }, (index + 1) * 400);
            });
         }, 1800);
         setTimeout(( ) => {
            intro.style.top = '-100vh';
         }, 2300);
      });
   });
});
