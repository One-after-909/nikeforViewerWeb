import { type Config } from 'sveltekit-i18n';
import i18n from 'sveltekit-i18n';
import lang from './lang.json';

  const config: Config = {
    initLocale: 'cs',
    translations: {
      cs: { lang },
      uk: { lang }
    },
    loaders: [
      {
        locale: 'cs',
        key: '',
        loader: async () => (await import('./cs/cs.json')).default
      },
      {
        locale: 'uk',
        key: '',
        loader: async () => (await import('./uk/uk.json')).default
      }
    ]
  };

  export const defaultLocale = 'cs';

  export const { t, locale, locales, loading, addTranslations, loadTranslations, translations, setRoute, setLocale } = new i18n(config);

  // Translations logs
  loading.subscribe(async ($loading) => {
    if ($loading) {
      console.log('Loading translations...');

      await loading.toPromise();
      console.log('Updated translations', translations.get());
    }
});