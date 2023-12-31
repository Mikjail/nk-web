export const Form = () => /*html*/ `
<div class="contact-form" id="contact">
  <h1>Let's get in touch!</h1>
  <form  method="post">
    <div class="input-group">
        <input type="text" id="name" name="name" placeholder="Name" required />
        <input type="email" id="email" name="email" placeholder="Email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
    </div>
    
    <textarea id="message" name="message" placeholder="Your message here..." required></textarea>
    
    <input class="contact-form__button" type="submit" value="Send">
  </form>
</div>
`;
