import { Form } from "../components/modal/form/form.js";
import { onSubmitEmail } from "./email.js";
const contactButton = document.getElementById("contact-btn");
export const dialog = document.getElementById("dialog-form");
const closeDialogButton = document.getElementById("close-btn");
const mobileDialog = document.getElementById("mobile-dialog");
const mobileDialogCloseButton = document.getElementById("pop-up__close");

export const closeDialog = () => {
  dialog.close();
};

contactButton.addEventListener("click", async () => {
  dialog.showModal();
  document.getElementById("modal-content").innerHTML = Form();
  document
    .getElementById("contact-form")
    .addEventListener("submit", onSubmitEmail);
  closeDialogButton.addEventListener("click", () => {
    dialog.close();
  });
});

document.addEventListener("click", (e) => {
  if (e.target === dialog) {
    dialog.close();
  }
  if(e.target === mobileDialog) {
    mobileDialog.close();
  }
});

document.addEventListener("click", (e) => {
  if (e.target === closeDialogButton) {
    dialog.close();
  }
  if(e.target === mobileDialogCloseButton) {
    mobileDialog.close();
  }
});
