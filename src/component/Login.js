import React, {Component } from 'react';
import Logo from '../image/rebrandly2.jpg';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RebrandlyApi from '../services/RebrandlyApi';
class Login extends Component{
	  alignCenter = {
    height: "100vh",          
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
	cardWidth = {
    width: "500px"
}
		 floatActionButtonRight = {
    float: "right"
}
	constructor(props) {
		super(props)
		this.state = {
			email:'',
			apikey:''
		}
	}
	render(){
		return(
			<div style={this.alignCenter}>
        <Card style={this.cardWidth}>
          <CardHeader
title="Rebrandly"
            subtitle="View on your rebrandly resource!!!"
            avatar={Logo}
          />
          <CardTitle title="Login"/>
          <CardText>
            <TextField
              type="email"
              fullWidth={true}
              floatingLabelText="Email Address"
              value={this.state.email}
              onChange={ (e) => this.onEmailChange(e) }
            />
            <TextField
              type="password"
              fullWidth={true}
              floatingLabelText="API Key"
              value={this.state.apikey}
              onChange={ (e) => this.onChangeApikey(e) }
            />
          </CardText>
          <CardActions style={this.floatActionButtonRight}>
            <RaisedButton label="Submit" primary={true} onClick={ () => this.handleSubmit() }/>
          </CardActions>
        </Card>
</div>
			// <div style={this.alignCenter}>
			// <Card style={this.cardWidth}>
			// <CardHeader
   //          title="Rebrandly"
   //          subtitle="View on your rebrandly resource!!!"
   //          avatar={Logo}
			// />

			// <CardTitle title="Login"/>
				
			// 	<CardText>
			// 	<TextField type="Email"
			// 	fullWidth={true}
			// 	floatingLabelText="Email Address"
			//       hintText="Email" value={this.state.email}
			//       onChange={(e)=> this.onEmailChange(e)}
			//     /><br />

			//      <TextField type="password"
			//      fullWidth={true}
			//      floatingLabelText="Api Key"
			//       hintText="Api Key" value={this.state.apikey}
			//       onChange={(e) =>this.onApikeyChange(e)}
			//     /><br />

			//     <br />
			//     //  </CardText>
			//   		 <CardActions style={this.floatActionButtonRight}>
			//          <RaisedButton label="Submit" primary={true} onClick={() =>this.handleSubmit()}
			//     </CardActions>
			//     </Card>

			// </div>

			)
	}
	onEmailChange(e){
		this.setState({email:e.target.value})
	}
	onChangeApikey(e){
		this.setState({apikey: e.target.value})
	}
	handleSubmit=()=> {
		  this.getAccountDetail(this.state.apikey)
		    .then(account => {
		      if(account.email === this.state.email) {
		        sessionStorage.setItem('apikey', this.state.apikey)
		        sessionStorage.setItem('email', this.state.email)
		        this.props.history.push('/board')
		      }
		      else {
		        alert('Credentail mis match')
		      }
		    })
		    .catch(error => {
		      alert(error.message)
		    })
		  }
			 getAccountDetail(apikey) {
		    return RebrandlyApi.get('/account', {headers: {apikey: apikey}})
		}
		 componentWillMount() {
    const apikeySession = sessionStorage.getItem('apikey')
    if(apikeySession) {
      this.getAccountDetail(apikeySession)
      .then(account => {
        if(account) {
          this.props.history.push('/board')
        }
      })
      .catch(error => {
        sessionStorage.removeItem('apikey')
})
	}
}
}
export default Login;