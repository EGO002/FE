// Keep original logout logic but handle missing element
const logoutElement = document.getElementById('logoutBtn') || document.querySelector('.logout');
if (logoutElement) {
  logoutElement.onclick = function() {
    window.location.href = "login.html";
  };
}

const chatArea = document.querySelector(".chat-area");
const input = document.querySelector(".chat-input input");
const sendBtn = document.querySelector(".send-btn");

if (!chatArea || !input || !sendBtn) {
  console.warn("chat-script: required elements missing", { chatArea, input, sendBtn });
} else {
  sendBtn.addEventListener("click", () => {
    const text = input.value.trim();

    if (text !== "") {
      console.log("user typed:", text);
      
      //To create message elements inside the handler
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message");

      const avatar = document.createElement("span");
      avatar.classList.add("avatar");
      avatar.textContent = "🧑";

      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      // Using textContent on child nodes instead of innerHTML for safety
      const p = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = "You:";
      p.appendChild(strong);
      p.appendChild(document.createTextNode(" " + text));

      const small = document.createElement("small");
      small.textContent = "now";

      bubble.appendChild(p);
      bubble.appendChild(small);

      messageDiv.appendChild(avatar);
      messageDiv.appendChild(bubble);

      chatArea.appendChild(messageDiv);

      input.value = "";
      chatArea.scrollTop = chatArea.scrollHeight;
    }
  });
}