let progress = 0;

const heart = document.getElementById("heart");
const progressBar = document.getElementById("progress");
const flowers = document.getElementById("flowers");
const musicButton = document.getElementById("musicButton");
const audio = new Audio("https://files.catbox.moe/s2mfzv.mp3"); // puedes cambiar el link por tu mp3

heart.addEventListener("click", () => {
  if (progress < 100) {
    progress += 10;
    progressBar.style.height = progress + "%";
    heart.style.transform = "scale(1.1) rotate(-45deg)";
    setTimeout(() => {
      heart.style.transform = "scale(1) rotate(-45deg)";
    }, 150);
  }
  if (progress >= 100) {
    flowers.classList.remove("hidden");
    musicButton.classList.remove("hidden");
  }
});

musicButton.addEventListener("click", () => {
  audio.play();
});
