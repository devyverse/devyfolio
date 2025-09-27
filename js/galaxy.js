const galaxyCanvas = document.getElementById("background");
if (galaxyCanvas) {
  const galaxyCtx = galaxyCanvas.getContext("2d");
  galaxyCanvas.width = window.innerWidth;
  galaxyCanvas.height = window.innerHeight;

  let galaxyParticles = [];
  for (let i = 0; i < 100; i++) {
    galaxyParticles.push({
      x: Math.random() * galaxyCanvas.width,
      y: Math.random() * galaxyCanvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    });
  }

  function animateGalaxy() {
    galaxyCtx.clearRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);
    galaxyParticles.forEach(p => {
      galaxyCtx.beginPath();
      galaxyCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      galaxyCtx.fillStyle = "#00f7ff";
      galaxyCtx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > galaxyCanvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > galaxyCanvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animateGalaxy);
  }

  animateGalaxy();
}
