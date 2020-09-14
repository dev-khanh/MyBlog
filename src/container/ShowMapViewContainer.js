/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import ShowMapView from '../compoment/ShowMapView';
// let latStartingpoint, lngStartingpoint;
let latDestination = 10.73826689409324, lngDestination = 106.7181393876672;
const connectState = (state) => {
    return {
        markers: state.stateLocalReducer.markers,
    };
};
const connectStateAPI = (dispatch) => {
    return {
        setOnClickFild: () => {
            var url = 'https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=' + latDestination + ' + ' + lngDestination;
            Linking.canOpenURL(url).then(supported => {
                if (!supported) {
                    console.log('Can\'t handle url: ' + url);
                } else {
                    return Linking.openURL(url);
                }
            }).catch(err => console.error('An error occurred', err));
        },
    };
};
const ShowMapViewContainer = connect(connectState, connectStateAPI)(ShowMapView);
export default ShowMapViewContainer;
