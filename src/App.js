import React, {Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
//material ui
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//components
import AdminBoard from './component/AdminBoard'
//import Header from './component/Header';
//import Body from './component/Body';
import Login from './component/Login';
class App extends Component {
	render() {
		return (
		<MuiThemeProvider>
			 
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} />
					<Route exact path="/" render={() => (<Redirect to="/login" />)} />
				<Route path="/board" component={AdminBoard} />
			</Switch>
		</BrowserRouter>
		</MuiThemeProvider>
			);
	}
}

export default App;