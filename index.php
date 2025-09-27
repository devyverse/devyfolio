<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta description="Bienvenue saloon Dévy">
  <meta http-equiv="refresh" content="30">
  <title>Portfolio Dévy</title>
  <link rel="stylesheet"  href="style.css" />
  

</head>
<body>
  <canvas id="background"></canvas>
  <canvas id="smoke-bg"></canvas>
  <header>
    <nav>
      <h1>Dévy</h1>
      <ul>
        <li><a href="#about">À propos</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button id="theme-toggle">🌙</button>
      <select class="google_translate_element">
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="es">Español</option>
          <option value="it">Italiano</option>
      </select>
      <div class="google_translate_element" style="opacity: 0.25;"></div>
<script type="text/javascript">
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'fr',
      includedLanguages: 'en,es,de,it,pt',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    </nav>
    <section class="hero">
      <h2>Développeur Web Créatif</h2>
      <p>Je transforme des idées en expériences digitales.</p>
      <a href="#about" class="btn">En savoir plus</a>
    </section>
  </header>

  <section id="about" class="about">
    <h2>À propos de moi</h2>
    <p>Passionné par le web, je crée des interfaces modernes et interactives.</p>
    <div class="skills">
      <div><span>HTML</span><div class="bar html"></div></div>
      <div><span>CSS</span><div class="bar css"></div></div>
      <div><span>JavaScript</span><div class="bar js"></div></div>
    </div>
  </section>

  <section id="projects" class="projects">
    <h2>Mes projets</h2>
    <div class="project-grid">
      <div class="card">
        <h3>Portfolio Design</h3>
        <p>Un site élégant avec animations CSS.</p>
      </div>
      <div class="card">
        <h3>Application météo</h3>
        <p>Application JavaScript connectée à une API météo.</p>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <h2>Contact</h2>
    <form>
      <input type="text" placeholder="Votre nom" required />
      <input type="email" placeholder="Votre email" required />
      <textarea placeholder="Votre message" required></textarea>
      <button type="submit">Envoyer</button>
    </form>
  </section>

  <footer>
    <p>© 2025 Dévy. Tous droits réservés.</p>
  </footer>


  <script src="main.js"></script>
  <script src="js/animation.js"></script>

  <!--<script type="text/javascript">
      document.write("ERROR : Ce site est temporairement désactivé pour des raisons de maintenance ... ")
      document.write("Veuillez réssayer ultérieurement.")
  </script>-->
  <noscript>
    Votre navigateur ne prends pas en charge ou a désactivité JavaScript
  </noscript>
</body>
</html>
