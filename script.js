AOS.init();
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".scroll-effect");
    elements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (position < windowHeight - 100) {
        el.classList.add("scroll-active");
      }
    });
  });