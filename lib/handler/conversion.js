/**
 * Created by Vignesh on 21/08/17.
 */

const _              = require('underscore');
const serv           = require('../service/conversion');
const html_templates = require('../config/template');

var external = {};

///handler - convert JSON to EXCEL FORMAT
external.jsonToexcelConversion = function (req, callback) {

    var mainArray   = {
        "sheetKey" : req.payload.sheetKey,
        "sheetName": req.payload.sheetName,
        "fileName" : "data.xlsx",
        data       : []
    };
    var listArray   = req.payload.listArray;
    var keyArray    = [];
    var headerArray = req.payload.headerArray;

    //forming KeyArray for Column Header
    _.each(listArray, function (eachData) {
        keyArray = Object.keys(eachData)
    });

    _.each(headerArray, function (eachData) {
        for (var i = 0; i <= eachData.row; i++) {
            if (!mainArray.data[i]) mainArray.data.push([])
        }
        for (var i = mainArray.data[eachData.row].length; i < eachData.column; i++) {
            if (!mainArray.data[eachData.row][i]) {
                mainArray.data[eachData.row][i] = ""
            }
        }
        mainArray.data[eachData.row].splice(eachData.column, 0, eachData.name);
    });

    //Pushing array into the main Array
    mainArray.data.push([]);
    mainArray.data.push(keyArray);

    _.each(listArray, function (eachData) {
        mainArray.data.push(_.values(eachData));
    });

    //calling service
    serv.jsonToexcelConversion(mainArray, function (err, res) {
        if (err) {
            return callback(err)
        } else {
            return callback(null, res)
        }
    })
};

///handler - convert EXCEL to JSON FORMAT
external.excelTojsonConversion = function (req, callback) {
    serv.excelTojsonConversion(req, function (err, res) {
        if (err) {
            return callback(err)
        } else {
            return callback(null, res)
        }
    })
};

///handler - convert JSON to PDF FORMAT
external.jsonToPdfConversion = function (req, callback) {
    serv.jsonTopdfConversion({
        template: html_templates.TEMPLATE.content,
        data    : req.payload.pdfData
    }, function (err, res) {
        if (err) {
            return callback(err)
        } else {
            return callback(null, res)
        }
    })
};

module.exports = external;