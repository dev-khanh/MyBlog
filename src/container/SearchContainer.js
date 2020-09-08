import {connect} from 'react-redux';
import SearchFlatList from '../compoment/SearchFlatList';
import {NEWDATA} from '../action/ActionTypes';
const connectState = (state) => {
  return {
    arraysBloc: state.mainReducer.arraysBloc,
    newData: state.stateLocalReducer.newData,
  };
};
const connectStateAPI = (dispatch) => {
  return {
    searchFilterFunction: (text, arraysBloc) => {
      const newData = arraysBloc.filter((item) => {
        const itemData = `${item.title.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      dispatch({type: NEWDATA, newData: newData});
    },
  };
};
const SearchContainer = connect(connectState, connectStateAPI)(SearchFlatList);
export default SearchContainer;
