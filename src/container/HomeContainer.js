/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import HomeScreen from '../compoment/HomeScreen';
// import {addEventDB} from '../action';
import { SEND_PARAMS } from '../action/ActionTypes';
const connectState = (state) => {
  return {
    arraysBloc: state.mainReducer.arraysBloc,
  };
};
const connectAPI = (dispatch) => {
  return {
    // fetchInitData: () => {
    //   dispatch(addEventDB());
    // },
    sendParams: (data) => {
      dispatch({ type: SEND_PARAMS, arrayParams: data });
    },
  };
};

const HomeContainer = connect(connectState, connectAPI)(HomeScreen);
export default HomeContainer;
