const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.innerText = "Yayyy! 💖 You just made me the happiest 😍";
});

noBtn.addEventListener("click", () => {
  response.innerText = "It’s okay 🙈 I still like you a lot 💕";
});
