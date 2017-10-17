import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { deleteCountry } from '../actions/index';

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
          <td><button className="btn btn-danger" onClick={()=>this.props.deleteCountry(country)}>Delete</button></td>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteCountry},dispatch);
}

function mapStateToProps(state){
  return{
    selectedContinent:state.selectedContinent,
    countries:state.countries
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CountriesTable);
