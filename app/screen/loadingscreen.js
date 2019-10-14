import React, {Component} from 'react';
import LanguageSelector from '../config/LanguageSelector';
import {
    AsyncStorage,
    StyleSheet,
    Platform,
    Button,
    StatusBar,
    View,
    Text,
    ActivityIndicator,
} from 'react-native';
import Token from '../config/token';
import RNRestart from 'react-native-restart';
import color from '../../assets/color';

export default class LoadingScreen extends Component{
    constructor(){
        super();
        this.lang_selector = new LanguageSelector ();
        this.token = new Token();
    }
    componentDidMount(){
        
        this._bootstrapAsync();
        
        
    }
    //validate the token
    _bootstrapAsync = async () => {
        const userToken = this.token.getToken();
        userToken.then(async(token)=>{
            if(!token){
                console.log("you have not authenticated !")
                this.props.navigation.navigate('Login');
            }else{
                console.log("successfully authenticated")
                this.props.navigation.navigate('App');
            }
        }).catch(console.log)
        
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        // this.props.navigation.navigate(userToken ? 'App' : 'Login');
      };

    render(){
        return(
            <View style = {styles.container}> 
                {/* <ActivityIndicator/>
                <StatusBar barStyle="dark-content" />
                <Text>Hellow LoadingScreen</Text>
                <Button
                    title="Press me"
                    onPress={() => this.props.navigation.navigate('App')}
                    /> */}
                <View><Text></Text></View>
                <View>
                    <Text style={styles.title}>{this.lang_selector.i18n('front_page.title')}</Text>
                </View>
                <View><Text style={styles.sponsor}>Powered By: EchonLabs</Text></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:color.blue
        
    },
    title:{
        fontSize:35,
        color:'white'   
    },
    sponsor:{
        fontSize:15,
        marginBottom:Platform.OS == 'ios'?20:10,
        color:'white'  
    }

})