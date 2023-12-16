export const Footer = () => {
  return /*html*/ `
  <div class="footer-content">
    <p class="footer-text">
      Get in touch with me at <strong>anastasiiakiias@gmail.com</strong>
    </p>
    <div class="footer-icons">
  <a href="https://www.linkedin.com/in/anastasiiakiias/" target="_blank">
    <img src="assets/linkedin.svg" alt="LinkedIn Icon" class="icon" />
  </a>
  <a href="https://www.behance.net/anastasiiakiias" target="_blank">
    <img src="assets/behance.svg" alt="Behance Icon" class="icon" />
  </a>
  <a href="https://www.instagram.com/anastasiiakiias/" target="_blank">
    <img src="assets/instagram.svg" alt="Instagram Icon" class="icon" />
  </a>
</div>
  </div>
`;
};

document.getElementById("footer").innerHTML = Footer();
