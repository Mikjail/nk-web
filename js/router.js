import { Home } from "../components/pages/home/home.js";
import { About } from "../components/pages/about/about.js";
import { Resume } from "../components/pages/resume/resume.js";
import { mindMeCase } from "../components/pages/mindMeCase/mindMeCase.js";
import { BeanifestoCase } from "../components/pages/beanifestoCase/beanifesto.js";
import { iTravelCase } from '../components/pages/iTravelCase/itravelcase.js';

const routes = {
  404: {
    template: "/components/404.html",
    title: "404",
    description: "Page not found",
  },
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
  "itravel": {
    template: iTravelCase(),
    title: "NK - iTravel",
    description: "This is the iTravel page",
  },
};

const locationHandler = async () => {
  // get the url path, replace hash with empty string
  var location = window.location.hash.replace("#", "");
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
    location = "/";
  }

  // get the route object from the routes object
  const route = routes[location] || routes["404"];

  // get the html from the template
  const html = route.template;

  // set the content of the content div to the html
  document.getElementById("content").innerHTML = html;
  // set the title of the document to the title of the route
  document.title = route.title;
  // set the description of the document to the description of the route
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();
