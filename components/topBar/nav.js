export const Nav = () => {
  return /*html*/ `
    <div class="navbar">
    <div class="logo">
      <a href="/#">
        <img src="assets/logo.png" alt="Your Logo" />
      </a>
    </div>
    <div class="middle">
      <a class="nav-link" href="#">Home</a>
      <a class="nav-link" href="#about">About</a>
      <a class="nav-link" href="/assets/anastasiia-kiias-cv.pdf" target="_blank">Resume</a>
    </div>
    <div class="right">
      <a class="primary-btn nav-link" href="#contact">Contact</a>
    </div>
  </div>`;
};

document.getElementById("nav").innerHTML = Nav();
