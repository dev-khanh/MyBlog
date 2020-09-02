/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import MainScreen from '../compoment/MainScreen';
import { addEventDB } from '../action';
const connectState = (state) => {
    return {
        arraysBloc: state.mainReducer.arraysBloc,
    };
};
const connectAPI = (dispatch) => {
    return {
        fetchInitData: () => {
            dispatch(addEventDB());
        },
    };
};
const MainScreenContainer = connect(connectState, connectAPI)(MainScreen);
export default MainScreenContainer;
