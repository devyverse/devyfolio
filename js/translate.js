function googleTranslateElementInit() {
      new google.translate.TranslateElement({
          pageLanguage: 'fr',
          includedLanguages: 'en,es,de,it,pt',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      }
