import CH from "./ch.js";
import EN from "./en.js";

const EN_KEY = "EN";
const CH_KEY = "CH";
const LOCALE_KEY = "LOCALE";

const capitalizeFirstLetter = (string) => {
    const lowercase = string.toLowerCase();
    return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
};

const selectLocale = () => {
    let selectedLanguage = window.localStorage.getItem(LOCALE_KEY) || CH_KEY;
    if (selectedLanguage === EN_KEY) {
        return EN;
    }
    return CH;
};

const selectLang = (text) => {
    if (!text || typeof text !== "string") {
        return text;
    }

    let selectedLanguage = window.localStorage.getItem(LOCALE_KEY) || CH_KEY;
    if (selectedLanguage === EN_KEY) {
        if (!EN[text]) {
            return text;
        }
        return EN[text];
    }

    if (!CH[text]) {
        // try to map for second time with capitalize text
        const cap = capitalizeFirstLetter(text) || text;
        if (CH[cap]) {
            return CH[cap];
        }
        return text;
    }
    return CH[text];
};

const changeLocale = (lang) => {
    if (!lang && !(lang === EN_KEY || lang === CH_KEY)) {
        window.localStorage.setItem(LOCALE_KEY, CH_KEY);
    } else {
        window.localStorage.setItem(LOCALE_KEY, lang);
    }
    window.location.reload();
};

const locale = selectLocale();

const lang = (text) => {
    return selectLang(text);
};

const selectedLocale = () => {
    return window.localStorage.getItem(LOCALE_KEY) || CH_KEY;
};

export {EN_KEY, CH_KEY, locale, lang, changeLocale, selectedLocale};