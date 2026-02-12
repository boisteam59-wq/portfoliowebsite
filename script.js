const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusText.innerText = "Sending message...";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();

    if (response.ok) {
      statusText.innerText = "Message sent successfully!";
      form.reset();
    } else {
      statusText.innerText = data.error || "Something went wrong!";
    }
  } catch (error) {
    statusText.innerText = "Server not connected!";
  }
});