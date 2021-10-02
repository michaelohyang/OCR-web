var fs = require('fs');

const convertTextToJSON = (filePath: String ) => {
    const texString: string = fs.readFileSync(filePath, 'utf8');
    let textArr: string[] = texString.split('\n');
    let infoMap: Map<string, string> = new Map();
    let tempInfo: string = "";
    textArr = textArr.map(e => e.toLowerCase());
    for (let i=0; i < textArr.length; i++) {
        if (textArr[i] == "name") {
            tempInfo = textArr[i+1];
            if (textArr[i+2] != "last name") {
                tempInfo = tempInfo + " " + textArr[i+2];
            }
            infoMap.set(textArr[i], tempInfo);
        } else if (textArr[i] == "street line") {
            infoMap.set(textArr[i], textArr[i-1]);
        } else if (textArr[i] == "street line 2" && textArr[i-1] != "street line") {
            infoMap.set(textArr[i], textArr[i-1]); 
        } else if (textArr[i] == "city") {
            infoMap.set(textArr[i], textArr[i-2]);
        } else if (textArr[i] == "state/province") {
            infoMap.set(textArr[i], textArr[i-2]);
        } else if (textArr[i] == "postal / zip code") {
            infoMap.set(textArr[i], textArr[i-1]);
        }
    }
    let result = Object.fromEntries(infoMap);6
    fs.unlinkSync(filePath);
    return result;
}

module.exports = {convertTextToJSON}