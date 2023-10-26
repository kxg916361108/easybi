import { InitOptions } from 'i18next';
import { map, upperCase } from 'lodash';
import enUS from './languages/en-us.json';
import esES from './languages/es-es.json';
import frFR from './languages/fr-fr.json';
import jaJP from './languages/ja-jp.json';
import ptBR from './languages/pt-br.json';
import ruRU from './languages/ru-ru.json';
import zhCN from './languages/zh-cn.json';

const SupportedLocales ={
    English: 'en',
    Français: 'fr',
    简体中文: 'zh',
    日本語: 'ja',
    Português: 'pt',
    Español: 'es',
    Русский: 'ru',
}

export const languageSelectOptions = map(SupportedLocales, (value, key) => ({
    label: `${key} - ${upperCase(value.split('-')[0])}`, //得出 简体中文-ZH 字符串
    key: value,
}));

// Returns i18next options
export const getInitOptions = () => {
    return {
        supportedLngs: Object.values(SupportedLocales),
        resources: {
            en: { translation: enUS },
            fr: { translation: frFR },
            zh: { translation: zhCN },
            ja: { translation: jaJP },
            pt: { translation: ptBR },
            es: { translation: esES },
            ru: { translation: ruRU },
        },
        fallbackLng: ['zh'],
        detection: {
            order: ['cookie'],
            caches: ['cookie'], // cache user language on
        },
        interpolation: {
            escapeValue: false, // XSS safety provided by React
        },
        missingKeyHandler: (_lngs, _ns, key) =>
            // eslint-disable-next-line no-console
            console.error(`i18next: key not found "${key}"`),
        saveMissing: true, // Required for missing key handler
    };
};
