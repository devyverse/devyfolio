
  const audioBG = document.getElementById("jazz-bg");
  const btnBG = document.getElementById("playPauseBtn");
  let musicStarted = false;

  if (audioBG) {
    audioBG.volume = 0;
    audioBG.loop = true;


    document.body.addEventListener("click", () => {
      if (!musicStarted) {
        audioBG.volume = 0.08;
        audioBG.play();
        musicStarted = true;

        const fadeIn = setInterval(() => {
          if (audioBG.volume < 0.08) {
            audioBG.volume = Math.min(audioBG.volume + 0.005, 0.08);
          } else {
            clearInterval(fadeIn);
          }
        }, 150);

        /*if (btnBG) {
          btnBG.style.display = "block";
          btnBG.textContent = "⏸";
        }*/
      }
    });

    if (btnBG) {
      btnBG.addEventListener("click", (e) => {
        e.stopPropagation();
        if (audioBG.paused) {
          audioBG.volume = 0.08;
          audioBG.play();
          btnBG.textContent = "⏸";
        } else {
          audioBG.pause();
          btnBG.textContent = "▶";
        }
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        if (audioBG.paused) {
          audioBG.volume = 0.08;
          audioBG.play();
          if (btnBG) btnBG.textContent = "⏸";
        } else {
          audioBG.pause();
          if (btnBG) btnBG.textContent = "▶";
        }
      }
    });
  }
