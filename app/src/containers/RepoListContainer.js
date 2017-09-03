import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/techSpan';
import Loader from '../components/Loader';
import RepoList from '../components/RepoList';
import { Link } from 'react-router-dom';

class RepoListContainer extends Component {

  constructor(props) {
    super( props );
    this.state = {
      filteredList : [],
      count : 0
    }
    this.onPrevClick = this.onPrevClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.goBack = this.goBack.bind(this);
    this.onClick = this.onClick.bind( this );
  }

  goBack( event ) {
    this.props.actions.resetRepoList();
    this.props.history.push('/');
  }

  onClick( name ) {
    this.props.history.push('/repo/owner/'+name);
  }

  onPrevClick(event) {
      let count = this.state.count;
      let repoList = this.props.repoList;
      console.log(this.props.repoList);
      let filteredList = repoList.slice(count-18, count-9);
      this.setState({ filteredList: filteredList, count: count-9 });
  }

  onNextClick(event) {
      let count = this.state.count;
      let repoList = this.props.repoList;
      let filteredList = repoList.slice(count, count+9);
      console.log( count, count+9);
      this.setState({ filteredList: filteredList, count: count+9 });
  }

  componentWillReceiveProps( nextProps ) {
    if( nextProps.repoList.length > 0 && this.state.filteredList.length === 0 ) {
      let filteredList = nextProps.repoList.slice(0 , 9);
      this.setState({ filteredList: filteredList, count: 9 });
    }
  }

  componentWillMount() {
    console.log(this.props.match.params);
    this.props.actions.getRepoList(this.props.match.params.language);
  }

  render() {
    let { isLoading, totalCount } = this.props;
    let { filteredList, count } = this.state;

    console.log( this.props, isLoading, this.state );
    let repos = filteredList.map(function( repo, index ){
      return (<RepoList key={index} repo={repo} {...this.props}/>)
    }, this);

    return(
      <div>
        <Header />
        {isLoading && <Loader/>}
        <ol className="breadcrumb">
          <li><a onClick={this.goBack}>Dashboard</a></li>
          <li className="active">Repositories </li>
        </ol>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
                <button type="button" className="btn btn-primary mg-t-10" aria-label="Left Align"
                 disabled={count == 9} onClick={this.onPrevClick}>
                   <span className="fa fa-long-arrow-left" aria-hidden="true"></span> Prev
                </button>
            </div>
            <div className="col-xs-6">
              <button type="button" className="btn btn-primary mg-t-10 pull-right" aria-label="Right Align"
              disabled={filteredList.length < 9} onClick={this.onNextClick} >
                 <span className="fa fa-long-arrow-right" aria-hidden="true"></span> Next
              </button>
            </div>
          </div>
        </div>
        <div className="container-fluid repo-list">
          <div className="row">
            <div className="col-xs-8 repo-count">
              {totalCount} repositories found
            </div>
          </div>
          <hr/>
          {repos}
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
                <button type="button" className="btn btn-primary mg-t-10" aria-label="Left Align"
                 disabled={count == 9} onClick={this.onPrevClick}>
                   <span className="fa fa-long-arrow-left" aria-hidden="true"></span> Prev
                </button>
            </div>
            <div className="col-xs-6">
              <button type="button" className="btn btn-primary mg-t-10 pull-right" aria-label="Right Align"
              disabled={filteredList.length < 9 } onClick={this.onNextClick}>
                 <span className="fa fa-long-arrow-right" aria-hidden="true"></span> Next
              </button>
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
  isLoading: state.techSpanReducer.isLoading,
  totalCount: state.techSpanReducer.totalCount
})

export default connect(mapStateToProps, mapDispatchToProps)(RepoListContainer);
