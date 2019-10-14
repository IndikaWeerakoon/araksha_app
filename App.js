import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image, 
  ImageBackground
} from 'react-native';
import LanguageSelector from './app/config/LanguageSelector';

import {Header,Left,Right,Icon} from 'native-base';
import MapScreen from './app/screen/mapscreen';
import RouteScreen from './app/screen/routescreen';
import HistoryScreen from './app/screen/historyscreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator , DrawerNavigatorItems} from 'react-navigation-drawer';
import ProfileScreen from './app/screen/profilescreen';
import LoadingScreen from './app/screen/loadingscreen';
import LoginScreen from './app/screen/loginscreen';
import SignUpScreen from './app/screen/signupscreen';

const localizer = new LanguageSelector();

const CustomerDrawerComponent = (props)=>(
  <SafeAreaView style={{flex:1,flexDirection:'column'}}>
  {/* source={require('./assert/bgDrawer2.jpg')} */}
      <ImageBackground source={require('./assets/drawer_bg.jpg')} style={{flex:2,flexDirection:'row',backgroundColor:"#F1305C"}}>
        <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
          <Image source={require('./assets/user.png')} style={{height:60,width:60}}/>
        </View>
        <View style={{flex:5,alignItems:'flex-start',justifyContent:'center'}}>
          <Text style={{fontSize:16,fontWeight:'bold',color:'#D6D6D6'}}>Driver Application</Text>
          <Text style={{color:'#B1B1B1',fontStyle:'italic'}}>Locate Childern</Text>
        </View>
      </ImageBackground >
      <View style={{flex:7}}>
        <ScrollView >
          <DrawerNavigatorItems {...props}/>
        </ScrollView>
      </View>
     
   </SafeAreaView>
);


const AppDrawerNavigator = createDrawerNavigator({
  Profile:{
    screen: ProfileScreen,
    navigationOptions:{
      title:localizer.i18n('component.drawer.profile'),
      drawerIcon:({tintColor})=>(<Icon name='md-person' style={{fontSize:24,color:tintColor}} />)
      }
    },
  Map: {
      screen: MapScreen,
      navigationOptions:{
        title:localizer.i18n('component.drawer.map'),
        drawerIcon:({tintColor})=>(<Icon name='map' style={{fontSize:24,color:tintColor}} />)}
    },
    Route: {
      screen: RouteScreen,
      navigationOptions:{
        title:localizer.i18n('component.drawer.route'),
        drawerIcon:({tintColor})=>(<Icon name='ios-compass' style={{fontSize:24,color:tintColor}} />)}
    },
    History: {
      screen: HistoryScreen,
      navigationOptions:{
        title:localizer.i18n('component.drawer.history'),
        drawerIcon:({tintColor})=>(<Icon name='ios-stopwatch' style={{fontSize:24,color:tintColor}} />)
        }
      },
    Profile:{
      screen: ProfileScreen,
      navigationOptions:{
        title:localizer.i18n('component.drawer.profile'),
        drawerIcon:({tintColor})=>(<Icon name='md-person' style={{fontSize:24,color:tintColor}} />)
        }
      },
    
    },
  
  {
    contentComponent: CustomerDrawerComponent,
    contentOptions: {
      activeTintColor: '#209590',
    },
    defaultNavigationOptions:{
      headerTintColor: '#222222',
      activeTintColor:'#0073DF'
    }
  }

);

const AppSwitchNavigator = createSwitchNavigator({
    Loading: LoadingScreen,
    App: AppDrawerNavigator,
    Login: LoginScreen,
    Signup: SignUpScreen
  },
  {
    initialRouteName: 'Loading',
  }
);


const App =createAppContainer(AppSwitchNavigator);

export default App;
