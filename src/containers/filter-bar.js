import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectContinent } from '../actions/index';

class FilterBar extends Component{
  constructor(props){
    super(props);

    this.onChange=this.onChange.bind(this);
  }

  onChange(event){
    this.props.selectContinent(event.target.value);
  }

  renderOption(){
    const { countries }=this.props;

    // const continents = countries.filter(
    //   (country, index, self) => self.findIndex((c) => {
    //     return c.continent === country.continent ;
    //   }) === index
    // );

    let continents=[];
    countries.forEach((country)=>{
      continents.push(country.continent);
    });

    continents = continents.filter( function( continent, index, continents ) {
           return continents.indexOf(continent) === index;
    });

    return continents.map((continent)=> {
      return (
        <option key={ continent } value={ continent }>
          { continent }
        </option>
      );
    });
  }

  render(){
    return(
      <div className="filter-bar">
        <select
          className="form-control"
          value={this.props.country}
          onChange={this.onChange}
        >
          <option value="All">All</option>
          {this.renderOption()}
        </select>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectContinent},dispatch);
}

function mapStateToProps(state){
  return{
    selectedContinent:state.selectedContinent,
    countries:state.countries
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterBar);
