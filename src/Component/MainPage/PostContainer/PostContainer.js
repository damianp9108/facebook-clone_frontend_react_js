import React, { Component } from 'react';
import Post from './Post';
import "./PostContainer.css";
import post_img from "../../../images/post.jpeg";

    class PostContainer extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                data: []
             }
        }

        

        getData=()=>{

            const thisContext=this;
            fetch("http://localhost:8080/posts/getPost")
                .then(response => response.json())
                .then(json => {
                    thisContext.setState({ data : json });
                    this.letUpdate2();
                    
                    
                
                })
                .catch(error => {

                })

        }
        
       

        componentDidMount(){
            this.getData();
            
        }

        letUpdate2=()=>{
            this.refs.child.getData();
        }
        
        
        
        render() { 
            return ( 
                <div>
                    
                    {   
                        this.state.data.map((item)=>(
                            <Post object={item} ref="child" />
                        ))
                    }       
                </div>
             );
        }
    }
     
    export default PostContainer;