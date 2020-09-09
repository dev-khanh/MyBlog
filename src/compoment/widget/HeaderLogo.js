import React, {PureComponent} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {headerImages} from '../../total/style';
export default class HeaderLogo extends PureComponent {
  render() {
    return (
      <TouchableOpacity onPress={this.props.sendPop}>
        <Image
          style={headerImages}
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/61/61022.png',
          }}
        />
      </TouchableOpacity>
    );
  }
}
