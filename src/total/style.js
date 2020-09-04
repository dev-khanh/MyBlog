/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Platform } from 'react-native';
module.exports = {
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },

  imageView: {
    width: '50%',
    height: 100,
    margin: 7,
    borderRadius: 7,
  },

  textView: {
    width: '50%',
    textAlignVertical: 'center',
    padding: 10,
    color: '#000',
  },
  containerViewImages: {
    flex: 1,
    flexDirection: 'row',
  },
  viewContain: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#000',
  },
  htmlContent: {
    // fontWeight: '300',
    color: '#FF3366',
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  imagesIcon: {
    width: 20,
    height: 20,
  },
  viewTiltes: {
    width: width,
    height: height * 0.3,
  },
  imagesSoundView: {
    width: width,
    height: height * 0.3,
  },
  // Slider
  wrapper: {},
  // slide1: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#9DD6EB',
  // },
  // slide2: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#97CAE5',
  // },
  // slide3: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#92BBD9',
  // },
  // text: {
  //   color: '#fff',
  //   fontSize: 30,
  //   fontWeight: 'bold',
  // },
  swiperContainer: {
    flex: 1,
    height: height,
  },
  viewContainer: {
    height: 300,
  },
  imageSwiper: {
    width: width,
    height: height * 0.3,
  },

  // Scroll Animation
  fill: {
    flex: 1,
  },
  header: (HEADER_MAX_HEIGHT) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  }),
  backgroundImage: (HEADER_MAX_HEIGHT) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  }),
  scrollViewContent: (HEADER_MAX_HEIGHT) => ({
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  }),
  // row: {
  //   height: 40,
  //   margin: 16,
  //   backgroundColor: '#D3D3D3',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 28,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  SwiperContainerSsrooll: {
    height: height * 0.37,
  },

  // view Content
  ViewContent: {
    height: height * 0.2,
    backgroundColor: 'red',
  },
  viewInput: {
    width: width,
    height: 50,
    position: 'absolute',
    top: 0,
    // backgroundColor: 'yellow',
  },
  input: {
    fontSize: 24,
    margin: 10,
    width: width * 0.95,
    height: 50,
    backgroundColor: 'white',
  },
  imagesSeach: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 22,
    zIndex: 1,
    right: 20,
  },

  // backgoundImages
  imagesViewContainer: {
    margin: 10,
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
  },
  imagesBackgound: {
    flex: 1,
  },
  viewBackground: {
    marginLeft: 5,
  },
  textBold: {
    fontWeight: 'bold',
  },
  viewTextOverlod: {
    width: width, height: 25, backgroundColor: 'black', position: 'absolute', bottom: 0, opacity: 0.8, alignItems: 'center', justifyContent: 'center',
  },
  textCountter: {
    color: 'white', fontWeight: 'bold', fontSize: 20,
  },
};
