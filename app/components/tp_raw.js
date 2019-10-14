import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Platform
} from 'react-native';
import { Icon } from 'native-base';
import color from '../../assets/color';
import Token from '../config/token';

export default class DetailIncrementRaw extends Component{
    constructor(){
        super();
        this.state={
            tp_no_input:[]
        }
        this.token = new Token();
    }

    _tp_text_input(){
        return(<TextInput dataDetectorTypes="phoneNumber" keyboardType="numeric" placeholder={this.props.placeholder} style={styles.text_input}/>);
    }
    _on_add_press(){
        this.setState(prevState=>({tp_no_input:[...prevState.tp_no_input,this._tp_text_input()]}))
    }

    render(){
        return(
            <View style={{flexDirection:'row',paddingVertical:20,borderBottomColor:'#CDCDCD',borderBottomWidth:1}}> 
                <View style={styles.detail_topic}>
                     <Text style={{fontWeight:"bold",color:'#545454'}}>{this.props.title}</Text>
                </View>
                <View style={styles.detail_desc}>
                    {
                        this.props.tel_no.map((item)=>{
                            return (<View><Text style={{color:color.green,paddingTop:3}}>{item}</Text></View>)
                        })
                    }
                    {
                        this.state.tp_no_input.map((item)=>{
                            return (item)
                        })
                    }
                </View>

                <TouchableOpacity style={{flex:1}} onPress={()=>this._on_add_press()}>
                    <Icon name="md-add" style={{flex:1,fontSize:20,color:color.blue}}/>
                </TouchableOpacity>{/** this line for allignment when editable mode */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    detail_topic:{
        flex:5,
        fontWeight:'bold'
    },
    detail_desc:{
        flex:10,
        flexDirection:"column"
    },
    text_input:{
        borderBottomColor:color.blue,
        borderBottomWidth:1,
        marginEnd:10,
        color:'#545454',
        padding:0,
        marginTop:Platform.OS=="ios"?2:0,
    },
})