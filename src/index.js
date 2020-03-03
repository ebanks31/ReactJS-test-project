'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import './index.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './navbar';

const e = React.createElement;

class LikeButton extends React.Component {
   constructor(props) {
     super(props);
     this.state = { liked: false };
   }
 
   render() {
     if (this.state.liked) {
       return 'You liked this.';
     }
 
     return e(
       'button',
       { onClick: () => this.setState({ liked: true }) },
       'Like'
     );
   }
 }
 
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

class App extends React.Component {
   render() {
      return (
         <div>
		    <NavigationBar/>
            <Header/>
            <Content/>
			<Footer/>
			<Application/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
	  <body>
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
			<Button color="danger">Danger!</Button>
         </div>
	   </body>
      );
   }
}

class Footer extends React.Component {
   render() {
      return (
         <div>
            <p>The Footer</p>
         </div>
      );
   }
}

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <style>{'body { background-color: blue; }'}</style>
                <title>This is a test react application</title>
                <meta name="description" content="ReactJS Helmet application" />
            </Helmet>
            ...
        </div>
    );
  }
}
  
/*
class NavBar extends React.Component {
	render() {
		return (
	    <script src="build.js"></script>	
	);
	}
}
*/
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

