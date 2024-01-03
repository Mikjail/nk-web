window.onload = async function () {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, message } = Object.fromEntries(formData.entries());
    console.log(name, email, message);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        to_name: "Anastasiia",
        from_email: email,
        message: message,
      }
    );

    form.reset();
  };

  await new Promise((r) => setTimeout(r, 300));

  document.getElementById("contact-form").addEventListener("submit", onSubmit);
};
