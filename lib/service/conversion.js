/**
 * Created by Vignesh on 21/08/17.
 */

const convert      = require('xlsx-to-json-lc');
const pdfconverter = require('html-pdf');
const _            = require('underscore');
const shortid      = require('shortid');
const fs           = require('fs');
const index        = require('../../source/index-3');

var external = {};

//Convert Json to excel
external.jsonToexcelConversion = function (req, callback) {

    //Calling Service to generate the sheet
    index.generateSheet(req, function (error, result) {
        console.log("result", result)
    });

};

//Convert excel to Json
external.excelTojsonConversion = function (req, callback) {
    var payload = req.payload;
    convert({
        sheets          : payload.sheetName,
        input           : payload.input,
        output          : payload.output,
        lowerCaseHeaders: payload.lowerCaseHeaders
    }, function (err, result) {
        if (err) {
            return callback(err)
        } else {
            return callback(null, result)
        }
    });
};

//Convert Json to pdf
external.jsonTopdfConversion = function (req, callback) {
    pdfgenerator(req, function (err, res) {
        if (err) {
            return callback(err)
        } else {
            return callback(null, res)
        }
    })

};

//pdf Generator
function pdfgenerator(content, callback) {

    var template = _.template(content.template);
    var data     = content.data;

    var path = './pdfDocuments/' + shortid.generate() + '.pdf';
    var dir  = "./pdfDocuments/";

    //Checking whether temp directory is exists or not
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }

    //options for pdf User interface
    var options = {
        height: '13.5in', width: '8.5in', filename: path, format: "Letter", quality: '100', orientation: 'portrait',
        header: {
            height  : '10mm',
            contents: "<span style= color: #222;>"
        },
        footer: {
            height  : '20mm',
            contents: "<span style= color: #444;>{{page}}</span>/<span>{{pages}}</span>"
        }
    };

    pdfconverter.create(template({obj: data}), options).toFile(function (err, res) {
        if (err) {
            return callback(err)
        } else {
            return callback(null, {isConverted: true})
        }

    })
}

module.exports = external;