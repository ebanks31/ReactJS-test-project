import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import './index.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { NavigationBar } from './navbar';

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

