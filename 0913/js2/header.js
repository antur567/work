const rnbElem=document.querySelector('.rnb')

const subElem=document.querySelectorAll('ul.sub')

const lnbElem=document.querySelector('.lnb')

rnbElem.addEventListener('mouseenter',function(){
  subElem.forEach(sub => {
    sub.style.display="block"
  });
})


rnbElem.addEventListener('mouseleave',function(){
  subElem.forEach(sub => {
    sub.style.display="none"
  });
})



