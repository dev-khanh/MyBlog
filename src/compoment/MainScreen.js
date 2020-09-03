/* eslint-disable prettier/prettier */
import React, {PureComponent} from 'react';
import {View, Image, Animated, Platform} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  wrapper,
  swiperContainer,
  viewContainer,
  imageSwiper,
} from '../total/style';
import {hendleShowList} from '../total/libs';
import {
  scrollViewContent,
  fill,
  header,
  backgroundImage,
} from '../total/style';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class MainScreen extends PureComponent {
  state = {
    setEnable: true,
    scrollY: new Animated.Value(Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0),
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
    return (
      <View style={fill}>
        <Animated.ScrollView style={fill} scrollEventThrottle={1}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
            {useNativeDriver: true},
          )}>
          {this._renderScrollViewContent(arrryas)}
        </Animated.ScrollView>
        <Animated.View pointerEvents="none" style={[header(HEADER_MAX_HEIGHT), {transform: [{translateY: headerTranslate}]}]}>
          <Animated.Image
            style={[
              backgroundImage(HEADER_MAX_HEIGHT),
              {
                opacity: imageOpacity,
                transform: [{translateY: imageTranslate}],
              },
            ]}
            source={require('../../images/cat.jpg')}
          />
        </Animated.View>
      </View>
    );
  }
  _renderScrollViewContent(arrryas) {
    return (
      <View style={scrollViewContent(HEADER_MAX_HEIGHT)}>
        <Swiper
          ref={null}
          containerStyle={wrapper}
          scrollEnabled={this.state.setEnable}
          index={0}>
          <View style={swiperContainer}>
            <View style={viewContainer}>
              <Swiper
                autoplay
                index={1}
                onTouchStart={(e) => {
                  this.setState({setEnable: false});
                }}
                onTouchEnd={(e) => {
                  this.setState({setEnable: true});
                }}
                onMomentumScrollEnd={(e) => {
                  this.setState({setEnable: true});
                }}>
                {arrryas.map((d, index) => {
                  return (
                    <Image key={index} style={imageSwiper} source={{uri: d}} />
                  );
                })}
              </Swiper>
            </View>
          </View>
        </Swiper>
      </View>
    );
  }
}
