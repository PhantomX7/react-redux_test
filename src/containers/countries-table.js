import React,{Component} from 'react';
import {connect} from 'react-redux';

class CountriesTable extends Component{
  constructor(props){
    super(props);
  }

  renderRow(){
    let filteredCountries;
    if(this.props.selectedContinent==='All'){
      filteredCountries=this.props.countries;
    }else{
      filteredCountries=this.props.countries.filter((country)=>{
        return country.continent===this.props.selectedContinent;
      });
    }

    return filteredCountries.map((country)=> {
      return (
        <tr key={ country.name }>
          <td>{ country.name }</td>
          <td>{ country.capital }</td>
          <td>{ country.continent }</td>
        </tr>
      );
    });
  }

  render(){

    return(
      <div>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Continent</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRow()}
        </tbody>
      	</table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    selectedContinent:state.selectedContinent,
    countries:state.countries
  };
}

export default connect(mapStateToProps)(CountriesTable);
