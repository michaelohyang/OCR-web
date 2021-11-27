import { Component } from "react"
import axios from "axios";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./digitalForm.css";
// import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";

class digitalForm extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            rawJson: [{
                    "First Name" : "John"},
                    {"Last Name" : "Johnson"},
                    {"Gender": "Male"
                }],
            data: [],
        };
        // getJson(); 
        console.log(this.state.rawJson[0]);
        this.formatRawJson(this.state.rawJson);
    }

    getJson = () => {
        axios.get("http://localhost:8080/generatedForm").then((response) => {
          this.setState({ rawJson: response.data });
        //   this.setState({ dic: this.state.dic });
        });
    };

    formatRawJson = (raw: any) => {
        var dataJSONString=JSON.stringify(this.state.rawJson[0]); 
        console.log(dataJSONString);
        console.log(dataJSONString.split(":"))
        let splitted = dataJSONString.split(":");
        console.log(splitted[0]);
        this.setState({
            data: splitted,
        });
    }
    
    render() {
        console.log(this.state.rawJson[0]);
        console.log(this.state.data);
        return(
            <div className="overallbg">
                <ChakraHeadbar />
                Digital form
                <div>
                    {this.state.data}
                </div>
            </div>
        );
    }
}

export default digitalForm;