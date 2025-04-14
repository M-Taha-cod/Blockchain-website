const buttons = document.querySelectorAll(".btn");

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove 'active' class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    this.classList.add("active");
  });
});

// Get all fif-div elements
const fifDivs = document.querySelectorAll(".fif-div");

// Add click event listeners to each fif-div
fifDivs.forEach((fifDiv) => {
  fifDiv.addEventListener("click", () => {
    // Remove the active class from all fif-divs
    fifDivs.forEach((div) => div.classList.remove("active"));

    // Add the active class to the clicked fif-div
    fifDiv.classList.add("active");
  });
});

const mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {
  gsap.from(".header", {
    y: -100,
    duration: 1,
    delay: 0.3,
  });

  gsap.from(".bkt1", {
    x: -3000,
    duration: 1,
    delay: 0.5,
  });

  gsap.from(".bkt2", {
    x: 3000,
    duration: 1,
    delay: 0.5,
  });

  gsap.from(".yt1", {
    x: 1000,
    duration: 1,
    delay: 0.6,
  });

  gsap.from(".yt2", {
    y: 1000,
    duration: 1,
    delay: 0.6,
  });

  gsap.from(".monkey-img , .mid-text , .top-div", {
    y: 1000,
    duration: 1,
    delay: 0.6,
  });

  gsap.from(".secback-text", {
    x: 1000,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".sec-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".pq-text", {
    x: -1000,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".sec-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".accordion", {
    y: 10000,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".sec-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".orange-card", {
    y: -5000,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".sec-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".sec-btmtext", {
    x: 1000,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".sec-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".brown-card", {
    y: 1000,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".third-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".br-text1", {
    x: -1000,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".third-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".br-bk1", {
    y: 1000,
    duration: 1,
    delay: 0.6,
    scrollTrigger: {
      trigger: ".third-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".br-bk2", {
    y: 1000,
    duration: 1,
    delay: 0.8,
    scrollTrigger: {
      trigger: ".third-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".br-bk3", {
    y: 1000,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".third-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".br-bk4", {
    y: 1000,
    duration: 1,
    delay: 0.6,
    scrollTrigger: {
      trigger: ".third-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".br-bk5", {
    y: 1000,
    duration: 1,
    delay: 0.8,
    scrollTrigger: {
      trigger: ".third-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".br-bk6", {
    x: 1000,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".third-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".br-bk7", {
    x: 1000,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".third-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".frt-t1", {
    x: -1500,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".forth-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".frt-t2", {
    y: -1500,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".forth-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".frt-t3", {
    x: 1500,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".forth-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".frt-t4", {
    x: -1500,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".forth-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".frt-dt1", {
    y: 1500,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".forth-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".frt-dt2", {
    x: -1500,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".forth-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".frt-dt3", {
    x: 1500,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".forth-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".frt-dt4", {
    y: 1500,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".forth-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".ftd-t1", {
    x: -1500,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".fifth-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".ftd-t2", {
    x: 1500,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".fifth-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".ftd-t3", {
    y: 1500,
    duration: 1,
    delay: 0.6,
    scrollTrigger: {
      trigger: ".fifth-div",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".ftr-text", {
    x: -1500,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: ".footer",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".fl-div1", {
    y: 1500,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".footer",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".fl-div3", {
    y: 1500,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".footer",
      start: "top center",
      end: "top center",
    },
  });

  gsap.from(".footer-right", {
    x: 1500,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".footer",
      start: "top center",
      end: "top center",
    },
  });
});
