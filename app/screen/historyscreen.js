import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import HeaderMain from '../components/header';
import { Button } from 'native-base';
import LanguageSelector from '../config/LanguageSelector';

const localize = new LanguageSelector();

export default class HistoryScreen extends Component{
    
    render(){
        return(

            <View>            
                <HeaderMain title="Driver History"  navigator = {this.props.navigation}/>
                <Text>Hellow HistoryScreen</Text>
                <Button onPress={()=>localize.setLocal('si')} >
                    <Text>Click Me!</Text>
                </Button>
            </View>
        );
    }
}