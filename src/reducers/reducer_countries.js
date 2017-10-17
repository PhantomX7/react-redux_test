 let country=[
    {name:'Indonesia',capital:'Jakarta',continent:'Asia'},
    {name:'Malaysia',capital:'Kuala Lumpur',continent:'Asia'},
    {name:'Egypt',capital:'Cairo',continent:'Africa'},
    {name:'England',capital:'London',continent:'Europe'},
    {name:'South Africa',capital:'Capetown',continent:'Africa'},
    {name:'France',capital:'Paris',continent:'Europe'},
    {name:'Australia',capital:'Canberra',continent:'Australia'},
    {name:'Brazil',capital:'Brasilia',continent:'America'}
  ];


import { ADD_COUNTRY, DELETE_COUNTRY } from '../actions/index';

export default function(state = country,action){
  switch(action.type){
    case ADD_COUNTRY:
    console.log(state);
      let temp1=state.slice(0);
      temp1.push(action.payload);
      return temp1;

    case DELETE_COUNTRY:
      let temp2=state.slice(0);
      temp2.splice(temp2.indexOf(action.payload),1);
      return temp2;
  }

  return state;
}
