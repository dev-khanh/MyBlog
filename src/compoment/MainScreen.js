/* eslint-disable prettier/prettier */
/* eslint-disable no-bitwise */
import React, { PureComponent } from 'react';
import {
  View,
  Animated,
  Platform,
  Text,
  TextInput,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { hendleShowList } from '../total/libs';
import {
  fill,
  header,
  backgroundImage,
  bar,
  title,
  viewInput,
  input,
  imagesSeach,
  scrollViewContent,
} from '../total/style';
import WidgetSwiper from './widget/WidgetSwiper';
import FlatlistHorizontal from './widget/FlatlistHorizontal';
import SvgMessges from './widget/SvgMessges';
import SvgSheare from './widget/SvgSheare';
import FlatListHomePage from './widget/FlatListHomePage';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const { width, height } = Dimensions.get('window');
export default class MainScreen extends PureComponent {
  state = {
    setEnable: true,
    scrollY: new Animated.Value(Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0),
    search: '',
    hideShowSeach: false,
  };
  componentDidMount() {
    this.props.fetchInitData();
  }
  render() {
    let arrryas = hendleShowList(this.props.arraysBloc);
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });
    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp',
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });
    return (
      <View style={fill}>
        <Animated.ScrollView
          style={fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            {
              useNativeDriver: true,
              listener: (event) => {
                const offsetY = event.nativeEvent.contentOffset.y;
                // console.log(offsetY | 0);
                if (
                  (offsetY | 0) === 136 ||
                  (offsetY | 0) === 135 ||
                  (offsetY | 0) === 134
                ) {
                  this.setState({ hideShowSeach: true });
                } else if ((offsetY | 0) === 0) {
                  this.setState({ hideShowSeach: false });
                }
              },
            },
          )}>
          {this._renderScrollViewContent(arrryas)}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            header(HEADER_MAX_HEIGHT),
            { transform: [{ translateY: headerTranslate }] },
          ]}>
          <Animated.Image
            style={[
              backgroundImage(HEADER_MAX_HEIGHT),
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={require('../../images/cat.jpg')}
          />
        </Animated.View>
        <Animated.View
          style={[
            bar,
            {
              transform: [{ scale: titleScale }, { translateY: titleTranslate }],
            },
          ]}>
          <Text style={title}>DEVK</Text>
        </Animated.View>
        {this.state.hideShowSeach === false ? (
          <View style={viewInput}>
            <Image
              style={imagesSeach}
              source={{
                uri:
                  'https://e7.pngegg.com/pngimages/886/318/png-clipart-computer-icons-edison-state-community-college-google-search-symbol-magnifying-glass-material-logo-google-logo.png',
              }}
            />
            <TextInput
              style={input}
              onChangeText={(search) => this.setState({ search })}
            />
          </View>
        ) : (
            <View />
          )}
      </View>
    );
  }
  _renderScrollViewContent(arrryas) {
    return (
      <View style={scrollViewContent(HEADER_MAX_HEIGHT)}>
        <WidgetSwiper
          arrryas={arrryas}
          setEnable={this.state.setEnable}
          onTouchStart={() => this.setState({ setEnable: false })}
          onTouchEnd={() => this.setState({ setEnable: true })}
          onMomentumScrollEnd={() => this.setState({ setEnable: true })}
        />
        <View>
          <FlatlistHorizontal arrryas={this.props.arraysBloc} />
          <FlatListHomePage arrryas={this.props.arraysBloc} />
        </View>
      </View >
    );
  }
}
