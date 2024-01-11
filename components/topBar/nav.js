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
      <button class="custom-btn primary-btn nav-link" id="contact-btn">Contact</button>
      <img class="mobile-icon" src="/assets/mobile-icon.svg" alt="Menu Icon">
    </div>
  </div>`;
};
