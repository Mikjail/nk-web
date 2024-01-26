import { Form } from "../components/modal/form/form.js";
import { onSubmitEmail } from "./email.js";
import { PopUpCase } from "../components/pop-up/popUpCase.js";
export const dialog = document.getElementById("dialog-form");
const contactButton = document.getElementById("contact-btn");
const closeDialogButton = document.getElementById("close-btn");
const mobileDialog = document.getElementById("mobile-dialog");

export const closeDialog = () => {
  dialog.close();
};

export const initCaseStudyDialog = () => {
  const mobileDialog = document.getElementById("mobile-dialog");
  mobileDialog.innerHTML = PopUpCase();
  const caseStudies = document.querySelectorAll(".case-study");

  caseStudies.forEach((study) => {
    study.addEventListener("click", () => {
      mobileDialog.showModal();
    });
  });
};

initCaseStudyDialog();

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
  const mobileDialogCloseButton = document.getElementById("pop-up__close");

  if (e.target === dialog) {
    dialog.close();
  }
  if (e.target === mobileDialog) {
    mobileDialog.close();
  }
  if (e.target === closeDialogButton) {
    dialog.close();
  }
  if (e.target == mobileDialogCloseButton) {
    mobileDialog.close();
  }
});
