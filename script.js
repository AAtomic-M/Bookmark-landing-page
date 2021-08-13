// mob nav

const btnNavOpen = document.querySelector(".btn-mobnav");
const mobNav = document.querySelector(".mob__nav");
const overflow = document.querySelector(".overflow");
const btnNavClose = document.querySelector(".btn-close");
const mailInput = document.querySelector(".mail_input");
const btnMail = document.querySelector(".btn_mail");
const mailErrorMsg = document.querySelector(".error_msg");
const mailSubmit = document.querySelector(".mail_submit");

btnMail.addEventListener("click", function (e) {
  e.preventDefault();
  const email = mailInput.value;

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(email).toLowerCase())) {
    mailInput.value = "";
    mailInput.classList.remove("mail_error");
    mailErrorMsg.classList.add("hidden");
    mailSubmit.style.backgroundColor = "";
    mailInput.placeholder = "Enter your email address";
  } else {
    mailInput.classList.add("mail_error");
    mailErrorMsg.classList.remove("hidden");
    mailInput.value = "";
    mailInput.placeholder = "example@email.com";
    mailSubmit.style.backgroundColor = "#fa5757";
  }
});

btnNavOpen.addEventListener("click", function () {
  mobNav.classList.add("visible");
  overflow.classList.add("visible");
  document.querySelector("body").style.overflowY = "hidden";
});
btnNavClose.addEventListener("click", function () {
  mobNav.classList.remove("visible");
  overflow.classList.remove("visible");
  document.querySelector("body").style.overflowY = "visible";
});

// Tabed component
const tabs = document.querySelectorAll(".features__tab");
const tabsContainer = document.querySelector(".features__tabs");
const tabsContent = document.querySelectorAll(".feature");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target;
  //active tab
  tabs.forEach((t) => t.classList.remove("feature__tab--active"));
  clicked.classList.add("feature__tab--active");
  // activate coresponding content
  tabsContent.forEach((c) => c.classList.remove("feature__content-active"));
  document
    .querySelector(`.feature-${clicked.dataset.tab}`)
    .classList.add("feature__content-active");
});

//fqa section
const btnsFqa = document.querySelectorAll(".btn-arrow");
const answers = document.querySelectorAll(".answer");

btnsFqa.forEach((btn, i) => {
  btn.addEventListener("click", function (e) {
    if (btn.classList.contains("btn-arrow--active"))
      btn.classList.remove("btn-arrow--active");
    else btn.classList.add("btn-arrow--active");

    answers.forEach((answer, y) => {
      if (i === y && !answer.classList.contains("visible")) {
        answer.classList.add("visible");
      } else {
        answer.classList.remove("visible");
      }
    });
  });
});

///////////////////////////////////////////////
// nav links scrolling

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains("nav__links-link")) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////////////
// mob-nav links scrolling

document
  .querySelector(".mob__nav-links")
  .addEventListener("click", function (e) {
    e.preventDefault();

    //matching strategy
    if (e.target.closest("a")) {
      e.preventDefault();
      console.log(e.target);
      const id = e.target.getAttribute("href");
      mobNav.classList.remove("visible");
      overflow.classList.remove("visible");
      document.querySelector("body").style.overflowY = "visible";
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

// ///////////////////////////////////////////////////////////////////////////////////////
// //3. Reveal sections
// ///////////////////////////////////////////////////////////////////////////////////////

// const allSections = document.querySelectorAll(".section"); // array of sections with a class of "section"
// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target);
// }; // defining observer function, remove 'section--hidden' class and stop observer

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// }); // observer function and behavour

// allSections.forEach(function (section) {
//   sectionObserver.observe(section); //puting observer on array of sections, what to observe
//   section.classList.add("section--hidden"); //add class 'section--hidden'
// });
