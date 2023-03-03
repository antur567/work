
let liElems=document.querySelectorAll('ul.box2 li')

let previtem=document.querySelector('img.prev')

let imgitems=document.querySelectorAll('ul.box2 li img')


let img1item=document.querySelector('.box2 .img img.img1')

let img2item=document.querySelector('.box2 .img img.img2')




let nextitem=document.querySelector('img.next')




  liElems.forEach((li,idx) => {
    li.addEventListener('click',function(e){
      e.preventDefault()
      gotosilde(idx)
   
      pointerEvents()
    })

    
  });

//  function liActive(i){
//   liElems.forEach(li => {
//     li.style.opacity="0"
//   });
//   liElems[i].style.opacity="1"
//  }


 previtem.addEventListener(function(){

 })


 function pointerEvents(){
  nextitem.addEventListener('click',function(){
    previtem.style.pointerEvents="None"
  })
  setTimeout(() => {
    pointerEventsAuto()
  }, 3000);
 }
 function pointerEventsAuto(){
  previtem.style.pointerEvents="auto"
 }




  function gotosilde(idx){
    img1item.style.left=idx*-130+"%"
  
  }
