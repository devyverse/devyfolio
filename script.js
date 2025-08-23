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
    const audioBG = document.getElementById("jazz-bg");
    const btnBG = document.getElementById("playPauseBtn");
    let musicStarted = false;
    document.getElementById("jazz-bg").volume = 0.1; 

    // Quand l’utilisateur clique quelque part sur la page
    document.body.addEventListener("click", () => {
      if (!musicStarted) {
        audioBG.play();
        musicStarted = true;
        btnBG.style.display = "block"; // montrer le bouton
        btnBG.textContent = "⏸"; // mettre pause comme premier état
      }
    });

    // Gérer le Play/Pause
    btnBG.addEventListener("click", (e) => {
      e.stopPropagation();// éviter de relancer l’audio avec le clic body 
      if (audioBG.paused) {
        audioBG.play();
        btnBG.textContent = "⏸ ";
      } else {
        audioBG.pause();
        btnBG.textContent = "▶";
      }
    });

// Barre d’espace pour Play/Pause
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault(); // évite le scroll
    if (audioBG.paused) {
      audioBG.play();
      btnBG.textContent = "⏸ ";
    } else {
      audioBG.pause();
      btnBG.textContent = "▶";
    }
  }
});

//Bloquer clic droit
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// Bloquer copier, coller, couper
["copy", "paste", "cut"].forEach(evt => {
  document.addEventListener(evt, (e) => {
    e.preventDefault();
  });
});

//  Bloquer raccourcis clavier (Ctrl+C, Ctrl+V, Ctrl+X)
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && ["c", "v", "x", "u"].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
});

