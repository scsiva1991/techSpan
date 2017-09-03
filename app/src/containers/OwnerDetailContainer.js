import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/techSpan';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

class OwnerDetailContainer extends Component {

  constructor(props) {
    super( props );
    this.goBack = this.goBack.bind( this );
  }

  goBack( e ) {
    this.props.history.goBack();
  }

  componentWillMount() {
    const name = this.props.match.params.name;
    console.log('@#', name);
    this.props.actions.getOwnerDetails(name);
  }

  render(){
    let {owner, isLoading} = this.props;
    console.log(this.props);

    return(
      <div>
        <Header />
        {isLoading && <Loader/>}
        <ol className="breadcrumb">
          <li><Link to="/">Dashboard</Link></li>
          <li><a onClick={this.goBack}>Dashboard</a></li>
          <li className="active">Owner Details</li>
        </ol>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 text-center">
              {owner && <img src={owner.avatar_url} />}
              {owner && <div className="repo-owner-name">{owner.name}</div>}
              {owner && <div className="repo-owner-blog">{owner.blog}</div>}
              {owner && <div className="repo-owner-location">{owner.location}</div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = (state) => ({
  repoList: state.techSpanReducer.repoList,
  owner: state.techSpanReducer.owner,
  isLoading: state.techSpanReducer.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(OwnerDetailContainer);
