import React, { Component, PropTypes } from 'react';
import SearchBox from '../components/SearchBox';
import SearchResult from '../components/SearchResult';
import style from '../css/main.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FriendsActions from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';

@connect(state => ({
  searchResult: state.friendlist
}))



export default class Editor extends Component {
 
  render () {
	  console.log(this.props,this.state);
	  const { searchResult, dispatch } = this.props;
	    const actions = bindActionCreators(FriendsActions, dispatch);
    return (
    		<div className={style.maincontainer}>

	    		<div className={style.topsection}>
	    			<div className="innertube"><h1>Content search application</h1></div>
	    		</div>
	
	    		<div className={style.contentwrapper}>
		    		<div className={style.contentcolumn}>
		    			<div className={style.innertube}><SearchBox search={actions.search}/></div>
		    			<div className={style.innertube}><SearchResult data={searchResult}/></div>
		    			
		    		</div>
	    		</div>
	
	    		<div className={style.leftcolumn}>
	    		<div className={style.innertube}>left menu</div>
	
	    		</div>
	
	    		<div className={style.footer}><a href="http://www.dynamicdrive.com/style/">Dynamic Drive CSS Library</a></div>

    		</div>
    );
  }
}
