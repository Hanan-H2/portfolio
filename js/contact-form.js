(() => {
  const form = document.querySelector("#contact_form");
  const sendButton = document.querySelector("#send_message");
  const status = document.querySelector("#contact_form_status");

  if (!form || !sendButton || !status) {
    return;
  }

  sendButton.addEventListener("click", () => {
    if (!form.reportValidity()) {
      return;
    }

    const name = form.elements.namedItem("name").value.trim();
    const email = form.elements.namedItem("email").value.trim();
    const phone = form.elements.namedItem("phone").value.trim();
    const message = form.elements.namedItem("message").value.trim();
    const subject = `Portfolio contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const mailto = `mailto:hananhussein2601@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    form.reset();
    status.textContent =
      "Your email app should open with a draft. Send it there to deliver your message. The form has been cleared.";
    status.hidden = false;
  });
})();
