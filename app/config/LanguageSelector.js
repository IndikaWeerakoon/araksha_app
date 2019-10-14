import i18n from './I18n';
import { AsyncStorage } from 'react-native';
// import Realm from 'realm';

const Local = {
    name: 'Local',
    properties:{
        type:'string'
    }
}

const  STORAGE_KEY = '@app:lang';
// const realm = Realm.open({ schema : [Local]});

export default class LanguageSelector {
    
    constructor(){
    }
    setLocales =async(languageTag) =>{
        await AsyncStorage.setItem(STORAGE_KEY,languageTag);
    }

    setLocalToI18n = () =>{
        // let local = realm.objects('Local')
        // console.log(local)
    }

    i18n = (key,value=null)=>{
        const resultString=i18n.t(key,value);
        return resultString;
    }
}
