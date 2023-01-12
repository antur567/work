const section = document.querySelector("section");
const images = document.querySelectorAll("img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        section.style.backgroundColor = entry.target.getAttribute("data-color");
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
