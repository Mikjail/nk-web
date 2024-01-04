const EMAILJS_TEMPLATE_ID = "template_0g5u8p4";
const EMAILJS_SERVICE_ID = "service_zd2m69w";
window.onload = async function () {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, message } = Object.fromEntries(formData.entries());
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: name,
      to_name: "Anastasiia",
      from_email: email,
      message: message,
    });

    form.reset();
  };

  await new Promise((r) => setTimeout(r, 300));

  document.getElementById("contact-form").addEventListener("submit", onSubmit);
};
