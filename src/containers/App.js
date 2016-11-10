import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../store_enhancers/devTools';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';
import Editor from './Editor';
const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render1() {
    return (
      <div>
        <Provider store={store}>
          {() => <FriendListApp /> }
        </Provider>

        {renderDevTools(store)}
      </div>
    );
  }
  
  render() {
	    return (
	      <div>
	       	<Editor query="SELECT EXTRACT(HOUR FROM CAST((A.CHANGE_DATE + E.SYS_DELTA_HOURS/24) AS TIMESTAMP)) AS IN_HOUR, SUM(NVL(VALUE,0)) BILLING_DOLLAR_VALUE, SUM(NVL(VALUE*LOCAL_RATE,0)) BILLING_CURRENCY_VALUE, SUM(NVL(UNITS,0)) BILLING_UNITS FROM RT_DAY_BILLINGS A, GEO_CODES E WHERE A.GEO_REPORTING_YMD IN('20160729','20160728') AND A.CORP_ORG_ID IN( 'P'||'032','W'||'032') AND A.PROD_CLASS_CODE IN ('1A','1B','1C','1J','1K','1Q','1R','1V','1W','1S','1L','1H','1T') AND APP01_FLAG IN ('P','K','B','E','A','S','H','I') AND E.GEO_CODE=A.GEO_CODE GROUP BY EXTRACT(HOUR FROM CAST((A.CHANGE_DATE + E.SYS_DELTA_HOURS/24) AS TIMESTAMP)) ORDER BY IN_HOUR"/>
	       	<Editor query="SELECT EXTRACT(HOUR FROM CAST((A.CHANGE_DATE + E.SYS_DELTA_HOURS/24) AS TIMESTAMP)) AS IN_HOUR, SUM(NVL(VALUE,0)) BILLING_DOLLAR_VALUE, SUM(NVL(VALUE*LOCAL_RATE,0)) BILLING_CURRENCY_VALUE, SUM(NVL(UNITS,0)) BILLING_UNITS FROM RT_DAY_BILLINGS A, GEO_CODES E WHERE A.GEO_REPORTING_YMD IN('20160729','20160728') AND A.CORP_ORG_ID IN( 'P'||'032','W'||'032') AND A.PROD_CLASS_CODE IN ('1A','1B','1C','1J','1K','1Q','1R','1V','1W','1S','1L','1H','1T') AND APP01_FLAG IN ('P','K','B','E','A','S','H','I') AND E.GEO_CODE=A.GEO_CODE GROUP BY EXTRACT(HOUR FROM CAST((A.CHANGE_DATE + E.SYS_DELTA_HOURS/24) AS TIMESTAMP)) ORDER BY IN_HOUR"/>
	      </div>
	    );
	  }
}
