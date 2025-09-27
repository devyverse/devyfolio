document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");

  async function loadLanguage(lang) {
    try {
      const res = await fetch(`assets/lang/${lang}.json`);
      const data = await res.json();

      Object.entries(data).forEach(([key, value]) => {
        const el = document.querySelector(`[data-i18n="${key}"]`);
        if (el) el.textContent = value;
      });

      localStorage.setItem("lang", lang);
    } catch (err) {
      console.error("Erreur de chargement de la langue :", err);
    }
  }

  const savedLang = localStorage.getItem("lang") || "fr";
  loadLanguage(savedLang);

  langToggle.addEventListener("click", () => {
    const currentLang = localStorage.getItem("lang") || "fr";
    const newLang = currentLang === "fr" ? "en" : "fr";
    loadLanguage(newLang);
  });
});
