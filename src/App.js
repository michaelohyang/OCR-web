import axios from 'axios';

import React,{Component} from 'react';


class App extends Component {
      fileObj = [];
      fileArray = [];
  
      constructor(props) {
          super(props)
          this.state = {
              file: [null]
          }
          this.selectFiles = this.selectFiles.bind(this)
          this.uploadFiles = this.uploadFiles.bind(this)
      }
  
      selectFiles(e) {
          for (let i = 0; i < e.target.files.length; i++) {
            console.log(e.target.files[i]);
            if (e.target.files[i]['type'].split('/')[0] !== 'image') {
              return;
            }
          }
          for (let i = 0; i < e.target.files.length; i++) {
              this.fileArray.push(URL.createObjectURL(e.target.files[i]))
              console.log(e.target.files[i])
          }
          this.setState({ file: this.fileArray })
      }
  
      uploadFiles(e) {
          e.preventDefault()
          console.log(this.state.file)
      }
  
      render() {
          return (
              <form>
                  <div className="form-group images-preview">
                      {(this.fileArray || []).map(url => (
                          <img src={url} alt="..." />
                      ))}
                  </div>
                  <div className="form-group">
                      <input type="file" className="form-control" onChange={this.selectFiles} multiple />
                  </div>
                  <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
              </form >
          )
      }
}

export default App;
