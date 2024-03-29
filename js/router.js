import { Home } from "../components/pages/home/home.js";
import { About } from "../components/pages/about/about.js";
import { Resume } from "../components/pages/resume/resume.js";
import { mindMeCase } from "../components/pages/mindMeCase/mindMeCase.js";
import { BeanifestoCase } from "../components/pages/beanifestoCase/beanifesto.js";
import { iTravelCase } from "../components/pages/iTravelCase/itravelcase.js";
import { Footer } from "../components/footer/footer.js";
import { Modal } from "../components/modal/modal.js";
import { onSubmitEmail } from "./email.js";
import { initCaseStudyDialog } from "./dialog.js";

const routes = {
  "/": {
    template: Home(),
    title: "NK - Home",
    description: "This is the home page",
  },
  about: {
    template: About(),
    title: "NK - About",
    description: "This is the about page",
  },
  resume: {
    template: Resume(),
    title: "NK - Resume",
    description: "This is the resume page",
  },
  "mind-me": {
    template: mindMeCase(),
    title: "NK - Resume",
    description: "MindMe - Case Study",
  },
  beanifesto: {
    template: BeanifestoCase(),
    title: "NK - Beanifesto",
    description: "This is the beanifesto page",
  },
  itravel: {
    template: iTravelCase(),
    title: "NK - iTravel",
    description: "This is the iTravel page",
  },
  contact: {
    template: `<div id="contact-form-mobile">${Modal()}</div>`,
    title: "NK - iTravel",
    description: "This is the Contact Form page",
  },
};

const locationHandler = async () => {
  // get the url path, replace hash with empty string
  var location = window.location.hash.replace("#", "");
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
    location = "/";
    // remove # from url
    window.history.replaceState({}, document.title, ".");
  }

  // get the route object from the routes object
  const route = routes[location] || routes["/"];

  // get the html from the template
  const html = route.template;

    // get the content div
    const contentDiv = document.getElementById("content");
  
  //only on desktop
  if (!window.matchMedia("(max-width: 430px)").matches) {
  

  // add the fade class to start the fade-out transition
  contentDiv.classList.add("fade");

  // wait for the transition to finish
  await new Promise((r) => setTimeout(r, 200));

  // footer
  const footer = document.getElementById("footer");

  // wait for the transition to finish
  contentDiv.innerHTML = "";

  // wait for the transition to finish
  footer.innerHTML = "";

  await new Promise((r) => setTimeout(r, 100));

  // set the content of the content div to the html
  contentDiv.innerHTML = html;

  // set the content of the content div to the html
  footer.innerHTML = Footer();

  // add the show class to start the fade-in transition
  contentDiv.classList.add("show");

  // wait for the transition to finish
  await new Promise((r) => setTimeout(r, 200));

  // remove the fade and show classes
  contentDiv.classList.remove("fade", "show");
  } else {
    contentDiv.innerHTML = html;
    initCaseStudyDialog();
  }

  if(location === 'contact') {
    document
    .getElementById("contact-form")
    .addEventListener("submit", onSubmitEmail);
  }
  // set the title of the document to the title of the route
  document.title = route.title;
};
// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();
