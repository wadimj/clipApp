
import React from 'react'
import axios from 'axios';
import Loader from './../../components/Loader/Loader';
import './Upload.css';
import Header from './../../components/Header/Header';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clipId: null,
      file: null,
      name: null,
      keywords: null,
      thumbnail: null,
      loading:false
    };
  }



  submit(event){
    event.preventDefault();
    this.setState({ loading: true });
    var self = this;
    var apiBaseUrl =  "/api/Upload/Video";
    if(this.state.file){
        let f = new FormData();
        f.append("File",this.state.file )
        f.append("Name",this.state.name )
        f.append("Keywords",this.state.keywords )
        axios.post(apiBaseUrl, f, {
               headers: {'Content-Type': 'multipart/form-data'}
        }).then(function (res) {
          this.setState({ loading: false });
      })
      .catch(function (error) {
          console.log(error);
      });
      window.location.href = '/'
    }
    else{
        alert("Please select files first");
    }
}

  setFile(e) {
    this.setState({ file: e.target.files[0] });
  }
  setName(e) {
    this.setState({ name: e.target.value });
  }
  setKeywords(e) {
    this.setState({ keywords: e.target.value });
  }

  render() {
    return (
      <div className="container">
          <Header title="File Upload"/>
      <form onSubmit={e => this.submit(e)}>
        <input value={this.state.name} onChange={e => this.setName(e)} placeholder="Clip Name" />
        <input value={this.state.keywords} onChange={e => this.setKeywords(e)} placeholder="Keywords (comma separated)" />
        <input type="file" accept="video/*" onChange={e => this.setFile(e)} />
        <button type="submit">Upload</button>
        {this.state.loading ? <Loader/> : null}
      </form>
      </div>
    );
  }
}

export default Upload;