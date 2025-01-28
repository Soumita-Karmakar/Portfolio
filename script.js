// For Menu Icon
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Automatic Typping Effect

const typed = new Typed(".typedText", {
  strings: ["Frontend Developer", "Web Developer", "Backend Developer"],
  typeSpeed: 80,
  backspeed: 80,
  backDelay: 1200,
  loop: true,
});

// Send Email Function
function validateInputs() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("All fields are required!");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

function sendEmail() {
  if (!validateInputs()) return;

  const sendButton = document.getElementById("sendBtn");
  sendButton.disabled = true;
  sendButton.textContent = "Sending...";

  let params = {
    from_name: document.getElementById("name").value,
    to_name: "Soumita",
    from_email: document.getElementById("email").value,
    // to_email: "soumitakarmakar81@gmail.com",
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    reply_to: document.getElementById("email").value,
  };

  const serviceID = "service_0ex1fri";
  const templateID = "template_b646ou7";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    //   console.log(res);
      alert("Your Message Sent Successfullty!");
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to send message. Please try again later.");
    })
    .finally(() => {
      sendButton.disabled = false; 
      sendButton.innerHTML = "Send <i class='bx bxs-send' ></i>";
    });
}
