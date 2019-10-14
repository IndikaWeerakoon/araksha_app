import React, {Component} from 'react';
import {
    AsyncStorage,
    KeyboardAvoidingView,
    StyleSheet,
    Button,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';
import LanguageSelector from '../config/LanguageSelector';
import { CheckBox } from 'react-native-elements';
import RNRestart from 'react-native-restart';
import Token from '../config/token';
import color from '../../assets/color';

const APP_LANG = '@app:language';

export default class LoginScreen extends Component{
    constructor(){
        super();
        this.state = {
            username:'',
            lang:['si','en','ta']
        };
        this.lang_sel = new LanguageSelector();
        this.token = new Token();
        this._language_restart.bind(this);
    }
    _setToken= async()=>{
        await AsyncStorage.setItem('userToken','hello');  
        this.props.navigation.navigate('App')
    }
    _language_button_select=async()=>{
        return await AsyncStorage.getItem(APP_LANG);
    }
    _setLocales =async(languageTag) =>{
        await AsyncStorage.setItem(APP_LANG,languageTag);
    }
    _getAllItemTags=async()=>{
        await AsyncStorage.getAllKeys()
    }
    _showItemTags =()=>{
        this._setLocales('si').then(
           ()=>{
                this._language_button_select().then(
                    (keys)=>{
                        console.log(keys);
                    }
                )
           } 
        )
        
    }
    _language_restart(languageTag){
        let lanTags = ['si','en','ta'];
        this._setLocales(languageTag).then(
            ()=>{
                this._language_button_select()
                    .then((langTag)=>{
                        console.log(langTag)
                        let langs = lanTags;
                        langs.splice(langs.findIndex((lang_tag)=>{return lang_tag == langTag}),1);
                        this.setState({
                            lang:langs
                        });
                RNRestart.Restart()}
        )
        });
    }
// langs.findIndex((lang_tag)=>{return lang_tag == langTag})
    componentDidMount(){
        this._language_button_select()
            .then((langTag)=>{
                console.log(langTag)
                let langs = this.state.lang;
                langs.splice(langs.findIndex((lang_tag)=>{return lang_tag == langTag}),1);
                this.setState({
                    lang:langs
                });
                
        })
    }

    render(){
       

        return(
            <View style = {styles.container}>
                <KeyboardAvoidingView style={styles.logging_container} behavior="height" enabled>
                    {/* Email */}
                    <View style={styles.text_box}>
                        <Icon name='md-person' style={{fontSize:22,color:'#DFDEDD',padding:5}} />
                        <TextInput
                            placeholder = {this.lang_sel.i18n('auth.login.email')}
                            placeholderTextColor= "#DFDEDD"
                            returnKeyType = 'next'
                            onSubmitEditing = {()=>this.passwordInput.focus()}
                            style={{paddingLeft:5,color:"#FFF",fontSize:16,flex:1}}
                        />
                    </View>
                    {/* Password */}
                    <View style={styles.text_box}>
                        <Icon name='md-lock' style={{fontSize:22,color:'#DFDEDD',padding:5}} />
                        <TextInput
                                placeholder = {this.lang_sel.i18n('auth.login.password')}
                                placeholderTextColor= "#DFDEDD"
                                returnKeyType = 'go'
                                ref ={(input)=>{this.passwordInput=input}}
                                secureTextEntry
                                style={{paddingLeft:7,color:"#FFF",fontSize:16,flex:1}}
                            />
                    </View>
                    {/* Check Boxx */}
                    <View style={styles.check_box}>
                        <CheckBox
                            title={this.lang_sel.i18n('auth.login.keep_login')}
                            containerStyle = {{backgroundColor:'#1D6BD6',borderWidth:0 ,paddingStart:0,marginStart:3,paddingBottom:0}}
                            textStyle = {{color:'#fff',fontWeight: 'normal'}}
                            checkedColor='#fff'
                            checked={this.state.checked}
                            onPress = {()=>{this.setState({checked:!this.state.checked})}}
                            />
                    </View>
                    {/* Login button */}
                    <View style={[styles.text_box,{backgroundColor:"#EC7835",borderRadius:5,height:50}]}>
                        <TouchableOpacity  style={styles.login_button} onPress={()=>{
                            this.token.setToken("token")
                            this.props.navigation.navigate('App')
                        }}>
                            <Text style={{color:'#FFF',textAlign:"center",fontSize:15}}>{this.lang_sel.i18n('auth.login.login')}</Text>
                        </TouchableOpacity>
                    </View>
                    {/* forget password */}
                    <View>
                        <TouchableOpacity>
                            <Text style={{textAlign:'center',marginTop:20,color:'#FFF'}}>{this.lang_sel.i18n('auth.login.password_forget')}</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>

                {/* Language selection */}
                <View style = {styles.lang_select_container}>
                    {
                        this.state.lang.map(item=>(
                            <TouchableOpacity key = {item} onPress={()=>{this._language_restart(item)}}>
                                <Text style={{color:'#FFF',paddingEnd:10}}>{this.lang_sel.i18n('auth.login.lang.'+item)}</Text>
                            </TouchableOpacity>
                        ))
                    }
                    
                    {/* <TouchableOpacity>
                        <Text style={{color:'#FFF',paddingEnd:10}}>{this.lang_sel.i18n('auth.login.lang.ta')}</Text>
                    </TouchableOpacity> */}
                    
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'stretch',
        backgroundColor:color.blue
    },
    logging_container:{
        flex:1,
        justifyContent:'center',
        marginHorizontal:15,

        // alignItems:'stretch'
    },
    text_box:{
        flexDirection:'row',
        borderColor:'#fff',
        backgroundColor:'#70A2E8',
        alignItems:'center',
        padding:10,
        marginTop:12,
        height:60,
        borderRadius:3
        

    },
    check_box:{
        
    },
    login_button:{
        flex:1,
        textAlign:"center"
        // flexDirection:'row'
        // backgroundColor:"#F5743B",
        // flexWrap:'wrap'
    },
    lang_select_container:{
        flexDirection:'row-reverse',
        marginHorizontal:20,
        marginBottom:30
    }
    
})
