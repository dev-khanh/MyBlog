/* eslint-disable prettier/prettier */
import React, {PureComponent} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {
  MainContainer,
  textView,
  imageView,
  containerViewImages,
  viewContain,
} from '../total/style';
import {splitImages} from '../total/libs';
export default class HomeScreen extends PureComponent {
  componentDidMount() {
    this.props.fetchInitData();
  }
  render() {
    console.log(this.props.isEditing);
    if (this.props.isEditing) {
      return (
        <View style={MainContainer}>
          <FlatList
            data={splitImages(this.props.arraysBloc)}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={this.GetItem.bind(this, item.title, index)}>
                <View style={containerViewImages}>
                  <Image source={{uri: item.arraysImage}} style={imageView} />
                  <Text style={textView}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    } else {
      return <ActivityIndicator color={'#fff'} />;
    }
  }
  FlatListItemSeparator = () => {
    return <View style={viewContain} />;
  };
  GetItem(flower_name, index) {
    this.props.sendParams({flower_name, index});
    this.props.navigation.navigate('Next');
  }
}
