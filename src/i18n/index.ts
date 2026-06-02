import en from './en';
import ru from './ru';
import uz from './uz';
import type { Language, Translations } from './types';

export type { Language, Translations };

const translations: Record<Language, Translations> = { en, uz, ru };

export function getTranslations(lang: Language): Translations {
  return translations[lang] ?? translations.en;
}

export { en, uz, ru };
