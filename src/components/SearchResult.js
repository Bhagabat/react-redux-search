import React, { Component, PropTypes } from 'react';
export default class SearchResult extends Component {
  

  render () {
	  console.log(this.state.data,"----")
    return (
    		<ul>
      {this.state.data.map(function(v,i){return <li key={v.value}>{v.value}</li>})}
      </ul>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = this.props.data;
  }
  componentWillReceiveProps(nextProp){
	  console.log("data",nextProp.data);
	  this.setState(nextProp.data);
  }
  

}