import { Paper } from '@material-ui/core';
import React, { Component } from 'react';
import status1 from "../../../images/pic2.jpeg";
import uploadIcon from "../../../images/upload.png";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    openDialogToUploadStatus=(event)=>{
        let image=event.target.files[0];

        if(image==undefined || image==null)
            return;

        const thisContext=this;
        const storage = getStorage();
        const storageRef = ref(storage, 'status/' + (image.name));

        const uploadTask = uploadBytesResumable(storageRef, (image));

        uploadTask.on('state_changed',
            (snapshot) => {
                
                
            },
            (error) => {
                
            },
            () => {
    
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                    let payload = {
                        "userID": JSON.parse(localStorage.getItem("user")).userID,
                        "userName": JSON.parse(localStorage.getItem("user")).userName,
                        "statusImageURL": downloadURL
                    }
    
                    const requestOptions = {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload),
                    };
    
                    fetch("http://localhost:8080//api/statusService/save", requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            thisContext.props.refresh();
                        })
                        .catch(error => {
    
                        })
                })
            }
        );

    }
          
    render() { 
        return ( 
            <div>
                {
                    this.props.uploader == "true" ?

                    <Paper className="statusbar__status" >
                        <label for="file-upload-status" className="upload__tabs">
                        <img src={uploadIcon} className="upload__icon" />
                        </label>
                        <input type="file" id="file-upload-status" onChange={this.openDialogToUploadStatus}/>
                    </Paper>:

                    <Paper className="statusbar__status" >
                        <img src={this.props.object.statusImageURL} className="status__image" />
                    </Paper>
                }
                
            </div>
         );
    }
}
 
export default Status;