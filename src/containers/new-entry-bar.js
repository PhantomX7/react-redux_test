import { Field, reduxForm, change, untouch } from 'redux-form';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCountry } from '../actions/index';

class NewEntryBar extends Component{
  constructor(props){
    super(props);
  }

  renderField(field){

    const {meta:{touched,error}}= field;
    const className=`col-md-4 form-group ${touched&&error? 'has-danger':''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error: ''}
        </div>
      </div>
    )
  }

  onSubmit(values){
    this.resetField(["name","capital","continent"]);
    this.props.addCountry(values);

    console.log(values);
  }

  resetField(fields){
      for (var i = 0; i < fields.length; i++) {
          this.props.dispatch(change('PostsNewForm',fields[i],null))
          this.props.dispatch(untouch('PostsNewForm',fields[i]))
      }
  }

  render(){
    const {handleSubmit}=this.props;

    return(
      <div className="new-entry-form">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="">
            <Field
              label="Name" //doesnt need to be label
              name="name"
              component={this.renderField}
            />
            <Field
              label="Capital"
              name="capital"
              component={this.renderField}
            />
            <Field
              label="Continent"
              name="continent"
              component={this.renderField}
            />
          </div>
          <div className="col-md-4">
            <button type="submit" className="submit btn btn-primary">Submit</button>
          </div>

        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addCountry},dispatch);
}

function validate(values){
  const errors={};

  if(!values.name ){
    errors.name="Enter a country name";
  }
  if(!values.capital){
    errors.capital="Enter a capital!";
  }
  if(!values.continent){
    errors.continent="Enter a continent!";
  }
  //errors is empty, the form is fine to submit
  //if errors has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null,mapDispatchToProps)(NewEntryBar)
);
