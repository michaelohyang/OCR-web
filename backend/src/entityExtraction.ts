import nlp from 'compromise'
const axios = require('axios');
var fs = require("fs");


async function extractAddress(text: string) {
    let regex = new RegExp("[0-9]{1,3} .+, .+, [A-Z]{2} [0-9]{5}"); // full address with state and zip code
    let result = text.match(regex)
    if (result == null) {
        // stree address only
        regex = /\d+\s[A-z]+\s[A-z]+/;
        result = text.match(regex)
        if (result == null) {
            return "null"
        } else {
            let full_address = result[0].replace(/(\r\n|\n|\r)/gm, " "); // remove \n
            let zip_regex = /[0-9]{5}/
            let zip_result = text.match(zip_regex)
            let api_key = "DemoOnly0071qYVwi9NpUu82Aqp6E6Y5i5obenc0oqc3xLxbxTEwuNhq4iLTCYaZ" // Save it as secret instead
            try {
                let res = await axios.get('https://www.zipcodeapi.com/rest/' + api_key + '/info.json/' + zip_result + '/degrees') //fetch city info using zip
                let data = res.data
                let city_name = data.city
                let state = data.state
                return `${full_address}, ${city_name}, ${state} ${zip_result}`
            } catch (err) {
                return full_address
            }
        }
    } else {
        return result[0].replace(/(\r\n|\n|\r)/gm, " ");
    }
}

function extractEmail(text: string) {
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    let result = text.match(regex)
    if (result == null) {
        return ""
    } else {
        return result[0]
    }
}

function extractPhoneNumber(text: string) {
    let phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let result = text.match(phoneno)
    if (result == null) {
        return "null"
    } else {
        return result[0]
    }
}

function extractName(text: string) {
    let doc = nlp(text)
    return doc.people().text()
}

//example
(async () => {

    try {
        const data = fs.readFileSync('./ConvertedFileToText/ocrResult.txt', 'utf8')
        console.log(extractPhoneNumber(data)) // phone
        console.log(extractName(data)) // name
        console.log(extractEmail(data)) //email
        console.log(await extractAddress(data)) // address
    } catch (err) {
        console.error(err)
    }

})()

module.exports = {
    extractAddress,
    extractEmail,
    extractName,
    extractPhoneNumber
};

//example
try {
  const data = fs.readFileSync('./ConvertedFileToText/ocrResult.txt', 'utf8')
  console.log(extractPhoneNumber(data)) // phone
  console.log(extractName(data)) // name
  console.log(extractAddress(data))//address
  console.log(extractEmail(data)) //email
} catch (err) {
  console.error(err)
}
module.exports = {extractAddress, extractEmail, extractName, extractPhoneNumber};
