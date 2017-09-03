import React, { PropTypes, Component } from 'react';
import moment from 'moment';

export default class RepoList extends Component {

  constructor( props ) {
    super( props );
    this.onClick = this.onClick.bind( this );
  }

  onClick( name ) {
    console.log('########', name);
    this.props.history.push('/repo/owner/'+name);
  }

  render() {

    let { repo } = this.props;
    let updatedAt = moment(new Date(repo.updated_at)).fromNow();
    let ownerName = repo.owner.login;

    return(
      <div>
        <div className="row">
            <div className="col-xs-6">
              <a href={repo.html_url} target="_blank" className="repo-url">{repo.full_name}</a>
            </div>
            <div className="col-xs-3 repo-lang">
              <i className="fa fa-circle repo-circle" aria-hidden="true"></i> {repo.language}
            </div>
            <div className="col-xs-3">
              <i className="fa fa-star repo-star" aria-hidden="true"></i> {repo.stargazers_count}
            </div>
        </div>
        <div className="row">
          <div className="col-xs-6 repo-desc" >
            {repo.description}
          </div>
          <div className="col-xs-6" >
            <img src={repo.owner.avatar_url} className="pull-right repo-list-avatar"
             onClick={() => { this.onClick(ownerName) }}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 repo-last-updated">
            Updated {updatedAt}
          </div>
        </div>
      <hr/>
      </div>
    )
  }
}
