import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import LeftSide from './LeftSidePanel/LeftSide';
import "./Mainpage.css";
import PostContainer from './PostContainer/PostContainer';
import RightSide from './RightSidePanel/RightSide';
import StatusBar from './StatusBar/StatusBar';
import UploadSection from './UploadSection/UploadSection';

class Layout  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    letUpdate =() =>{
        this.refs.child.getData();
    
        

    }

   
    

    render() { 
        return ( 
            <div className="mainpage__container">
                <Grid container>
                    <Grid item xs={3}>
                        <LeftSide />
                    </Grid>
                    <Grid item xs={6} className="middleContainer">
                        <StatusBar />
                        <UploadSection update={this.letUpdate} />
                        <PostContainer ref="child"  />
                    </Grid>
                    <Grid item xs={3}>
                        <RightSide />
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default Layout;