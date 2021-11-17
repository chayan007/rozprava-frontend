var observer = new IntersectionObserver(
  function(entries) {
    if (entries[0].isIntersecting === true) {
      document.querySelector(".mock3").classList.remove("mockup-box-on");
      document.querySelector(".mock2").classList.remove("mockup-box-on");
      document.querySelector(".mock1").classList.add("mockup-box-on");
    }
  },
  { threshold: [1] }
);
observer.observe(document.querySelector(".mock1"));

var observer2 = new IntersectionObserver(
  function(entries) {
    if (entries[0].isIntersecting === true) {
      document.querySelector(".mock3").classList.remove("mockup-box-on");
      document.querySelector(".mock2").classList.add("mockup-box-on");
      document.querySelector(".mock1").classList.remove("mockup-box-on");
    }
  },
  { threshold: [1] }
);
observer2.observe(document.querySelector(".mock2"));

var observer3 = new IntersectionObserver(
  function(entries) {
    if (entries[0].isIntersecting === true) {
      document.querySelector(".mock3").classList.add("mockup-box-on");
      document.querySelector(".mock2").classList.remove("mockup-box-on");
      document.querySelector(".mock1").classList.remove("mockup-box-on");
    }
  },
  { threshold: [1] }
);
observer3.observe(document.querySelector(".mock3"));
