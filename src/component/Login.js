import React, {Component } from 'react';
import Logo from '../image/rebrandly2.jpg';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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

				<TextField type="Email"
				fullWidth={true}
				floatingLabelText="Email Address"
			      hintText="Email" value={this.state.email}
			      onChange={(e)=> this.onEmailChange(e)}
			    /><br />
			    <br />
			     <TextField type="password"
			     fullWidth={true}
			     floatingLabelText="Api Key"
			      hintText="Api Key" value={this.state.apikey}
			      onChange={(e) =>this.onApikeyChange(e)}
			    /><br />

			    <br />
			     </CardText>
			      <CardActions style={this.floatActionButtonRight}>
			       <RaisedButton label="Submit" primary={true} onClick={ () => this.submitForm() }/>
			     
			     </CardActions>
			     </Card>

			</div>

			)
	}
	onEmailChange(e){
		this.setState({email:e.target.value})
	}
	onApikeyChange(e){
		this.setState({apikey: e.target.value})
	}
	onsubmit() {
		fetch("https://api.rebrandly.com/v1/account",
		{
			headers: {
				apikey:this.state.apikey
			}
		})
		.then(response => {
			if(response.ok){
				response.json()
				.then(data =>{
					console.log(data)
					if(data.email ===this.state.email) {
						console.log("Right User")
					}
					else{
						alert("Not Authorized User")
					}
				})
			}
			else {
				alert(response.statusText)
			}
		})

	}
}
export default Login;