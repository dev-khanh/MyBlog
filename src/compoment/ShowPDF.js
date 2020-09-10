import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {container} from '../total/style';
export default class ShowPDF extends PureComponent {
  render() {
    return (
      <View style={container}>
        <WebView
          bounces={false}
          scrollEnabled={false}
          source={{
            uri: this.props.arrayParamsUrl,
          }}
        />
      </View>
    );
  }
}
