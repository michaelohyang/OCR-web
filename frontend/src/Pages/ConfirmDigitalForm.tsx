import { Box, Grid, ListItem } from "@chakra-ui/layout";
import axios from "axios";
import { Component } from "react";
import ReactDOM from "react-dom";
import { updateJsxAttribute } from "typescript";
import ChakraButton from "../GlobalComponents/ChakraButton";
import { useHistory } from 'react-router-dom';

class ConfirmDigitalForm extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state= {
            digitalForm: {},
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
    }

    getJson = () => {
        axios.get('http://localhost:8080/form')
        .then(response => {
            this.setState({ digitalForm: response.data });
            console.log(this.state.digitalForm);
            this.populateDic();
            this.setState({dic: this.state.dic});
        });
    }

    populateDic = () => {
        console.log("populate dic");
        for(var key in this.state.digitalForm) {
            this.state.dic[key] = this.state.digitalForm[key];
        }
        console.log(this.state.dic);
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
            <div>
                <input id="added-attri" type="text" placeholder="attribute name" defaultValue=""></input>
                :
                <input id="added-value" type="text" placeholder="content" defaultValue=""></input>
                <ChakraButton txtname={"Add"} onClickFunc={() => this.addAttri()} />
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

    submit = () => {
        axios.post('http://localhost:8080/confirmForm', this.state.dic).then(response => (console.log(response.data)));
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
                    {k}
                    : 
                    <input id={k} type="text" defaultValue={this.state.dic[k]} onChange={(e: any) => this.updateContent(e, k)}>
                    </input>
                    <ChakraButton txtname={"Delete"} onClickFunc={() => this.deleteAttri(k)} />
                </div>);
        }
        console.log(this.state.dic);
        return (
            <div>
                <div>
                {rows}
                </div>
                <ChakraButton txtname={"Add Attribute"} onClickFunc={() => this.inputAttri()}/>
                <div>{this.state.newEntry}</div>
                <ChakraButton txtname={"Submit Changes"} onClickFunc={() => this.submit()}/>
            </div>
        );
    }
}
export default ConfirmDigitalForm;