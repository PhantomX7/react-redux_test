import {CONTINENT_SELECTED} from '../actions/index';

export default function(state = 'All',action){
  switch(action.type){
    case CONTINENT_SELECTED:
      return action.payload;
  }

  return state;
}
