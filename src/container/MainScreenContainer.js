/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import {SEND_PARAMS} from '../action/ActionTypes';
import MainScreen from '../compoment/MainScreen';
import {
  addEventDB,
  addEventPostUser,
  addEventgetPostDelete,
  addNameData,
  deleteData,
} from '../action';
const connectState = (state) => {
  return {
    arraysBloc: state.mainReducer.arraysBloc,
    fullname: state.mainReducer.fullname,
    isEditing: state.mainReducer.isEditing,
    age: state.mainReducer.age,
    jop: state.mainReducer.jop,
  };
};
const connectAPI = (dispatch) => {
  return {
    fetchInitData: () => {
      dispatch(addEventDB());
      dispatch(addEventPostUser());
      dispatch(addEventgetPostDelete());
    },
    fectPostData: (data) => {
      dispatch(addNameData(data));
    },
    fecthDeleteData: (data) => {
      dispatch(deleteData(data));
    },
    setEventClickpage: (item, navigation) => {
    //   console.log('print: ' + item.index);
        console.log(item);
      dispatch({type: SEND_PARAMS, arrayParams: item});
      navigation.navigate('Next');
    },
  };
};
const MainScreenContainer = connect(connectState, connectAPI)(MainScreen);
export default MainScreenContainer;
