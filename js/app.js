gsap.registerPlugin(ScrollSmoother, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 1.5,
  effects: true,
  ignoreMobileResize: true,
});

gsap.fromTo(
  ".header",
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: ".header",
      start: "10px",
      scrub: true,
    },
  }
);

let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");

itemsL.forEach((item) => {
  gsap.fromTo(
    item,
    { x: -200, opacity: 0 },
    { opacity: 1, x: 0, scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-150',
        scrub: true,
      },
    }
  );
});

let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");

itemsR.forEach((item) => {
  gsap.fromTo(
    item,
    { x: 200, opacity: 0 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-150',
        scrub: true,
      },
    }
  );
});
