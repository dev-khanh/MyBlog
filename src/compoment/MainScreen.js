/* eslint-disable no-bitwise */
/* eslint-disable prettier/prettier */
import React, {PureComponent} from 'react';
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
import {hendleShowList} from '../total/libs';
import {
  fill,
  header,
  backgroundImage,
  bar,
  title,
  ViewContent,
  viewInput,
  input,
  imagesSeach,
  scrollViewContent,
} from '../total/style';
import WidgetSwiper from './widget/WidgetSwiper';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const {width, height} = Dimensions.get('window');
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
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
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
                  this.setState({hideShowSeach: true});
                } else if ((offsetY | 0) === 0) {
                  this.setState({hideShowSeach: false});
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
            {transform: [{translateY: headerTranslate}]},
          ]}>
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
        <Animated.View
          style={[
            bar,
            {
              transform: [{scale: titleScale}, {translateY: titleTranslate}],
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
              onChangeText={(search) => this.setState({search})}
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
          onTouchStart={() => this.setState({setEnable: false})}
          onTouchEnd={() => this.setState({setEnable: true})}
          onMomentumScrollEnd={() => this.setState({setEnable: true})}
        />
        <View>
          <View style={ViewContent}>
            <View
              style={{
                margin: 10,
                flex: 1,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 15,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 15,
                overflow: 'hidden',

                // // border: 1 'solid',
                // // padding: '10px',
                // // box-shadow: '0px -10px 5px #888',

                // backgroundColor: 'transparent',
                // borderColor: 'black',
                // borderWidth: 10,
                // overflow: 'hidden',
                // shadowColor: 'black',
                // shadowRadius: 10,
                // shadowOpacity: 1,
                flex: 1,
                borderTopWidth: 15,
                borderRadius: 2,
                borderColor: '#778899',
                borderBottomWidth: 0,
                shadowColor: '#00000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 1,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 10,
                margin: 10,
              }}>
              <ImageBackground
                style={{flex: 1}}
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                }}>
                <View style={{marginLeft: 5}}>
                  <Text>ssssssssssssssss</Text>
                  <Text style={{fontWeight: 'bold'}}>ssssssssssssssss</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View>
            <Text>sssssssssss</Text>
            <Text>sssssssssss</Text>
            <Text>sssssssssss</Text>
            <Text>sssssssssss</Text>
            <Text>sssssssssss</Text>
            <Text>sssssssssss</Text>
            <Text>sssssssssss</Text>
            <Text>sssssssssss</Text>
            <Text>sssssssssss</Text>
            <Text>sssssssssss</Text>
            <Text>sssssssssss</Text>
            <Text>sssssssssss</Text>
            <Text>sssssssssss</Text>
          </View>
        </View>
      </View>
    );
  }
}
