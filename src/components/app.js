import React, { Component } from 'react';
import FilterBar from '../containers/filter-bar';
import CountriesTable from '../containers/countries-table';
import NewEntryBar from '../containers/new-entry-bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NewEntryBar/>
        <FilterBar/>
        <CountriesTable/>
      </div>
    );
  }
}
