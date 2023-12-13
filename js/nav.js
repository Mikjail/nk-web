window.onload = function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const initialRoute = window.location.hash;
  // when route first init
  activeRoute(navLinks, initialRoute);

  // when route changes
  window.addEventListener("hashchange", function () {
    const currentRoute = window.location.hash;
    activeRoute(navLinks, currentRoute);
  });
};

const activeRoute = (navLinks, route) => {
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === route) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  if (route === "") {
    navLinks[0].classList.add("active");
  }
};
