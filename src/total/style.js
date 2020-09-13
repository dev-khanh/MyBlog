/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Platform } from 'react-native';
module.exports = {
  container: {
    flex: 1,
    paddingTop: 10,
  },
  marginTop: {
    marginTop: height * 0.15,
  },
  marginTopHeight: {
    marginTop: height * 0.002,
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  flex2: {
    flex: 2,
  },
  FullView: {
    width: width,
  },
  textRed: {
    color: 'red',
  },
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
  colorGray: {
    color: 'gray',
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
  animationImages: (imageOpacity, imageTranslate) => ({
    opacity: imageOpacity,
    transform: [{ translateY: imageTranslate }],
    width: '100%',
    height: '60%',
    marginTop: '20%',
    alignItems: 'center',
    backgroundColor: '#607d8b',
  }),
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
    backgroundColor: '#607d8b',
  },
  header: (HEADER_MAX_HEIGHT) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
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
    // backgroundColor: 'red',
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
    width: width,
    height: 25,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCountter: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },

  // FlatListHomePage
  viewContainerHomePage: {
    width: width * 0.96,
    height: 400,
    margin: 10,
  },
  positionHomePage: {
    position: 'absolute',
    bottom: 0,
    width: width * 0.96,
    height: height * 0.17,
    backgroundColor: '#263238',
  },
  titleHomePage: {
    color: 'white',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  titleHomePage2: {
    color: 'white',
    marginLeft: 10,
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
  },
  viewBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stySvgMess: {
    marginLeft: 10,
    marginTop: 5,
  },
  styleTextMesss: {
    color: '#f4ff81',
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  styleSvgSheare: {
    marginRight: 10,
    marginTop: 35,
  },
  sytleViewContainMess: {
    flexDirection: 'row',
    marginTop: 30,
  },

  //  Footer
  footerViewContainer: {
    width: width,
    height: height * 0.16,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  footterTextSocialchannel: {
    color: 'white',
    margin: 5,
  },
  footterImages: {
    marginTop: 20,
    marginLeft: 20,
    width: 70,
    height: 70,
  },
  footerTextInfo: {
    color: 'white',
    margin: 5,
    alignItems: 'center',
  },
  footterTextInfoName: {
    color: 'white',
    margin: 5,
    flex: 1,
  },
  //style option
  StyleOptionScreen: {
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerImages: {
    margin: 10,
    width: 35,
    height: 35,
  },
  renderSeparator: {
    height: 1,
    width: '95%',
    backgroundColor: '#CED0CE',
    // marginLeft: '14%',
    margin: 10,
    alignItems: 'center',
  },
  //Search Flatlist
  searchView: {
    width: '95%',
    marginLeft: 10,
  },
  searchViewImages: {
    flexDirection: 'row',
    margin: 10,
    marginLeft: 0,
  },
  searchImages: {
    width: 90,
    height: 90,
  },
  searchViewText: {
    backgroundColor: '#f4ff81',
    width: '79%',
  },
  searchViewTextTitle: {
    marginLeft: 10,
    marginTop: 10,
  },

  // NEON
  styleView: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
  },
  noenA: {
    // position: 'absolute',
    // top: 10,
    left: 220,
    // transform: 'translate(50%,-50%)',
    transform: [
      { perspective: 900 },
      { translateX: -Dimensions.get('window').width * 0.2 },
      { rotateY: '0deg' },
    ],
    textTransform: 'uppercase',
    fontFamily: 'verdana',
    fontSize: 36,
    fontWeight: '700',
    marginLeft: 10,
    color: '#B6FF00',
    // textShadow:
    //   '1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)',
    // textShadow:'0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF',
    // textShadow:'0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF',
    //from
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 30,
    textShadowColor: '#B6FF00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 40,
    textShadowColor: '#B6FF00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 70,
    textShadowColor: '#B6FF00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 80,
    textShadowColor: '#B6FF00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 100,
    textShadowColor: '#B6FF00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 150,

    //   textShadow:
    //     '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #B6FF00, 0 0 70px #B6FF00, 0 0 80px #B6FF00, 0 0 100px #B6FF00, 0 0 150px #B6FF00',
    //   textShadow:
    //     '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #B6FF00, 0 0 35px #B6FF00, 0 0 40px #B6FF00, 0 0 50px #B6FF00, 0 0 75px #B6FF00',
  },
  noenB: {
    // position: 'absolute',
    // top: 10,
    left: 220,
    // transform: 'translate(50%,-50%)',
    transform: [
      { perspective: 900 },
      { translateX: -Dimensions.get('window').width * 0.2 },
      { rotateY: '0deg' },
    ],
    textTransform: 'uppercase',
    fontFamily: 'verdana',
    fontSize: 36,
    fontWeight: '700',
    marginLeft: 10,
    color: '#B6FF00',

    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
    textShadowColor: '#B6FF00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
    textShadowColor: '#B6FF00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 35,
    textShadowColor: '#B6FF00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 40,
    textShadowColor: '#B6FF00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 50,
    textShadowColor: '#B6FF00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 75,
  },

  // HeaderInfor
  linearGradient: {
    width: width,
    height: 100,
    backgroundColor: 'rgba(255, 0, 255, 1.5)',
    transform: [{ perspective: 10 }, { translateX: width }, { rotateY: '2deg' }],
  },
  viewImagesHeader: {
    position: 'absolute',
    right: 60,
    top: 110,
    width: 90,
    height: 90,
    borderRadius: 180,
    elevation: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  textSytleHeader: {
    position: 'absolute',
    top: 0,
    margin: 10,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  imagesHeader: {
    width: 90,
    height: 90,
    borderRadius: 90,
    borderWidth: 2,
  },
  textSytleemail: {
    position: 'absolute',
    top: 40,
    margin: 10,
    fontSize: 25,
    color: 'white',
  },

  // CardView
  containerCard: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  card: {
    height: 50,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    padding: 10,
  },
  profileImgCard: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 5,
  },
  textCard: {
    fontWeight: 'bold', fontSize: 18, marginTop: 2,
  },

  //CardView PDF
  containerCardPDF: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  cardPDF: {
    height: 140,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    padding: 10,
  },
  profileImgCardPDF: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginRight: 5,
  },
  textCardPDF: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 15,
  },
  colorGrayPDF: {
    color: 'gray',
    marginTop: 8,
    fontSize: 26,
    marginLeft: 2,
  },

  // SHOW MAP VIEW
  ViewIconMapClick: {
    position: 'absolute', bottom: 10, right: 10, width: 60, height: 60, borderRadius: 180, alignItems: 'center', justifyContent: 'center',
  },
  imagesMapIcon: {
    width: 50, height: 50,
  },
  containerMap: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  //CARD LIST
  textCardList: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 15,
  },
  colorGrayPDFCardList: {
    color: 'gray',
    marginTop: 8,
    fontSize: 22,
    marginLeft: 2,
  },
  containerCardPDFCardList: {
    width: width * 0.964,
    justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  containerViewCardList: {
    width: width * 0.66, alignItems: 'flex-end',
  },
  contaienrViewButtonCardList: {
    backgroundColor: '#689f38', width: 100, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 5,
  },
  containerViewTextCardList: {
    color: 'white', fontWeight: 'bold', fontSize: 18,
  },
};
