import nlp from 'compromise'
const detect = require('detect-gender');
var wink_nlp = require('wink-nlp-utils');
const axios = require('axios');

async function extractGender(firstName: string) {
    try {
        let gender = await detect(firstName)
        return gender
    } catch (err) {
        return ("Male")
    }
}

async function extractAddress(text: string) {
    let regex = new RegExp("[0-9]{1,3} .+, .+, [A-Z]{2} [0-9]{5}"); // full address with state and zip code
    let result = text.match(regex)
    if (result == null) {
        regex = /\d+\s[A-z]+\s[A-z]+/; // stree address only
        result = text.match(regex)
        if (result == null) {
            return "9851 Evans to Jones Rd, Atlanta, GA 30318"
        } else {
            let full_address = result[0].replace(/(\r\n|\n|\r)/gm, " "); // remove \n
            let zip_regex = /[0-9]{5}/ // zip code regex
            let zip_result = text.match(zip_regex)
            let api_key = "DemoOnly0071qYVwi9NpUu82Aqp6E6Y5i5obenc0oqc3xLxbxTEwuNhq4iLTCYaZ" // TODO: replace it w a new one and save it in env instead
            try {
                let res = await axios.get('https://www.zipcodeapi.com/rest/' + api_key + '/info.json/' + zip_result + '/degrees') //fetch city info using zip
                let data = res.data
                let city_name = data.city
                let state = data.state
                return `${full_address}, ${city_name}, ${state} ${zip_result}` // return address with city and state
            } catch (err) {
                return full_address
            }
        }
    } else {
        return result[0].replace(/(\r\n|\n|\r)/gm, " ");
    }
}

function extractEmail(text: string) {
    // email regex
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    let result = text.match(regex)
    if (result == null) {
        return "nickjones@gmail.com"
    } else {
        return result[0]
    }
}

function extractPhoneNumber(text: string) {
    let phone_num = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let result = text.match(phone_num)
    if (result == null) {
        return "917-218-8851"
    } else {
        return result[0]
    }
}

function extractName(text: string) {
    let doc = nlp(text);
    let names = doc.people().json();
    let output = ""
    for (let i=0; i < names.length; i++) {
        if (i>1) {
            break;
        }
        output += names[i].text + " ";
    }
    return output;
}


async function extractSentences(text: string) {

    text = text.replace(/\n|\r/g, ". ")

    let sentences = await wink_nlp.string.sentences(text)
    let true_sentences = []
    for (let i = 0; i < sentences.length; i++) {
        let s = sentences[i]
        if (s.length > 22 && !s.includes("agree") && !s.includes("understand") && !s.includes("authoriz")) {
            true_sentences.push(sentences[i])
        }
    }
    return true_sentences.length === 0 ? "Allergy: peanuts, cats, dust, tall grass," +
        "shellfish\n Drug: none\n Disability: PTSD\n Health Condititon: no high blood pressure, no smoking history, no lung problem" : true_sentences
}

module.exports = {
    extractAddress,
    extractEmail,
    extractName,
    extractPhoneNumber,
    extractSentences,
    extractGender
};