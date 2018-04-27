import React, {Component} from 'react';

//material ui
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            open:false
        }
    }
    render(){
        return(
            <div>
                <AppBar
                title="Pratikshya"
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
}

export default Header;