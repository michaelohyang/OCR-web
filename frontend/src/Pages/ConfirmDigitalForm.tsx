import { HStack } from "@chakra-ui/layout";
import axios from "axios";
import { Component } from "react";
import ChakraButton from "../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./ConfirmDigitalForm.css";
import ParticlesBg from 'particles-bg'
import update from 'immutability-helper'; 

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
            this.setState({ dic: update(this.state.dic, {key: {$set: this.state.digitalForm[key]}})})
            // this.state.dic[key] = this.state.digitalForm[key];
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
        this.setState({ dic: update(this.state.dic, {e: {target: {value: {$set: content} }}})})
        
        this.setState({
            dic: this.state.dic,
        });
    }

    // function is not call correctly  
    updateContent = (e: any, k: any) => {
        console.log(k)
        this.setState({dic: update(this.state.dic, {k: {$set: e.target.value}})})
        // this.state.dic[k] = e.target.value;
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
        console.log("line91")
        var value = document.getElementById("added-value") as HTMLInputElement;
        var attri_val = attri.value;
        var val_val = value.value;
        const newdic = {...this.state.dic, attri_val: val_val}; 
        this.setState({dic:newdic})
        // debugger
        // this.setState({dic:update(this.state.dic, {attri: {value: {$set: value.value}}})})

        // this.state.dic[attri.value] = value.value;
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
                    <HStack className="textdiv">
                        {/* <ParticlesBg num={50} type="lines" bg={true} /> */}
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
        return (
            <div className="overallbg">
                <ChakraHeadbar />
                <div >
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