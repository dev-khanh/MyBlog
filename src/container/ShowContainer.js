import {connect} from 'react-redux';
import ShowFlatList from '../compoment/ShowFlatList';
const conncetState = (state) => {
  return {
    arrayParams: state.stateLocalReducer.arrayParams,
    arraysBloc: state.mainReducer.arraysBloc,
  };
};
const ShowContainer = connect(conncetState)(ShowFlatList);
export default ShowContainer;
