import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Icon } from 'native-base';
import color from '../../assets/color';
export default class DetailRaw extends Component{

    constructor(){
        super();
        this.state={

            is_prof_editable:false
        }
    }
    _profile_name_handler(){
        if(this.state.is_prof_editable){
            return <TextInput placeholder='Profile name' style={styles.text_input} value={this.props.value} onChangeText={this.props.onChangeText}/>
        }else{
            return <Text style={{flex:1,color:color.green}}>{this.props.value}</Text>
        }
    }
    _editEnable(is_enable){
        if(is_enable){
                return (<TouchableOpacity style={{display:this.state.is_prof_editable?"none":"flex",flex:1}} onPress={()=>{
                                                                    this.setState({is_prof_editable:true})
                                                                    
                                                                    }}>
                                        <Icon name="md-create" onPress={this.props.onPress} style={{flex:1,fontSize:20,color:color.blue}}/>
                                    </TouchableOpacity>);
              
        }else{
                return(<View style={{flex:1}}></View>) //this line for allignment when no editable
            }
    }

    render(){
        return(
            <View style={{flexDirection:'row',paddingVertical:20,borderBottomColor:'#CDCDCD',borderBottomWidth:1}}> 
                <View style={styles.detail_topic}>
                    <Text style={{fontWeight:"bold",color:'#545454'}}>{this.props.title}</Text>
                </View>
                <View style={styles.detail_desc}>
                    {this._profile_name_handler()}
                </View>

                <View style={{display:this.state.is_prof_editable?"flex":"none",flex:1}}></View>{/** this line for allignment when editable mode */}
                {this._editEnable(this.props.edit_enable)}
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
        flex:10
    },
    text_input:{
        color:"#545454",
        borderBottomColor:color.lineGray,
        borderBottomWidth:1,
        padding:0,
        marginEnd:10
        // borderRadius:5
    }
})