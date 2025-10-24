// third party
import { combineReducers } from 'redux';

// project imports
import snackbarReducer from '../../styles/snackbar';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  snackbar: snackbarReducer
});

export default reducer;
