import { combineReducers } from 'redux';
import countriesReducer from './reducer_countries';
import { reducer as formReducer } from 'redux-form';
import selectedContinentReducer from './reducer_selected_continent';

const rootReducer = combineReducers({
  countries: countriesReducer,
  selectedContinent: selectedContinentReducer,
  form: formReducer
});

export default rootReducer;
