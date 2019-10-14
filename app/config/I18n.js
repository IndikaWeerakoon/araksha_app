import i18n from 'i18n-js';
import {AsyncStorage} from 'react-native';
// import { reactI18nextModule } from 'react-i18next';

import en from '../../locales/en.json';
import si from '../../locales/si.json';

const  STORAGE_KEY = '@app:language';
// getLang = async() =>await AsyncStorage.getItem(STORAGE_KEY);
i18n.defaultLocale = 'en'
// i18n.locale = 'si';

i18n.fallbacks= true;
i18n.translations = {
    en, si
}

const load_lacale_lange=async()=>{
    return await AsyncStorage.getItem(STORAGE_KEY);
}

load_lacale_lange().then((languageTag)=>{
    i18n.locale=languageTag
}).catch(console.log);

export default i18n;