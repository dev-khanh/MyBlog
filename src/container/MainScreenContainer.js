/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import MainScreen from '../compoment/MainScreen';
import { addEventDB, addEventPostUser, addEventgetPostDelete, addNameData, deleteData } from '../action';
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
    };
};
const MainScreenContainer = connect(connectState, connectAPI)(MainScreen);
export default MainScreenContainer;
