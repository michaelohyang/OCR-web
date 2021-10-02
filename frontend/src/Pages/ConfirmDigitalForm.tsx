import { Box, Grid, HStack, ListItem } from "@chakra-ui/layout";
import axios from "axios";
import { Component } from "react";
import ReactDOM from "react-dom";
import { updateJsxAttribute } from "typescript";
import ChakraButton from "../GlobalComponents/ChakraButton";
import { useHistory } from 'react-router-dom';
// import DisplayFileImage from "./Components/DisplayFileImage/DisplayFileImage";
// import NavBar from "./Components/NavBar/NavBar";
// import "./UploadFilesScreen.css";
import ChakraHeadbar from "../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./ConfirmDigitalForm.css";
import { background, layout } from "@chakra-ui/styled-system";
import ParticlesBg from 'particles-bg'

var data = {
    "Name": "John Doe",
    "Gender": "Male",
    "Age": "32"
    };

class ConfirmDigitalForm extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state= {
            // digitalForm: '{ "Name": "John Deo", "Gender": "Male", "Age": 32}',
            digitalForm: data,
            dic: {},
            newEntry: [<div></div>],
        };
        this.getJson = this.getJson.bind(this);
        this.populateDic = this.populateDic.bind(this);
        this.deleteAttri = this.deleteAttri.bind(this);
        this.updateAttri = this.updateAttri.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.inputAttri = this.inputAttri.bind(this);
        this.addAttri = this.addAttri.bind(this);
        this.submit = this.submit.bind(this);

        this.getJson();
        this.populateDic();
    }

    getJson = () => {
        axios.get('https://api.npms.io/v2/search?q=react')
        .then(response => this.setState({ digitalForm: response.data }));
        console.log(this.state.digitalForm);
    }

    populateDic = () => {
        console.log("populate dic");
        for(var key in this.state.digitalForm) {
            this.state.dic[key] = this.state.digitalForm[key];
        }
    };

    deleteAttri = (k: any) => {
        delete(this.state.dic[k]);
        this.setState({
            dic: this.state.dic,
        });
    };

    updateAttri = (e: any, originalKey: any, content: any) => {
        this.state.dic[e.target.value] = content;
        this.setState({
            dic: this.state.dic,
        });
    }

    updateContent = (e: any, k: any) => {
        this.state.dic[k] = e.target.value;
        this.setState({
            dic: this.state.dic,
        });
    }

    inputAttri = () => {
        this.state.newEntry.push(
            <div className="addattrbox">
                <input className="addattrtext" id="added-attri" type="text" placeholder="attribute name" defaultValue=""></input>
                :
                <input className="addattrtext" id="added-value" type="text" placeholder="content" defaultValue=""></input>
                <div className="adjustbuttom_delete"><ChakraButton txtname={"Add"} onClickFunc={() => this.addAttri()} /></div>
            </div>
        );
        this.setState({
            dic: this.state.dic,
        });
    }

    addAttri = () => {
        var attri = document.getElementById("added-attri") as HTMLInputElement;
        var value = document.getElementById("added-value") as HTMLInputElement;
        this.state.dic[attri.value] = value.value;
        this.setState({
            newEntry: [<div></div>],
        });
        this.setState({
            dic: this.state.dic,
        });
    }

    submit =() => {
        var dicJson = JSON.stringify(this.state.dic);
        console.log(dicJson);
        axios.post('https://reqres.in/api/confirm', dicJson).then(response => (console.log(response.data)));
        alert("Successful upload medical records!");
    }


    render() {
        var rows = [];
        this.state.newEntry.push(
            <div>
            </div>
        );
        // input?.addEventListener('input', (e: any) => this.userUpdate(e));
        for (var key in this.state.dic) {
            const k = key;
            
            rows.push(
                <div key={k}>
                    <HStack className="textdiv">
                        <ParticlesBg type="tadpole" bg={true} />
                        <div className="firstpart">
                            {k}
                            :
                        </div>
                        <div className="secondpart">
                            <input className="textarea" id={k} type="text" defaultValue={this.state.dic[k]} onChange={(e: any) => this.updateContent(e, k)}>
                            </input>
                            <ChakraButton txtname={"Delete"} onClickFunc={() => this.deleteAttri(k)} />
                        </div>
                    </HStack> 
                </div>);
        }
        console.log(this.state.dic);
        // console.log(this.state.digitalForm.hasOwnProperty("Age"));
        return (
            <div>
                <ChakraHeadbar />
                <div className="overallbg">
                    <ParticlesBg type="thick" bg={true} />
                    <div className="rowdistance">
                        <div>
                        {rows}
                        </div>
                        <div className="addattr"><ChakraButton txtname={"Add Attribute"} onClickFunc={() => this.inputAttri()}/></div>
                        <div>{this.state.newEntry}</div>
                        <div className="submitbuttom"><ChakraButton txtname={"Submit"} onClickFunc={() => this.submit()}/></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ConfirmDigitalForm;