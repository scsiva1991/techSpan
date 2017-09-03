import axios from 'axios';

export default class api {

  static getRepoList( language ) {
    const url = `https://api.github.com/search/repositories?q=${language}&per_page=100&sort=stars&order=desc`;
    return axios.get( url ).then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  }

  static getOwnerDetails( name ) {
    const url = `https://api.github.com/users/${name}`;
    return axios.get( url ).then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  }

}
