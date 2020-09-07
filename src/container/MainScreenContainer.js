/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import MainScreen from '../compoment/MainScreen';
import { addEventDB, addEventPostUser } from '../action';
const connectState = (state) => {
    return {
        arraysBloc: state.mainReducer.arraysBloc,
        fullname: state.mainReducer.fullname,
        isEditing: state.mainReducer.isEditing,
    };
};
const connectAPI = (dispatch) => {
    return {
        fetchInitData: () => {
            dispatch(addEventDB());
            dispatch(addEventPostUser());
        },
        fetchPostUser: () => {
            dispatch(addEventPostUser());
        },
    };
};
const MainScreenContainer = connect(connectState, connectAPI)(MainScreen);
export default MainScreenContainer;
