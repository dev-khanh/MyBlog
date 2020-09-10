/* eslint-disable prettier/prettier */
/* eslint-disable no-bitwise */
import React, {PureComponent} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {fill, viewInput, input, imagesSeach, renderSeparator, searchView, searchViewImages, searchImages, searchViewText, searchViewTextTitle} from '../total/style';
import {searchFlatList} from '../total/libs';
const {width, height} = Dimensions.get('window');
export default class SearchFlatList extends PureComponent {
  state = {
    data: this.props.arraysBloc,
  };
  render() {
    return (
      <View style={fill}>
        <View style={viewInput}>
          <Image
            style={imagesSeach}
            source={{
              uri:
                'https://e7.pngegg.com/pngimages/886/318/png-clipart-computer-icons-edison-state-community-college-google-search-symbol-magnifying-glass-material-logo-google-logo.png',
            }}
          />
          <TextInput
            placeholder="Search..."
            style={input}
            onChangeText={(text) => this.searchFilterFunction(text)}
          />
          <View style={{width: width, height: height}}>
            <FlatList
              data={this.state.data}
              renderItem={({item, index}) => this.renderItem(item, index)}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </View>
      </View>
    );
  }
  renderSeparator = () => {
    return (
      <View style={renderSeparator} />
    );
  };
  renderItem = (item, index) => {
    // console.log(item);
    return (
      <View style={searchView}>
        <TouchableOpacity onPress={() => this.GetItem(item.title, index)}>
          <View style={searchViewImages}>
            <Image
              source={{uri: item.arraysImage}}
              style={searchImages}
            />
            <View style={searchViewText}>
              <Text style={searchViewTextTitle}>{item.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  GetItem(title, index) {
    this.props.sendParams({title, index});
    this.props.navigation.navigate('Next');
  }
  searchFilterFunction = (text) => {
    this.setState({
      data: searchFlatList(text, this.props.arraysBloc),
    });
  };
}
