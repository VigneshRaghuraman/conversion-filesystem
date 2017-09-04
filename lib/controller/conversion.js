/**
 * Created by Vignesh on 21/08/17.
 */

const utils   = require('../utils/utilities');
const schema  = require('../schema/conversion');
const handler = require('../handler/conversion');

var external = {};

/**
 * controller - convert JSON to EXCEL FORMAT
 *
 * @param req - contains array with header and list details , sheet key and sheet name
 * @param reply - callback method contains result of created file
 */

external.jsonToexcelConversion = function (req, reply) {

    var methodname = "jsonToexcelConversion";

    let controllerRequest = {
        methodName          : methodname,
        requestPayloadSchema: schema.jsonToexcelConversionReq,
        responseSchema      : schema.jsonToexcelConversionRes,
        payload             : req.payload,
        method              : handler.jsonToexcelConversion
    };

    utils.modelMethodInvoker(controllerRequest, function (err, res) {
        if (err) {
            return reply(err)
        } else {
            return reply(null, res)
        }
    })
};


/**
 * ///controller - convert EXCEL to JSON FORMAT
 *
 * @param req - contains excel file name as input , json file as output , and sheetName
 * @param reply - contains the result as json
 */

external.exceltojsonConversion = function (req, reply) {

    var methodname = "exceltojsonConversion";

    let controllerRequest = {
        methodName          : methodname,
        requestPayloadSchema: schema.exceltojsonConversionReq,
        responseSchema      : schema.exceltojsonConversionRes,
        payload             : req.payload,
        method              : handler.excelTojsonConversion
    };

    utils.modelMethodInvoker(controllerRequest, function (err, res) {
        if (err) {
            return reply(err)
        } else {
            return reply(null, res)
        }
    })
};

/**
 * ///controller - convert JSON to PDF FORMAT
 *
 * @param req - contains json data that is to be converted as pdf file
 * @param reply - contains the result of the converted data
 */

external.jsonToPdfConversion = function (req, reply) {

    var methodname = "jsonToPdfConversion";

    let controllerRequest = {
        methodName          : methodname,
        requestPayloadSchema: schema.jsonToPdfConversionReq,
        responseSchema      : schema.jsonTopdfConversionRes,
        payload             : req.payload,
        method              : handler.jsonToPdfConversion
    };

    utils.modelMethodInvoker(controllerRequest, function (err, res) {
        if (err) {
            return reply(err)
        } else {
            return reply(null, res)
        }
    })
};

module.exports = external;