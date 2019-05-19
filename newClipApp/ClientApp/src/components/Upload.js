
import React from 'react'
import axios from 'axios';

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
      <form onSubmit={e => this.submit(e)}>
        <h1>File Upload</h1>
        <input type="file" accept="video/*" onChange={e => this.setFile(e)} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default Upload;