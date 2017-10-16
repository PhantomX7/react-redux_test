import React, { Component } from 'react';
import FilterBar from '../containers/filter-bar';
import CountriesTable from '../containers/countries-table';

export default class App extends Component {
  render() {
    return (
      <div>
        <FilterBar/>
        <CountriesTable/>
      </div>
    );
  }
}
