import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const allData = [{value:"www.youtube.com"},{value:"www.google.com"}]
const initialState = {
  data:[]
};

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      const newId = state.friends[state.friends.length-1] + 1;
      return {
        ...state,
        friends: state.friends.concat(newId),
        friendsById: {
          ...state.friendsById,
          [newId]: {
            id: newId,
            name: action.name
          }
        },
      }

    case types.DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(id => id !== action.id),
        friendsById: omit(state.friendsById, action.id)
      }

    case 'search':
    	console.log("demo..............",action.value);
      return {
        ...state,
        data:allData.filter(function(v){
        	return v.value.indexOf(action.value)>-1
        })
      }
    

    default:
      return state;
  }
}
