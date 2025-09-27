
  // Thème toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      console.log("Bouton cliqué");
    });
  }

function toggleTranslation() {
  const iframe = document.querySelector("iframe.goog-te-menu-frame");
  if (iframe) {
    const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    const langButtons = innerDoc.querySelectorAll(".goog-te-menu2-item span.text");
    langButtons.forEach(btn => {
      if (btn.innerText.toLowerCase().includes("english")) {
        btn.click();
      }
    });
  } else {
    alert("Traduction non encore chargée. Réessayez dans quelques secondes.");
  }
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

