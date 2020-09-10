import {connect} from 'react-redux';
import {SEND_PARAMS_URL} from '../action/ActionTypes';
import InforUser from '../compoment/InforUser';
const connectState = (state) => {
  return {
    arrayParamsUrl: state.stateLocalReducer.arrayParamsUrl,
  };
};
const connectStateAPI = (dispatch) => {
  return {
    sendParamsUrl: (data) => {
      dispatch({type: SEND_PARAMS_URL, arrayParamsUrl: data.title});
    },
  };
};
const InforUserContainer = connect(connectState, connectStateAPI)(InforUser);
export default InforUserContainer;
