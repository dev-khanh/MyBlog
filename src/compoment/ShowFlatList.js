import React, {PureComponent} from 'react';
import {View, Text, ScrollView} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {htmlContent, scrollView} from '../total/style';
export default class ShowFlatList extends PureComponent {
  render() {
    console.log(this.props.arraysBloc);
    let parasm = this.props.arrayParams;
    let bloc = this.props.arraysBloc;
    return (
      <View>
        <Text>{parasm.flower_name}</Text>
        <ScrollView style={scrollView}>
          <HTMLView
            value={bloc[parasm.index].content}
            stylesheet={htmlContent}
          />
        </ScrollView>
      </View>
    );
  }
}
