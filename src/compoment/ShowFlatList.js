/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { View, Image, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { htmlContent, scrollView, viewTiltes, imagesSoundView } from '../total/style';
export default class ShowFlatList extends PureComponent {
  render() {
    let parasm = this.props.arrayParams;
    let bloc = this.props.arraysBloc;
    return (
      <View>
        <View style={viewTiltes}>
          <Image style={imagesSoundView} source={{ uri: bloc[parasm.index].arraysImage }} />
        </View>
        <ScrollView style={scrollView}>
          <HTMLView
            value={bloc[parasm.index].content}
            stylesheet={htmlContent}
          />
        </ScrollView>
      </View >
    );
  }
}
