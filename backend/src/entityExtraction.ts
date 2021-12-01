import nlp from 'compromise'
var fs = require("fs");

// Still working on it
function extractAddress(text:string){
  let regex = new RegExp("[0-9]{1,3} .+, .+, [A-Z]{2} [0-9]{5}");
  let result = text.match(regex)
  if (result == null) {
    regex = /^\d+\s[A-z]+\s[A-z]+/g;
    result = text.match(regex)
    if (result == null) {
      return "null"
    } else {
      return result[0]
    }
  } else {
    return result[0]
  }
}
function extractEmail(text:string){
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  let result = text.match(regex)
  if (result == null) {
    return ""
  } else {
    return result[0]
  }
}
function extractPhoneNumber(text:string) {
  let phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  let result = text.match(phoneno)
  if (result == null) {
    return "null"
  } else {
    return result[0]
  }
}

function extractName(text:string) {
  let doc = nlp(text)
  return doc.people().text()
}

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