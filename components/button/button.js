export const Button = ({ text, href, variant, className, target}) => {
  return /*html*/ `
        <a class="custom-btn ${className} ${variant}" href="${href}" target="${target || "_self"}">${text}</a>
    `;
};
