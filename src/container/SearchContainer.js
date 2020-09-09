import {connect} from 'react-redux';
import SearchFlatList from '../compoment/SearchFlatList';
import {SEND_PARAMS} from '../action/ActionTypes';
const connectState = (state) => {
  return {
    arraysBloc: state.mainReducer.arraysBloc,
    newData: state.stateLocalReducer.newData,
  };
};
const connectStateAPI = (dispatch) => {
  return {
    sendParams: (data) => {
      dispatch({type: SEND_PARAMS, arrayParams: data});
    },
  };
};
const SearchContainer = connect(connectState, connectStateAPI)(SearchFlatList);
export default SearchContainer;
