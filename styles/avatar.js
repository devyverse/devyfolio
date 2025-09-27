// AVATAR - YEUX SUIT SOURIS // 
document.addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".pupil");
  eyes.forEach(pupil => {
    const rect = pupil.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const max = 10;
    pupil.style.transform = `translate(${Math.max(-max, Math.min(x/10, max))}px, ${Math.max(-max, Math.min(y/10, max))}px)`;
  });
});