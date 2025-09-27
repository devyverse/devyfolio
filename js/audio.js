document.addEventListener("DOMContentLoaded", () => {
  const audioBG = document.getElementById("jazz-bg");
  const btnBG = document.getElementById("playPauseBtn");
  let musicStarted = false;

  if (audioBG) {
    audioBG.volume = 0; // volume initial à 0

    // Démarrage automatique au premier clic sur la page
    document.body.addEventListener("click", () => {
      if (!musicStarted) {
        audioBG.play();
        musicStarted = true;

        // Fade-in progressif
        const fadeIn = setInterval(() => {
          if (audioBG.volume < 0.5) {
            audioBG.volume = Math.min(audioBG.volume + 0.01, 0.5);
          } else {
            clearInterval(fadeIn);
          }
        }, 100);

        if (btnBG) {
          btnBG.style.display = "block";
          btnBG.textContent = "⏸";
        }
      }
    });

    // Bouton Play/Pause
    if (btnBG) {
      btnBG.addEventListener("click", (e) => {
        e.stopPropagation(); // évite de relancer via body
        if (audioBG.paused) {
          audioBG.play();
          btnBG.textContent = "⏸";
        } else {
          audioBG.pause();
          btnBG.textContent = "▶";
        }
      });
    }

    // Barre d’espace pour Play/Pause
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        if (audioBG.paused) {
          audioBG.play();
          if (btnBG) btnBG.textContent = "⏸";
        } else {
          audioBG.pause();
          if (btnBG) btnBG.textContent = "▶";
        }
      }
    });
  }
});
