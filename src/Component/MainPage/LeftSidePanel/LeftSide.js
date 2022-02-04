import React, { Component } from 'react';
import ImageLayout from '../ImageLayout';
import "./LeftSide.css";
import covid from "../../../images/covid.png";
import groups from "../../../images/groups.png";
import memories from "../../../images/memories.png";
import messengerKids from "../../../images/messengerkids.png";
import ads from "../../../images/ads.png";
import adsmanager from "../../../images/admanager.png";
import blood from "../../../images/blood.png";
import business from "../../../images/business.png";
import { Avatar } from '@material-ui/core';
import { getImage } from '../../../GetImage';


class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data :[]
         }
    }

    getData=()=>{ //FAke JSON RESPONSE
        let jsondata = [
           // {
             //   "image": JSON.parse(localStorage.getItem("user")).userImage,
             //   "text": "Damian Pyda"
          //  },
            {
                "image": covid,
                "text": "COVID-19 Information Centre" 
            },
            {
                "image": groups,
                "text":"Friends"
            },
            {
                "image": memories,
                "text":"Memories"
            },
            {
                "image": messengerKids,
                "text":"Messenger Kids"
            },
            {
                "image": ads,
                "text":"Ad Center"
            },
            {
                "image": adsmanager,
                "text":"Ads Manager"
            },
            {
                "image": blood,
                "text":"Blood Donations"
            },
            {
                "image": business,
                "text":"Business Manager"
            }    
        ];
        this.setState({data : jsondata});
    }

    componentDidMount() {
        this.getData();
    }

    render() { 
        return ( 
            <div>
                <div className="navbar__righttab">
                    <Avatar src={getImage(JSON.parse(localStorage.getItem("user")).userImage)} className="upload_img"/> 
                    <div className="navbar__profilename">{(JSON.parse(localStorage.getItem("user")).userName)}</div>
                </div>
                {
                    this.state.data.map( (item) =>(
                         <ImageLayout image={item.image} text={item.text} />
                    ))
                }

                   
            </div>
         );
    }
}
 
export default LeftSide;