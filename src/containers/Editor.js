import React, { Component, PropTypes } from 'react';
var Highlight = require('react-syntax-highlight');
var keywords={blue:['select'],green:['from']};
export default class Editor extends Component {
 
  render () {
    return (
    		<Highlight lang={"sql"} value={this.props.query} />
    );
  }
}
