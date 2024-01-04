const EMAILJS_TEMPLATE_ID = "template_1td30hg";
const EMAILJS_SERVICE_ID = "service_01wo9w7";
const EMAILJS_PUBLIC_KEY = "TzZMlShXkbi54loJf";
window.onload = async function () {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, message } = Object.fromEntries(formData.entries());
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        to_name: "Anastasiia",
        from_email: email,
        message: message,
      },
      EMAILJS_PUBLIC_KEY
    );

    form.reset();
  };

  await new Promise((r) => setTimeout(r, 300));

  document.getElementById("contact-form").addEventListener("submit", onSubmit);
};
