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
                'https://i0.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9-1.jpg?fit=624%2C563&ssl=1',
            }}
            style={imagesHeader}
          />
        </View>
      </View>
    );
  }
}
