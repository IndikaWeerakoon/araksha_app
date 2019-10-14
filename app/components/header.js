import React, {Component} from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet
} from 'react-native';
import {Header, Left, Icon, Body, Right, Title}  from 'native-base'
import color from '../../assets/color';
// import from 'react-native-options-menu'
export default class HeaderMain extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {navigator} = this.props;
        const moreIcon = <Icon name='md-more' style={styles.moreIcon} />
        return(
            <Header style={styles.header} androidStatusBarColor = '#197571'>
                <Left>
                    <Icon name='menu' style={styles.menuIcon} onPress={()=>navigator.toggleDrawer()}/>
                </Left>
                <Body>
                    <Title style={{color:"#fff"}}>{this.props.title}</Title>
                </Body>
                <Right>

                    {moreIcon}
                </Right>
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:color.green,

    },
    menuIcon:{
        color:'#fff',
        marginStart:Platform.OS=='ios'?10:0,
    },
    moreIcon:{
        color:'#fff',
        marginEnd:10
    }
})