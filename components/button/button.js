export const Button = ({ text, href, variant, className }) => {
  return /*html*/ `
        <a class="custom-btn ${className} ${variant}" href="${href}">${text}</a>
    `;
};
