/**
 * Created by Vignesh on 16/08/17.
 */

const excel = require('exceljs');
const index = require('./../source/index-3');
const _ = require('underscore');
const ctrlr = require('../lib/controller/conversion');

var external = {};

var keyArray = [];
var headerArray = [{
    name: "organisation name",
    row: 2,
    column: 2
}, {
    name: "HakunaMata",
    row: 2,
    column: 5
}, {
    name: "organisation location",
    row: 1,
    column: 2
},
    {
        name: "chennai",
        row: 1,
        column: 5
    },{
        name : "",
        row : 2,
        column : 3
    },{
        name : "",
        row : 2,
        column : 3
    }
];
var listArray = [
    {
        firstName: "undertaker",
        "lastName": "Doe",
        "age": null,
        "streetAddress": "21 2nd Street",
        "city": "Las Vegas",
        "state": "NV",
        "postalCode": "10021-3100"
    }
];

var mainArray = {
    payload: {
        headerArray: headerArray,
        listArray: listArray,
        sheetKey: "NPS",
        sheetName: "My Sheet"
    }
};

ctrlr.jsonToexcelConversion(mainArray, function (err, res) {
    console.log(err, res)
});


module.exports = external;