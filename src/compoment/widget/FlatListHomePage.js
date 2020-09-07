/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { ImageBackground, View, Text } from 'react-native';
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
      return (
        <View key={item.id} style={viewContainerHomePage}>
          <ImageBackground
            style={imagesBackgound}
            source={{ uri: item.arraysImage }}>
            <View style={positionHomePage}>
              <Text style={titleHomePage}> {item.title} </Text>
              <Text style={titleHomePage2}> {item.title} </Text>
              <View style={viewBetween}>
                <View style={sytleViewContainMess}>
                  <SvgMessges style={stySvgMess} />
                  <Text style={styleTextMesss}> 0 </Text>
                </View>
                <SvgSheare style={styleSvgSheare} />
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    });
  }
}
