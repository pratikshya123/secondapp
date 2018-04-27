import React, {Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
//material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//components
import Header from './component/Header';
// injectTapEventPlugin();
import Body from './component/Body';
import Login from './component/Login';
class App extends Component {
	render() {
		return (
		<MuiThemeProvider>
			 
			 <Login/>
		</MuiThemeProvider>
			);
	}
}

export default App;