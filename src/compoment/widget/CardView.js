import React, {PureComponent} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  row,
  containerCard,
  card,
  profileImgCard,
  textCard,
  //   colorGray,
} from '../../total/style';

export default class CardView extends PureComponent {
  render() {
    return (
      <View style={containerCard}>
        <View style={card}>
          <TouchableOpacity onPress={this.props.call}>
            <View style={row}>
              <Image
                style={profileImgCard}
                source={{uri: this.props.profileImg}}
              />
              <Text style={textCard}>{this.props.textName}</Text>
            </View>
          </TouchableOpacity>

          {/* <Text style={colorGray}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          </Text> */}
        </View>
      </View>
    );
  }
}
