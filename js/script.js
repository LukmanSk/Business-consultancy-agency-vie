// const nav = document.querySelector(".header");

// window.addEventListener("scroll", () => {
//   nav.classList.toggle("nav__sticky", window.scrollY > 400);
//   console.log(window.scrollY);
// });

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  reset: true,
});

sr.reveal(
  `.text-box,.img-box, .section__head, .card,.grid__item-team,.grid__item,.filter, .text-content, .news__item,  .contact, .recent-news, .credit-info`,
  {
    origin: "bottom",
    interval: 100,
  }
);
