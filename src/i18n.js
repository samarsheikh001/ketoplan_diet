import { createI18n } from "vue-i18n";
import { languages, defaultLocale } from "../locales/index.js";

const messages = Object.assign(languages);

const i18n = createI18n({
  locale: defaultLocale, // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
});

export default i18n;