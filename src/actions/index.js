export const CONTINENT_SELECTED='CONTINENT_SELECTED';

export function selectContinent(continent){
  return {
    type: CONTINENT_SELECTED,
    payload: continent
  };
}
