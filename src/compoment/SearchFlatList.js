/* eslint-disable prettier/prettier */
/* eslint-disable no-bitwise */
import React, {PureComponent} from 'react';
import {View, Text, TextInput, Image, FlatList, Dimensions} from 'react-native';
import {fill, viewInput, input, imagesSeach} from '../total/style';
const {width, height} = Dimensions.get('window');
export default class SearchFlatList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.setState({
      data: this.props.arraysBloc,
    });
  }
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
              renderItem={({item}) => this.renderItem(item)}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={this.renderSeparator}
              //   ListHeaderComponent={this.renderHeader}
            />
          </View>
        </View>
      </View>
    );
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };
  searchFilterFunction = (text) => {
    this.props.searchFilterFunction(text, this.props.arraysBloc);
    // const newData = this.props.arraysBloc.filter((item) => {
    //   const itemData = `${item.title.toUpperCase()}`;
    //   const textData = text.toUpperCase();
    //   return itemData.indexOf(textData) > -1;
    // });
    this.setState({
      data: this.props.newData,
    });
  };
  renderItem = (item) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };
}
