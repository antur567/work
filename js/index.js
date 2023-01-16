const section = document.querySelector("section");
const images = document.querySelectorAll("img");



const observer = new IntersectionObserver(
  (e) => {
    e.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("animate");
        section.style.backgroundColor = e.target.getAttribute("data-color");
        e.target.classList.remove('scale2')
       
        
      }
      
      
      else{
        e.target.classList.remove('animate')
        e.target.classList.add('scale2')
        
      }
      
    });
  },
  {
    threshold: 0.5
  }
);

images.forEach((el, i) => {
  observer.observe(el);
});







