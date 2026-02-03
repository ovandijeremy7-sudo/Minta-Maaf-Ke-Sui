document.getElementById("surpriseBtn").addEventListener("click", function() {
  const surprise = document.getElementById("surprise");
  surprise.classList.toggle("hidden");
});

// Animasi hati jatuh
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000); // hapus setelah animasi selesai
}

setInterval(createHeart, 1200); // bikin hati baru tiap 1.2 detik