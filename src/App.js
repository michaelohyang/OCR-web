// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ChildComp extends React.Component {

  componentDidMount() {
    console.log('componentDidMount() lifecycle')
  }

  render() {
    console.log('render() lifecycle')
    return <h1>{this.props.number} number of files</h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.numFiles = 0;
    this.imageCollection = new Array();
    this.state = {
      // Initially, no file is selected
      selectedFile: null
    };
    // This binding is necessary to make `this` work in the callback
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
  }

  onFileChange = event => {
    // Update the state
    console.log(event.target.files);
    this.setState({ selectedFile: event.target.files }, this.printSelectedFile, this.render());
  };

  printSelectedFile = () => {
    if (this.state.selectedFile) {
      for (var i = 0; i < this.state.selectedFile.length; i++) {
        this.imageCollection[this.numFiles] = this.state.selectedFile[i].name;
        this.numFiles++;
        console.log("numFiles: " + this.numFiles);
      }
    }
    console.log(this.imageCollection);
  };

  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // Details of the uploaded file
    console.log(this.state.selectedFile);
    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  fileData = () => { 
    if (this.imageCollection.length > 0) {
       return (
       <React.Fragment>
       {this.imageCollection.map(imageFile => {
        return (
            <div key="{this.numFiles - 1}">
              <h2>File Details:</h2>
              <p>File Name: {imageFile}</p> 
            </div> 
        )
      })} 
      
    </React.Fragment>
    );
    } 
    else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div key={this.numFiles}>
            <h3>
              File Upload using React!
            </h3>
            <div>
                <input type="file" multiple onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
                <ChildComp key={this.numFiles} number={this.numFiles} />
            </div>
          {this.fileData()}
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
