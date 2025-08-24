// thème clair/sombre
document.getElementById('theme-toggle').addEventListener('click', () => {
document.body.classList.toggle('light');
});

// music bg saloon jazz vintage //

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

