import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Loader from '../components/Loader';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as actions from '../actions/techSpan';

class Dashboard extends Component {

  constructor(props) {
    super( props );
    this.state = { languages: [
      {
        name: 'Javascript',
        imageName: 'devicon-javascript-plain colored'
      },
      {
        name: 'Python',
        imageName: 'devicon-python-plain colored'
      },
      {
        name: 'Java',
        imageName: 'devicon-java-plain colored'
      },
      {
        name: 'C',
        imageName: 'devicon-c-plain colored'
      },
      {
        name: 'C++',
        imageName: 'devicon-cplusplus-plain colored'
      },
      {
        name: 'C#',
        imageName: 'devicon-csharp-plain colored'
      },
      {
        name: 'Ruby',
        imageName: 'devicon-ruby-plain colored'
      },
      {
        name: 'Nodejs',
        imageName: 'devicon-nodejs-plain colored'
      },
      {
        name: 'Php',
        imageName: 'devicon-php-plain colored'
      },
      {
        name: 'Html5',
        imageName: 'devicon-html5-plain colored'
      },
      {
        name: 'Css3',
        imageName: 'devicon-css3-plain colored'
      }
    ]};
  }

  onClick = ( e ) => {
    console.log( e );
    this.props.history.push('/repo/'+e );
  }



  render() {
    let languageList = this.state.languages.map( function( language, index) {
      return(
        <div className="language-list" key={index} onClick={() => this.onClick(language.name)} name={language}>
          <i className={language.imageName}></i> {language.name}
        </div>)
    }, this);


    return(
      <div>
        <Header />
        <ol className="breadcrumb">
          <li className="active">Dashboard </li>
        </ol>
          {languageList}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
