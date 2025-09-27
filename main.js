// thème clair/sombre
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

// music bg saloon jazz vintage //

const audioBG = document.getElementById("jazz-bg");
const btnBG = document.getElementById("playPauseBtn");
let musicStarted = false;
document.getElementById("jazz-bg").volume = 0.5; 

// Quand l’utilisateur clique quelque part sur la page
document.body.addEventListener("click", () => {
	if (!musicStarted) {
        	audioBG.play();
        	musicStarted = true;
        	btnBG.style.display = "block"; // montrer le bouton
        	btnBG.textContent = "⏸"; // mettre pause comme premier état
	}
});

/*
// Scroll horizontal avec molette
document.querySelector(".horizontal-wrapper").addEventListener("wheel", (e) => {
  e.preventDefault();
  e.currentTarget.scrollLeft += e.deltaY;
});
*/
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

document.getElementById("languageSwitcher").addEventListener("change", function () {
  const lang = this.value;
  const iframe = document.querySelector("iframe.goog-te-menu-frame");
  if (iframe) {
    const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    const langButtons = innerDoc.querySelectorAll(".goog-te-menu2-item span.text");
    langButtons.forEach(btn => {
      if (btn.innerText.toLowerCase().includes(lang)) {
        btn.click();
      }
    });
  } else {
    alert("Traduction non encore chargée. Réessayez dans quelques secondes.");
  }
});


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



document.location.replace(
  "https://developer.mozilla.org/fr/docs/Web/API/Location.reload",
);

/*AUTO TRANSLATE*/
let lang = window.navigator.languages ? window.navigator.languages[0] : null;
    lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

let shortLang = lang;
if (shortLang.indexOf('-') !== -1)
    shortLang = shortLang.split('-')[0];

if (shortLang.indexOf('_') !== -1)
    shortLang = shortLang.split('_')[0];

console.log(lang, shortLang);