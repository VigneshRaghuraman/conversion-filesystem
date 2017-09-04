/**
 * Created by Vignesh on 17/08/17.
 */

var convert = require('xlsx-to-json-lc');
const ctrlr = require('../lib/controller/conversion');




//This below request used to convert xlsx format to json and save it in new file .
/*
var req = {
    payload :{
        sheetName : "My Sheet",
        input: "j2x.xlsx",
        output: "sample.json",
        lowerCaseHeaders : true
    }
};

ctrlr.exceltojsonConversion(req,function (err, res) {
    console.log(err,res)
});

*/


//Below request will used to convert json data to pdf format and save it in a new directory
/*

var data = {
    payload : {
        pdfType : ["GENERAL"],
        pdfData :{
            emailId : "abcdefgh@gmail.com",
            companyName: "Hakuna Matata Solutions Pvt ltd.",
            name : "vignesh",
            amount : 100,
            phoneNumber : 1234567890,
            date : 17/5/2017,
            list : []
        }
    }
};

ctrlr.jsonToPdfConversion(data,function (err, res) {

});
*/
