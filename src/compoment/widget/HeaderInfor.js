import React, {PureComponent} from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  linearGradient,
  viewImagesHeader,
  textSytleHeader,
  imagesHeader,
  textSytleemail,
} from '../../total/style';
export default class HeaderInfor extends PureComponent {
  render() {
    return (
      <View>
        <LinearGradient
          colors={['#ffff00', '#006400', '#2f4f4f', '#7cfc00', '#008000']}
          style={linearGradient}
        />
        <Text style={textSytleHeader}>DEVK</Text>
        <Text style={textSytleemail}>dqkhanh@gmail.com</Text>
        <View style={viewImagesHeader}>
          <Image
            source={{
              uri:
                'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/69301359_1175962439255725_3206605837116112896_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=ruGX68v816YAX_YRhlV&_nc_ht=scontent-hkt1-1.xx&oh=696663a054d4317d3fc825d59c60947b&oe=5F7EBA67',
            }}
            style={imagesHeader}
          />
        </View>
      </View>
    );
  }
}
