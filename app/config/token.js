import {AsyncStorage} from 'react-native'

const TOKEN_KEY = 'token';

export default class Token{
    constructor(){}
    setToken=async(token)=>{
        return await AsyncStorage.setItem(TOKEN_KEY,token);
    }
    getToken=async()=>{
        return await AsyncStorage.getItem(TOKEN_KEY);
    }
    removeToken=async()=>{
        return await AsyncStorage.removeItem(TOKEN_KEY);
    }
}