import React, {PureComponent} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  row,
  containerCardPDF,
  cardPDF,
  profileImgCardPDF,
  textCardPDF,
  colorGrayPDF,
} from '../../total/style';
export default class CardViewFlatList extends PureComponent {
  render() {
    return (
      <View style={containerCardPDF}>
        <View style={cardPDF}>
          <TouchableOpacity onPress={this.props.rendPDF}>
            <View style={row}>
              <Image
                style={profileImgCardPDF}
                source={{
                  uri:
                    'https://www.topcv.vn/images/cv/screenshots/thumbs/en/mau-cv-default.png',
                }}
              />
              <View>
                <Text style={textCardPDF}>Curriculum vitae</Text>
                <Text style={colorGrayPDF}>Developer Mobile</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
