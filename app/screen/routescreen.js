import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import HeaderMain from '../components/header';
export default class RouteScreen extends Component{
    render(){
        return(
            <View>
                <HeaderMain title="Routes" navigator={this.props.navigation}/>
                <Text>Hellow RouteScreen</Text>
            </View>
        );
    }
}