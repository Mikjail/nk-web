import { MsgSent } from "../components/modal/msg-sent/msgSent";
import { dialog } from "./dialog";

const EMAILJS_TEMPLATE_ID = "template_1td30hg";
const EMAILJS_SERVICE_ID = "service_01wo9w7";
const EMAILJS_PUBLIC_KEY = "TzZMlShXkbi54loJf";

export const onSubmitEmail = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const { name, email, message } = Object.fromEntries(formData.entries());
  emailjs
    .send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        to_name: "Anastasiia",
        from_email: email,
        message: message,
      },
      EMAILJS_PUBLIC_KEY
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

  form.reset();
  document.getElementById("modal-content").innerHTML = MsgSent();

  document
    .querySelector(".msge-sent__btn")
    .addEventListener("click", function () {
      dialog.close();
    });
};

document
  .getElementById("contact-form")
  .addEventListener("submit", onSubmitEmail);
