"use strict";

import * as types from '../constants/actionTypes';
import initialState from './initialState';

const techSpan = (state = initialState, action) => {
  switch (action.type) {
    case types.API_REQUEST:
      return { ...state, isLoading : true};
    case types.RESET_REPO_LIST:
      return {...state, repoList: [], isLoading: false, totalCount: 0 };
    case types.LOAD_REPO_LIST_SUCCESS:
      return {...state, repoList : action.repoList, totalCount: action.totalCount, isLoading: false };
    case types.LOAD_REPO_LIST_FAILURE:
      return {...state, repoList: [], isLoading: false, totalCount: 0 };
    case types.GET_OWNER_DETAILS_SUCCESS:
      return {...state, owner: action.owner, isLoading: false}
    case types.GET_OWNER_DETAILS_FAILURE:
      return {...state, owner: {}, isLoading: false}
    default:
      return state;
  }
}

export default techSpan;
