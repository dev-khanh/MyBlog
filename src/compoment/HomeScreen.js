/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { View, Text, FlatList, Image} from 'react-native';
import {
  MainContainer,
  textView,
  imageView,
  containerViewImages,
  viewContain,
} from '../total/style';
import { splitImages } from '../total/libs';
export default class HomeScreen extends PureComponent {
  render() {
    return (
      <View style={MainContainer}>
        <FlatList
          data={splitImages(this.props.arraysBloc)}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item, index }) => (
            <View style={containerViewImages}>
              <Image source={{ uri: item.arraysImage }} style={imageView} />
              <Text
                onPress={this.GetItem.bind(this, item.title, index)}
                style={textView}>
                {item.title}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
  FlatListItemSeparator = () => {
    return <View style={viewContain} />;
  };
  GetItem(flower_name, index) {
    this.props.sendParams({ flower_name, index });
    this.props.navigation.navigate('Next');
  }
}
