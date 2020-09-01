import {Platform} from 'react-native';
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
};
