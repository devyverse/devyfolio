// thème clair/sombre
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// animation bg particules 
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = '#00f7ff';
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();

// music bg saloon jazz vintage //
//
const audio = document.getElementById("jazz-bg");
    const btn = document.getElementById("playPauseBtn");
    let musicStarted = false;

    // Quand l’utilisateur clique quelque part sur la page
    document.body.addEventListener("click", () => {
      if (!musicStarted) {
        audio.play();
        musicStarted = true;
        btn.style.display = "block"; // montrer le bouton
        btn.textContent = "⏸"; // mettre pause comme premier état
      }
    });

    // Gérer le Play/Pause
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // éviter de relancer l’audio avec le clic body
      if (audio.paused) {
        audio.play();
        btn.textContent = "⏸";
      } else {
        audio.pause();
        btn.textContent = "▶";
      }
    });
