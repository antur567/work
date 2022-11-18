let liElems=document.querySelectorAll('ul.main li ')
let ulElems=document.querySelectorAll('.inner4 ul.app li ')


liElems.forEach((li,idx)=>{
  li.addEventListener('click',function(e){
    e.preventDefault()
    liActive(idx)
    bgchange(idx)
  })
})
function liActive(i){
  liElems.forEach(li => {
    li.classList.remove('on')
  });
  liElems[i].classList.add('on')
}

function bgchange(i){
  ulElems.forEach(ul => {
    ul.classList.remove('on')
  });
  ulElems[i].classList.add('on')
}

