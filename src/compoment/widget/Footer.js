/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
} from 'react-native';
import {
  footerViewContainer,
  flex,
  flex2,
  footterTextSocialchannel,
  footterImages,
  footerTextInfo,
  row,
  footterTextInfoName,
} from '../../total/style';
export default class Footer extends PureComponent {
  render() {
    return (
      <View style={footerViewContainer}>
        <View style={flex}>
          <Text style={footterTextSocialchannel}>Social channel</Text>
          <TouchableOpacity onPress={() => this.setOnClickLingking()}>
            <Image
              style={footterImages}
              source={{
                uri:
                  'https://icons-for-free.com/iconfiles/png/512/code+collaboration+github+network+round+social+icon-1320086084536018107.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={flex2}>
          <Text style={footerTextInfo}>Infor User</Text>
          <View style={row}>
            <Text style={footterTextInfoName}>Name: </Text>
            <Text style={footterTextInfoName}> - </Text>
            <Text style={[footterTextInfoName, { flex: 2 }]}>
              {this.props.name}
            </Text>
          </View>
          <View style={row}>
            <Text style={footterTextInfoName}>Age: </Text>
            <Text style={footterTextInfoName}> - </Text>
            <Text style={[footterTextInfoName, { flex: 2 }]}>{this.props.ages}</Text>
          </View>
          <View style={row}>
            <Text style={footterTextInfoName}>Jop: </Text>
            <Text style={footterTextInfoName}> - </Text>
            <Text style={[footterTextInfoName, { flex: 2 }]}>
              {this.props.jobs}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  setOnClickLingking = async () => {
    const supported = await Linking.canOpenURL('https://github.com/dev-khanh');
    if (supported) {
      await Linking.openURL('https://github.com/dev-khanh');
    } else {
      Alert.alert(
        `Don't know how to open this URL: ${'https://github.com/dev-khanh'}`,
      );
    }
  };
}
