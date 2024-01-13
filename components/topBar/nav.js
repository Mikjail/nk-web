export const Nav = () => {
  return /*html*/ `
    <nav class="navbar">
      <div class="logo">
        <a href="/#">
          <img src="assets/logo.png" alt="Your Logo" />
        </a>
      </div>
      <ul class="middle" id="menu">
        <li>
          <a class="nav-link" href="#">
            Home
          </a>
        </li>
        <li>
          <a class="nav-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a class="nav-link" href="/assets/anastasiia-kiias-cv.pdf" target="_blank">
            Resume
          </a>
        </li>
      </ul>
      <div class="right">
        <button class="custom-btn primary-btn nav-link" id="contact-btn">Contact</button>
      </div>
    </nav>
    <!-- Mobile -->
    <nav class="navbar-xs">
      <div class="logo">
        <a href="/#">
          <img src="assets/logo.png" alt="Your Logo" />
        </a>
      </div>
      <div class="menuToggle">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
        <ul class="menuItem" id="menu">
          <li>
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a class="nav-link" href="/assets/anastasiia-kiias-cv.pdf" target="_blank">
              Resume
            </a>
          </li>
      </ul>
    </div>

    </nav>
    
    `;
};
