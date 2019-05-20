
import React from 'react'
import axios from 'axios';
import './Upload.css';
import Header from './../../components/Header/Header';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'get-id-from-somewhere',
      file: null,
    };
  }

  submit(event){
    event.preventDefault();
    var self = this;
    var apiBaseUrl =  "/api/Upload/Video";
    if(this.state.file){
        let f = new FormData();
        f.append("file",this.state.file )
        axios.post(apiBaseUrl, f, {
               headers: {'Content-Type': 'multipart/form-data'}
        });
        alert("File upload started");
    }
    else{
        alert("Please select files first");
    }
}

  setFile(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
      <div className="container">
          <Header title="File Upload"/>
      <form onSubmit={e => this.submit(e)}>
        <input type="file" accept="video/*" onChange={e => this.setFile(e)} />
        <button type="submit">Upload</button>
      </form>
      </div>
    );
  }
}

export default Upload;