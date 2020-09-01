import React, {PureComponent} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {
  MainContainer,
  textView,
  imageView,
  containerViewImages,
  viewContain,
} from '../total/style';
export default class HomeScreen extends PureComponent {
  componentDidMount() {
    this.props.fetchInitData();
  }
  render() {
    // console.log(this.props.arraysBloc);
    this.props.arraysBloc.map((data) => {
      var fields = data.content.split('class="titleImage" src="');
      var street = fields[1];
      var getImage = street.split('" id="apiImage"');
      var arraysImage = getImage[0];
      Object.assign(data, {arraysImage: arraysImage});
    });
    // Array.prototype.inArray = function (comparer) {
    //   for (var i = 0; i < this.length; i++) {
    //     if (comparer(this[i])) {
    //       return true;
    //     }
    //   }
    //   return false;
    // };
    // Array.prototype.pushIfNotExist = function (element, comparer) {
    //   if (!this.inArray(comparer)) {
    //     this.push(element);
    //   }
    // };

    // var array = [{name: 'tom', text: 'tasty'}];
    // var element = {name: 'tom', text: 'tasty'};
    // array.pushIfNotExist(element, function (e) {
    //   return e.name === element.name && e.text === element.text;
    // });
    return (
      <View style={MainContainer}>
        <FlatList
          data={this.props.arraysBloc}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item, index}) => (
            <View style={containerViewImages}>
              <Image source={{uri: item.arraysImage}} style={imageView} />
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
    this.props.sendParams({flower_name, index});
    this.props.navigation.navigate('Next');
  }
}
