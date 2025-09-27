// animation smoke bg 

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

// animation : particule galaxy stars
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


// Particule effect //
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
