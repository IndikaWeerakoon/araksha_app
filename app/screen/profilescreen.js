import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Image,
} from 'react-native';
import HeaderMain from '../components/header';
import { Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { interfaceDeclaration } from '@babel/types';
import DetailRaw from '../components/detail_raw';
import LanguageSelector from '../config/LanguageSelector';
import { Button } from 'react-native-elements';
import color from '../../assets/color';
import DetailIncrementRaw from '../components/tp_raw';
import Token from '../config/token';

export default class ProfileScreen extends Component{
    constructor(){
        super();
        this.langs = new LanguageSelector();
        this.state = {
            profile_name:"Indika Weerakoon",
            is_prof_editable:false,
            vehicle_no:"CB-3234",
            license_no:"9877876",
            reg_no:"DRV-123123",
            nic:"9234343434V",
            address : "20/1, Udahamulla, Nugegoda",
            tel_no:["071-2011999","077-2323232"],
            is_buttonDisplay:false,
        
        }
        this.token = new Token();
    }
    _profile_name_handler(){
        if(this.state.is_prof_editable){
            return <TextInput placeholder='Profile name' style={styles.text_input} value={this.state.profile_name} onChangeText={(text)=>{this.setState({profile_name:text})}}/>
        }else{
            return <Text style={styles.profile_name}>{this.state.profile_name}</Text>
        }
    }
    render(){
        return(
           <View style={styles.container}>
                <HeaderMain title = 'Profile' style={{zIndex: 10}}></HeaderMain>
                <ScrollView>
                    <KeyboardAvoidingView behavior="height" enabled>
                        <ScrollView>
                            {/* Profile Image and name */}
                            <View style={styles.profile}>
                                {/* profile image */}
                                <Image style={styles.profile_img} source={require('../../assets/profPic.jpg')}/>
                                {/* <View style={styles.profile_img}>
                                    <Icon name='md-person' style={{color:"#fff",fontSize: 40,}}/>
                                </View> */}
                                {/* profile name */}
                                <View style={{flexDirection:"row",paddingStart:10}}>
                                    <View style={{marginTop:13}}>
                                        <Text style={{fontSize:15,color:'#828282'}}>{this.langs.i18n("screen.profile.prof_name")}</Text>
                                        {this._profile_name_handler()}</View>{/**profile name and inpuuut */}
                                    <TouchableOpacity style={{display:this.state.is_prof_editable?"none":"flex"}} onPress={()=>{this.setState({is_prof_editable:true})}}>
                                        <Icon name="md-create" style={{fontSize:20,padding: 10,color:'#1D6BD6',marginTop:1}}/>
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                            {/* other information */}
                            <View style={styles.driver_dtl}>
                                {/* Vehicle number */}
                                <DetailRaw title={this.langs.i18n("screen.profile.vehicle_no")} value={this.state.vehicle_no} edit_enable={true} onPress={()=>{this.setState({is_buttonDisplay:true})}} onChangeText ={(text)=>{this.setState({vehicle_no:text})}}/>
                                

                                {/* License no */}
                                <DetailRaw title={this.langs.i18n("screen.profile.license_no")} value={this.state.license_no} edit_enable={false} />
                            
                                {/* Registration Number */}
                                <DetailRaw title={this.langs.i18n("screen.profile.reg_no")} value={this.state.reg_no} edit_enable={false} />

                                {/* NIC No */}
                                <DetailRaw title={this.langs.i18n("screen.profile.nic")} value={this.state.nic} edit_enable={false} />

                                {/* Address */}
                                <DetailRaw title={this.langs.i18n("screen.profile.address")} value={this.state.address} edit_enable={true} onChangeText ={(text)=>{this.setState({address:text})}}/>
                                
                                {/* Phone No */}
                                <DetailIncrementRaw title={this.langs.i18n("screen.profile.tel_no")} placeholder={this.langs.i18n("screen.profile.new_tel_no")} tel_no = {this.state.tel_no}/>
                            </View>
                            <View style={[styles.save_btn,{display:this.state.is_buttonDisplay?"flex":"none"}]}>
                                <Button onPress={()=>{this.token.removeToken()}} title="Save"  type="outline" titleStyle={{color:color.blue }} buttonStyle={{width:100,borderWidth:1 }} />
                            </View>
                        </ScrollView>
                        
                    </KeyboardAvoidingView>
                </ScrollView>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    profile:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        margin:25
    },
    text_input:{
       
       borderBottomColor:'#1D6BD6',
       borderBottomWidth:1,
       fontSize:20,
       padding:0
    },
    profile_img:{
        width:80,
        height:80,
        // justifyContent:'center',
        // alignItems:'center',
        borderRadius:50,
        // backgroundColor:"#1D6BD6",
        // color:"#fff"
    },
    profile_name:{
        fontSize:18,
        fontWeight:'bold',
        color:"#545454",
        paddingTop:0
    },
    driver_dtl:{
        flex:4,
        marginHorizontal:18,
        marginTop:5
    },
    detail_topic:{
        flex:2,
        fontWeight:'bold'
    },
    detail_desc:{
        flex:4
    },
    save_btn:{
        flex:1,
        margin:20,
        alignItems:"flex-end"
    },
    
})