import {connect} from 'react-redux';
import ShowPDF from '../compoment/ShowPDF';

const connectState = (state) => {
  return {
    arrayParamsUrl: state.stateLocalReducer.arrayParamsUrl,
  };
};
const ShowPDFContainer = connect(connectState)(ShowPDF);
export default ShowPDFContainer;
