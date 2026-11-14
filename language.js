(function () {
  const translations = {
    de: {
      pageTitle: 'Vorschaubilder - Kacheln',
      tileGrid: 'Vorschau-Kacheln',
      open: 'offnen',
      githubOpen: 'GitHub offnen',
      preview: 'Vorschau',
      onlineTime: 'OnlineTime',
      githubPreview: 'GitHub Vorschau',
      home: 'Home',
      homeOpen: 'Home offnen',
      switchToEnglish: 'Switch to English',
      switchToGerman: 'Auf Deutsch wechseln',
      switchToLight: 'Zum Hellmodus wechseln',
      switchToDark: 'Zum Darkmode wechseln'
    },
    en: {
      pageTitle: 'Thumbnails - Tiles',
      tileGrid: 'Preview tiles',
      open: 'open',
      githubOpen: 'Open GitHub',
      preview: 'Preview',
      onlineTime: 'OnlineTime',
      githubPreview: 'GitHub preview',
      home: 'Home',
      homeOpen: 'Open home',
      switchToEnglish: 'Switch to English',
      switchToGerman: 'Switch to German',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode'
    }
  };

  function translate(key, language) {
    return translations[language][key] || key;
  }

  function apply(language) {
    if (!translations[language]) return;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      element.textContent = translate(element.dataset.i18n, language);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (element) {
      element.setAttribute('aria-label', translate(element.dataset.i18nAriaLabel, language));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (element) {
      element.alt = translate(element.dataset.i18nAlt, language);
    });
    document.title = translate('pageTitle', language);
  }

  window.Language = {
    apply: apply,
    get: function () {
      return localStorage.getItem('language') || 'de';
    },
    set: function (language) {
      if (!translations[language]) return;
      localStorage.setItem('language', language);
      apply(language);
    },
    translate: translate
  };

  apply(window.Language.get());
})();
