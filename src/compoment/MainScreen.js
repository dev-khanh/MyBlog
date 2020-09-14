/* eslint-disable prettier/prettier */
/* eslint-disable no-bitwise */
import React, {PureComponent} from 'react';
import {
  View,
  Animated,
  Platform,
  Text,
  TextInput,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {hendleShowList} from '../total/libs';
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
  animationImages,
} from '../total/style';
import WidgetSwiper from './widget/WidgetSwiper';
import FlatlistHorizontal from './widget/FlatlistHorizontal';
import FlatListHomePage from './widget/FlatListHomePage';
import Footer from './widget/Footer';
import moment from 'moment';
import NeonLed from './widget/NeonLed';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const {width, height} = Dimensions.get('window');
let arrryas = [];
export default class MainScreen extends PureComponent {
  state = {
    setEnable: true,
    scrollY: new Animated.Value(
      Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
    ),
    search: '',
    hideShowSeach: false,
  };
  componentDidMount() {
    this.props.fetchInitData();
  }
  render() {
    if (this.props.arraysBloc != null) {
      arrryas = hendleShowList(this.props.arraysBloc);
    }
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
    if (this.props.isEditing) {
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
                  if ((offsetY | 0) === 0) {
                    this.setState({hideShowSeach: false});
                  } else {
                    this.setState({hideShowSeach: true});
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
                animationImages(imageOpacity, imageTranslate),
              ]}
              source={{
                uri:
                  'https://www.contec-x.de/site/assets/files/1182/devk-versicherungen-weiss.png',
              }}
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
                placeholder="Search..."
                onChangeText={(search) => this.setState({search})}
                onFocus={() => {
                  this.props.navigation.navigate('Seach');
                }}
              />
            </View>
          ) : (
            <View />
          )}
        </View>
      );
    } else {
      return <ActivityIndicator color={'#fff'} />;
    }
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
          <FlatlistHorizontal arrryas={this.props.arraysBloc} />
          <FlatListHomePage
            eventClickPage={(item) => this.props.setEventClickpage(item, this.props.navigation)}
            arrryas={this.props.arraysBloc}
            onPress={() => this.setOnClickMessge()}
            onClickDelete={() => this.setOnClickDelete()}
          />
          <Footer
            name={this.props.fullname}
            ages={this.props.age}
            jobs={this.props.jop}
          />
          <NeonLed/>
        </View>
      </View>
    );
  }
  // this.props.sendParams({title, index});
  //   this.props.navigation.navigate('Next');
  setOnClickMessge = () => {
    let payload = {
      foodId: Math.random().toString(),
      name: 'Duong Quoc Khanh',
      dateCreated: moment(new Date()).format('DD/MM/YYYY'),
    };
    this.props.fectPostData(payload);
  };
  setOnClickDelete = () => {
    this.props.fecthDeleteData({
      foodId: 'e005458b-6b0b-49e5-8019-049b34902b4e',
    });
  };
}
