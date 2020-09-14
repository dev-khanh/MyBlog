/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ViewIconMapClick, imagesMapIcon, containerMap, map } from '../total/style';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
const LATITUDE = 10.73826689409324;
const LONGITUDE = 106.7181393876672;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

class ShowMapView extends React.Component {
  render() {
    return (
      <View style={containerMap}>
        <MapView
          provider={this.props.provider}
          style={map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          {this.props.markers.map((marker) => (
            <Marker
              title={marker.key}
              image={{
                uri:
                  'https://lh3.googleusercontent.com/PsMoFJDixfeeax560mYNqSdq6YhbXSXcaQNn4W-trqh-0xZ6BI-DxRGrhFO9zzO7yw=s180',
              }}
              key={marker.key}
              coordinate={marker.coordinate}
            />
          ))}
        </MapView>
        <View style={ViewIconMapClick}>
          <TouchableOpacity onPress={() => this.props.setOnClickFild()}>
            <Image style={imagesMapIcon} source={{ uri: 'https://icons.iconarchive.com/icons/iconsmind/outline/512/Car-3-icon.png' }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
ShowMapView.propTypes = {
  provider: ProviderPropType,
};
export default ShowMapView;
