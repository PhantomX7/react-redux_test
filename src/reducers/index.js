import { combineReducers } from 'redux';
import countriesReducer from './reducer_countries';
import selectedContinentReducer from './reducer_selected_continent';

const rootReducer = combineReducers({
  countries: countriesReducer,
  selectedContinent: selectedContinentReducer
});

export default rootReducer;
