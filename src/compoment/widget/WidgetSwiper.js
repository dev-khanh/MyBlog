import React, {PureComponent} from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  scrollViewContent,
  wrapper,
  swiperContainer,
  viewContainer,
  imageSwiper,
  SwiperContainerSsrooll,
} from '../../total/style';
export default class WidgetSwiper extends PureComponent {
  render() {
    return (
      <View style={scrollViewContent(this.props.HEADER_MAX_HEIGHT)}>
        <Swiper
          style={SwiperContainerSsrooll}
          ref={null}
          containerStyle={wrapper}
          scrollEnabled={this.props.setEnable}
          index={0}>
          <View style={swiperContainer}>
            <View style={viewContainer}>
              <Swiper
                autoplay
                index={1}
                onTouchStart={(e) => {
                  this.props.onTouchStart();
                }}
                onTouchEnd={(e) => {
                  this.props.onTouchEnd();
                }}
                onMomentumScrollEnd={(e) => {
                  this.props.onMomentumScrollEnd();
                }}>
                {this.props.arrryas.map((d, index) => {
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
