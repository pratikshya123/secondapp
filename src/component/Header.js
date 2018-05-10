import React, {Component} from 'react';
//material ui
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AccountIcon from './AccountIcon';
class Header extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            open:false, 
            email:''
        }
    }
    render(){
        return(
            <div>
                <AppBar
                title="Rebrandly"
                iconElementRight={ <AccountIcon email={ this.state.email } />}
                onLeftIconButtonClick={
                    ()=>this.setState({open: !this.state.open})
                }   
               />
                 <Drawer 
                     open= {this.state.open}
                            docked={false}
                     onRequestChange={()=>this.toggleSidebar()
                     }
                 >
                     <MenuItem>First</MenuItem>
                     <MenuItem>second</MenuItem>
                     <MenuItem>third</MenuItem>
                    </Drawer>
                
            </div>
        );
    }
    toggleSidebar(){
        this.setState({open: !this.state.open})
    }
     componentWillMount() {
    this.setState({
      email: sessionStorage.getItem('email')
    })
}
}

export default Header;