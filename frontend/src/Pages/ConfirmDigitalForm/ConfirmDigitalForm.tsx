import { HStack } from "@chakra-ui/layout";
import axios from "axios";
import { Component } from "react";
import ChakraButton from "../../GlobalComponents/ChakraButton";
import ChakraHeadbar from "../../GlobalComponents/ChakraHeadbar/ChakraHeadbar";
import { Link, withRouter } from "react-router-dom";
import "./ConfirmDigitalForm.css";
import * as React from "react";

class ConfirmDigitalForm extends Component<any, any> {
  myRef: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      digitalForm: {},
      dict: {},
      newEntry: [],
      updateDic: false,
      count: 0,
      pendingCounts: [],
      selectedProjectId: {},
    };
    this.getJson = this.getJson.bind(this);
    this.populateDict = this.populateDict.bind(this);
    this.deleteAttri = this.deleteAttri.bind(this);
    this.updateAttri = this.updateAttri.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.inputAttri = this.inputAttri.bind(this);
    this.addAttri = this.addAttri.bind(this);
    this.submit = this.submit.bind(this);
    this.deleteAttri1 = this.deleteAttri1.bind(this);
    this.montprojectinfo = this.montprojectinfo.bind(this);

    // Calling the function getJson(): It is fetching the information from
    // the backend
    // this.getJson()

    this.state.selectedProjectId["projectID"] =
      this.props.location.state["projectID"];
    this.setState({
      selectedProjectId: this.state.selectedProjectId,
    });
  }

  getJson = () => {
    axios
      .get(
        `http://localhost:8080/form`
      )
      .then((response) => {
        this.setState({ digitalForm: response.data });
        // this.populateDict();
        // this.setState({ dic: this.state.dict });
      });
  };

  populateDict = () => {
    let dictCopy = this.state.dict;
    for (var key in this.state.digitalForm) {
      dictCopy[key] = this.state.digitalForm[key];
    }
    this.setState({ dict: dictCopy }, () => {
      console.log("this is postpopulateDict", this.state.dict);
    });
  };

  componentWillMount() {
    console.log(this.state.newEntry);
  }

  deleteAttri = (k: any) => {
    let deleteDictCopy = this.state.dict;
    console.log("this is predeleteAttri: ", deleteDictCopy);
    delete deleteDictCopy[k];
    // delete this.state.dict[k];
    this.setState({ dict: deleteDictCopy }, () => {
      console.log("this is postpopulateDict: ", this.state.dict);
    });
  };

  updateAttri = (e: any, originalKey: any, content: any) => {
    console.log("this is preupdatedAttri", this.state.dict);
    this.setState({ dict: this.state.dict }, () => {
      console.log("this is postupdatedAttri: ", this.state.dict);
    });
  };

  // function is not call correctly
  updateContent = (e: any, k: any) => {
    let updatedDictCopy = this.state.dict;
    console.log("this is preupdatedContent: ", updatedDictCopy);
    updatedDictCopy[k] = e.target.value;
    this.setState({ dict: updatedDictCopy }, () => {
      console.log("this is postupdatedContent: ", this.state.dict);
    });
  };

  inputAttri = () => {
    const thisCount = this.state.count;
    this.state.pendingCounts.push(thisCount);
    let newid = "added-attri" + thisCount.toString();
    let newval = "added-value" + thisCount.toString();
    this.state.newEntry.push(
      <div id={thisCount} key={thisCount} className="addattrMainDiv">
        <div
          id={thisCount}
          key={thisCount}
          className="addattrbox"
          ref={this.myRef}
        >
          <input
            className="addattrtext"
            id={newid}
            type="text"
            placeholder={"Attribute"}
            defaultValue=""
          ></input>
          :
          <input
            className="addattrtext"
            id={newval}
            type="text"
            placeholder="Content"
            defaultValue=""
          ></input>
          <div
            className="plus radius"
            onClick={() => this.addAttri(thisCount)}
          ></div>
          <div
            className="minus radius"
            onClick={() => this.deleteAttri1(thisCount)}
          ></div>
        </div>
      </div>
    );
    this.setState({
      dic: this.state.dict,
      count: this.state.count + 1,
      pendingCounts: this.state.pendingCounts,
    });
  };

  deleteAttri1 = (count: any) => {
    this.setState({
      newEntry: this.state.newEntry.filter(
        (entr: any) => Number.parseInt(entr.key) !== count
      ),
    });
  };

  addAttri = (count: any) => {
    let tempid = "added-attri" + count.toString();
    let tempval = "added-value" + count.toString();
    var attri = document.getElementById(tempid) as HTMLInputElement;
    var value = document.getElementById(tempval) as HTMLInputElement;
    let addedAttributeDictCopy = this.state.dict;
    const node = this.myRef.current;

    let tempNewEntry = [];
    tempNewEntry.push(node);

    this.setState({
      newEntry: this.state.newEntry.filter(
        (entr: any) => Number.parseInt(entr.key) !== count
      ),
    });
    console.log("this is preaddedAttributeDictCopy: ", addedAttributeDictCopy);
    addedAttributeDictCopy[attri.value] = value.value;
    this.setState({ dict: addedAttributeDictCopy }, () => {
      console.log("this is postaddedAttributeDictCopy: ", this.state.dict);
    });
  };

  submit = (project_id: any) => {
    axios
      .post(
        `http://localhost:8080/confirm/?projectID=${project_id}`,
        this.state.dict
      )
      .then((response) => console.log(response.data));
    alert("Successful upload medical records!");
  };

  montprojectinfo = (row: any) => {
    this.getJson();
    // var temp1: any = {
    //   name: 17,
    //   address: 9,
    //   value1 : "what's up",
    // };
    let temp1 = this.state.digitalForm;
    Object.keys(temp1).map(function(key: any) {
      row.push(
        <div>
          {/* {key}:{temp1[key]} */}
          <HStack className="textdiv">
            <div className="firstpart">{key}:</div>
            <div className="projsecondpart">
              {temp1[key]}
            </div>
          </HStack>
        </div>
      );
    });
  };

  render() {
    var rows:any = [];
    this.montprojectinfo(rows);
    for (var key in this.state.dict) {
      const k = key;

      rows.push(
        <div key={k}>
          <HStack className="textdiv">
            <div className="firstpart">{k}:</div>
            <div className="secondpart">
              <input
                className="textarea"
                id={k}
                type="text"
                defaultValue={this.state.dic[k]}
                onChange={(e: any) => this.updateContent(e, k)}
              ></input>
              <ChakraButton
                txtname={"Delete"}
                onClickFunction={() => this.deleteAttri(k)}
              />
            </div>
          </HStack>
        </div>
      );
    }
    return (
      <div className="bodyContainer">
        <ChakraHeadbar />
        <div className="mainbody">
          <div className="exceptSubmit">
            <div className="rows">{rows}</div>
            <div className="exceptRowsAndSubmit">
              <div>{this.state.newEntry}</div>
              <div className="addattr">
                <ChakraButton
                  txtname={"Add Attribute"}
                  onClickFunction={() => this.inputAttri()}
                />
              </div>
            </div>
          </div>
          <div className="submitbuttom">
            <Link
              to={{
                pathname: "/upload",
                state: {
                  projectID: this.state.selectedProjectId["projectID"],
                },
              }}
            >
              <ChakraButton
                txtname={"Add Attribute"}
                onClickFunction={() => this.inputAttri()}
              />
            </Link>
            <Link
              to={{
                pathname: "/digitalForm",
                state: {
                  form: this.state.dict,
                  projectID: this.state.selectedProjectId["projectID"],
                },
              }}
            >
              <ChakraButton
                txtname={"Submit"}
                onClickFunction={() =>
                  this.submit(this.state.selectedProjectId["projectID"])
                }
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ConfirmDigitalForm);
