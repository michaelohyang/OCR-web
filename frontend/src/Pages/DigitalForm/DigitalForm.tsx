import { Component } from "react"
import axios from "axios";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import "./DigitalForm.css";
// import ParticlesBg from "particles-bg";
import { Link, withRouter } from "react-router-dom";
import { HStack} from "@chakra-ui/layout";

class digitalForm extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            form: {},
            selectedProjectId: {},
            newEntry: [],
        };
        this.state.selectedProjectId["projectID"] = this.props.location.state["projectID"];
        this.state.form["form"] = this.props.location.state["form"];
        this.setState({
            selectedProjectId: this.state.selectedProjectId,
            form: this.state.form,
        });
        // console.log(this.state.form["form"]);
        // for (var key in this.props.location.state["form"]) {
        //     const k = key;
        //     console.log(k);
        //     console.log(this.props.location.state["form"][k]);
        // }
        // this.buildForm();
        // console.log(this.state.newEntry);
    }

    buildForm = () => {
        var rows = [];
        // this.state.newEntry.push(<div></div>);
        for (var key in this.state.form["form"]) {
            const k = key;
            rows.push(
                <div key={k}>
                    <HStack className="textdiv">
                        <div className="firstpart">{k}:</div>
                        <div className="firstpart">{this.state.form[k]}:</div>
                        {/* <div className="secondpart">
                        <input
                            className="textarea"
                            id={k}
                            type="text"
                            defaultValue={this.state.dic[k]}
                            onChange={(e: any) => this.updateContent(e, k)}
                        ></input>
                        <ChakraButton
                            txtname={"Delete"}
                            onClickFunc={() => this.deleteAttri(k)}
                        />
                        </div> */}
                    </HStack>
                </div>
            );
        }
        console.log(rows);
    }

    submit = () => {
        alert("Medical records are in your project!");
    }
    
    render() {
        var rows = [];
        console.log(this.state.form["form"]);
        for (var key in this.state.form["form"]) {
            const k = key;
            rows.push(
                <div key={k}>
                    <HStack className="textdiv">
                        <div className="firstpart">
                            {k}:    {this.state.form["form"][k]}
                        </div>
                    </HStack>
                </div>
            );
        }
        return(
            <div className="overallbg">
                <ChakraHeadbar />
                Digital form
                <div>
                    {rows}
                </div>
                <Link to={{pathname: "/confirm", state: {projectID: this.state.selectedProjectId["projectID"]}}}>
                    <div className="submitbuttom">
                        <ChakraButton
                            txtname={"Back"}
                            // onClickFunc={() => this.submit(1234)}
                        />
                    </div>
                </Link>
                <Link to={{pathname: "/"}}>
                    <div className="submitbuttom">
                        <ChakraButton
                            txtname={"Submit"}
                            onClickFunc={() => this.submit()}
                        />
                    </div>
                </Link>
            </div>
        );
    }
}

export default withRouter(digitalForm);