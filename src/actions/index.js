export const CONTINENT_SELECTED='CONTINENT_SELECTED';
export const ADD_COUNTRY='ADD_COUNTRY';
export const DELETE_COUNTRY='DELETE_COUNTRY';

export function selectContinent(continent){
  return {
    type: CONTINENT_SELECTED,
    payload: continent
  };
}

export function addCountry(country){
  return {
    type: ADD_COUNTRY,
    payload: country
  }
}

export function deleteCountry(country){
  return {
    type: DELETE_COUNTRY,
    payload: country
  }
}
