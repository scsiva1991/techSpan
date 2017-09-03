'use strict';

import * as types from '../constants/actionTypes'; 
import api from '../api/api';

export function apiRequest() {
  return { type: types.API_REQUEST};
}

export function resetRepoList() {
  return { type: types.RESET_REPO_LIST};
}

export function getRepoListSuccess( data ) {
  return {type: types.LOAD_REPO_LIST_SUCCESS, repoList: data.items, totalCount: data.total_count };
}

export function getRepoListFailure( ) {
  return {type: types.LOAD_REPO_LIST_FAILURE, repoList: [] };
}

export function getOwnerDetailsSuccess( data ) {
  return {type: types.GET_OWNER_DETAILS_SUCCESS, owner: data };
}

export function getOwnerDetailsFailure( ) {
  return {type: types.GET_OWNER_DETAILS_FAILURE, repoList: [] };
}

export const getRepoList = ( language ) => {
  return dispatch => {
    dispatch(apiRequest());
    return api.getRepoList(language).then(res => {
      dispatch(getRepoListSuccess(res.data));
    }).catch(error => {
      dispatch(getRepoListFailure());
    });
  }
}

export const getOwnerDetails = ( name ) => {
  return dispatch => {
    dispatch(apiRequest());
    return api.getOwnerDetails(name).then(res => {
      console.log(res);
      dispatch(getOwnerDetailsSuccess(res.data));
    }).catch(error => {
      dispatch(getOwnerDetailsFailure());
    });
  }
}
