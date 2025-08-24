const smokeCanvas = document.getElementById("smoke-bg");
const smokeCtx = smokeCanvas.getContext("2d");
smokeCanvas.width = window.innerWidth;
smokeCanvas.height = window.innerHeight;

let smokeParticles = [];

for (let i = 0; i < 50; i++) {
  smokeParticles.push({
    x: Math.random() * smokeCanvas.width,
    y: Math.random() * smokeCanvas.height,
    r: Math.random() * 60 + 20,
    opacity: Math.random() * 0.2 + 0.1,
    dx: (Math.random() - 0.5) * 0.3,
    dy: Math.random() * -0.2 - 0.1
  });
}

function drawSmoke() {
  smokeCtx.clearRect(0, 0, smokeCanvas.width, smokeCanvas.height);
  smokeParticles.forEach(p => {
    smokeCtx.beginPath();
    smokeCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    smokeCtx.fillStyle = `rgba(200, 200, 200, ${p.opacity})`;
    smokeCtx.shadowColor = "rgba(255,255,255,0.1)";
    smokeCtx.shadowBlur = 20;
    smokeCtx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.y < -100) {
      p.y = smokeCanvas.height + 50;
      p.x = Math.random() * smokeCanvas.width;
    }
  });

  requestAnimationFrame(drawSmoke);
}

drawSmoke();

