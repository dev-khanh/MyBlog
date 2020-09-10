import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {styleView, noenA, noenB} from '../../total/style';
export default class NeonLed extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isBlinking: false,
    };
    this.blinkingInterval = false;
  }
  componentWillUnmount() {
    clearInterval(this.blinkingInterval);
    this.blinkingInterval = false;
  }

  componentDidMount() {
    if (!this.blinkingInterval) {
      this.blinkingInterval = setInterval(() => {
        this.setState({
          isBlinking: !this.state.isBlinking,
        });
      }, 800);
    }
  }
  render() {
    return (
      <View style={styleView}>
        <Text style={this.state.isBlinking ? noenA : noenB}>DEVK</Text>
      </View>
    );
  }
}
