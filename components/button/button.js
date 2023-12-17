export const Button = ({ text, href, variant }) => {
  return /*html*/ `
        <a class="custom-btn ${variant}" href="${href}">${text}</a>
    `;
};
