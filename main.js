document.addEventListener("DOMContentLoaded", () => {
  // Thème toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      console.log("Bouton cliqué");
    });
  }

  // Music
  const audioBG = document.getElementById("jazz-bg");
  const btnBG = document.getElementById("playPauseBtn");
  let musicStarted = false;

  if (audioBG) {
    audioBG.volume = 0.5;

    document.body.addEventListener("click", () => {
      if (!musicStarted) {
        audioBG.play();
        musicStarted = true;
        if (btnBG) {
          btnBG.style.display = "block";
          btnBG.textContent = "⏸";
        }
      }
    });

    if (btnBG) {
      btnBG.addEventListener("click", (e) => {
        e.stopPropagation();
        if (audioBG.paused) {
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
          audioBG.play();
          if (btnBG) btnBG.textContent = "⏸";
        } else {
          audioBG.pause();
          if (btnBG) btnBG.textContent = "▶";
        }
      }
    });
  }

  // Traduction
  const langSwitcher = document.getElementById("languageSwitcher");
  if (langSwitcher) {
    langSwitcher.addEventListener("change", function () {
      const lang = this.value;
      const iframe = document.querySelector("iframe.goog-te-menu-frame");
      if (iframe) {
        const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        const langButtons = innerDoc.querySelectorAll(".goog-te-menu2-item span.text");
        langButtons.forEach((btn) => {
          if (btn.innerText.toLowerCase().includes(lang)) {
            btn.click();
          }
        });
      } else {
        alert("Traduction non encore chargée. Réessayez dans quelques secondes.");
      }
    });
  }

  // Scroll horizontal
  /*
  const horizontalWrapper = document.querySelector(".horizontal-wrapper");
  if (horizontalWrapper) {
    horizontalWrapper.addEventListener("wheel", (e) => {
      e.preventDefault();
      horizontalWrapper.scrollLeft += e.deltaY;
    });
  }
  */

  // Sécurité
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  ["copy", "paste", "cut"].forEach((evt) =>
    document.addEventListener(evt, (e) => e.preventDefault())
  );
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && ["c", "v", "x", "u"].includes(e.key.toLowerCase())) {
      e.preventDefault();
    }
  });

  // Langue navigateur
  let lang = navigator.languages ? navigator.languages[0] : navigator.language;
  let shortLang = lang.split(/[-_]/)[0];
  console.log(lang, shortLang);
});
