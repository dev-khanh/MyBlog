/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import SvgMessges from './SvgMessges';
import SvgSheare from './SvgSheare';
import {
  viewContainerHomePage,
  imagesBackgound,
  positionHomePage,
  titleHomePage,
  titleHomePage2,
  viewBetween,
  stySvgMess,
  styleTextMesss,
  styleSvgSheare,
  sytleViewContainMess,
} from '../../total/style';
export default class FlatListHomePage extends PureComponent {
  render() {
    return this.props.arrryas.map((item) => {
      console.log(item.id);
      return (
        <View key={item.id} style={viewContainerHomePage}>
          <ImageBackground
            style={imagesBackgound}
            source={{ uri: item.arraysImage }}>
            <View style={positionHomePage(item.id)}>
              <Text style={titleHomePage}> {item.title} </Text>
              <Text style={titleHomePage2}> {item.title} </Text>
              <View style={viewBetween}>
                <View style={sytleViewContainMess}>
                  <SvgMessges style={stySvgMess} />
                  <TouchableOpacity onPress={this.props.onClickDelete}>
                    <Text style={styleTextMesss}> 0 </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.props.onPress}>
                  <SvgSheare style={styleSvgSheare} />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    });
  }
}
