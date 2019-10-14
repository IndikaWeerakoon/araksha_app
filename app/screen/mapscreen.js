import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import HeaderMain from '../components/header';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const{width,height} = Dimensions.get('window');
const WIDTH = width;
const HEIGHT = height;

export default class MapScreen extends Component{
    constructor(){
        super();
        this.state = {
            region:{
                latitude: 6.889363,
                longitude:  79.905140,
                latitudeDelta: 0.10,
                longitudeDelta: 0.08,
            },
            markers:[],
        }
        this.onRegionChange = this.onRegionChange.bind(this);
        this.handleMarker = this.handleMarker.bind(this);
    }
    
    handleMarker(e){
        console.log(e)
        // this.setState(
        //     {markers:[
        //          ...this.state.markers,
        //         {
        //             coordinate:event.nativeEvent.coordinate,
        //         }
        //     ]}
        // )
    }

    onRegionChange(region) {
        this.setState({ region });
        
      }

    render(){
        return(
            

            <View >
                <HeaderMain title="Maps"  navigator={this.props.navigation} />
                <View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={this.state.region}
                        onPress={this.handleMarker}
                    >
                        {this.state.markers.map((marker)=>{
                            <Marker {...marker}/>
                        })}
                    </MapView>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      height: HEIGHT,
      width: WIDTH,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    }
});