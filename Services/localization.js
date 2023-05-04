import { QRL } from 'qwik';

// Define your translations
const TRANSLATIONS = {
  en: {
    greeting: 'Hello!',
    goodbye: 'Goodbye!'
  },
  es: {
    greeting: '¡Hola!',
    goodbye: '¡Adiós!'
  },
  fr: {
    greeting: 'Bonjour!',
    goodbye: 'Au revoir!'
  }
};

// Get the user's language preference (use browser settings if available, otherwise default to 'en')
const USER_LANG = navigator.language.split('-')[0] || 'en';

const LocalizationService = {
  // Get a translation for the given key in the user's language
  getTranslation(key) {
    const language = TRANSLATIONS[USER_LANG];
    return language && language[key] ? language[key] : key;
  },
  
  // Set the user's language preference (use cookies or local storage)
  setLanguage(lang) {
    // TODO: implement cookie or local storage logic to store the user's language preference
  }
};

export default LocalizationService;
