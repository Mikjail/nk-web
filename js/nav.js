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
  if (route === "" || route === "#contact") {
    navLinks[0].classList.add("active");
  }
};

window.onload = function () {
  if (window.matchMedia("(max-width: 430px)")) {
    const menuToggleInput = document.querySelector(".menuToggle input");
    const menuToggleLinks = document.querySelectorAll(".menuToggle a");

    menuToggleLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggleInput.click();
      });
    });
  }
};
