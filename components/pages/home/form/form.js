export const Form = () => /*html*/ `
<div class="contact-form">
  <h1>Let's get in touch!</h1>
  <form  method="post">
    <div class="input-group">
        <input type="text" id="name" name="name" placeholder="Name" required />
        <input type="email" id="email" name="email" placeholder="Email" required />
    </div>
    
    <textarea id="message" name="message" placeholder="Message" required >
    </textarea>
    
    <input class="contact-form__button" type="submit" value="Send">
  </form>
</div>
`;