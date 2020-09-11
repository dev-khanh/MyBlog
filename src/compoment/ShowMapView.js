import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView, {Marker, ProviderPropType} from 'react-native-maps';
import flagPinkImg from '../../images/flag-pink.png';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 10.73826689409324;
const LONGITUDE = 106.7181393876672;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;
let id = 0;

class ShowMapView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers:
        // coordinate: {
        //   latitude: 0.0,
        //   longitude: 0.0,
        // },
        // key: 'fooT'),
        [
          {
            coordinate: {
              longitude: 106.7181393876672,
              latitude: 10.73826689409324,
            },
            key: 'DEVK',
          },
        ],
    };

    this.onMapPress = this.onMapPress.bind(this);
  }

  onMapPress(e) {
    // this.setState({
    //   markers: [
    //     ...this.state.markers,
    //     {
    //       coordinate: e.nativeEvent.coordinate,
    //       key: `foo${id++}`,
    //     },
    //   ],
    // });
    // console.log(JSON.stringify(this.state.markers));
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={this.onMapPress}>
          {this.state.markers.map((marker) => (
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
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.setState({markers: []})}
            style={styles.bubble}>
            <Text>Tap to create a marker of random color</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

ShowMapView.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default ShowMapView;
