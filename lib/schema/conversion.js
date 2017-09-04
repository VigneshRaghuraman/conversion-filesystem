/**
 * Created by Vignesh on 21/08/17.
 */

const joi = require('joi');

var external = {};

external.jsonToexcelConversionReq = joi.object({
    payload: {
        headerArray: joi.array().items(joi.object({
            name  : joi.string(),
            row   : joi.number(),
            column: joi.number()
        })).required(),
        listArray  : joi.array().items(joi.object()).required(),
        sheetKey   : joi.string().required(),
        sheetName  : joi.string().required()
    }
});

external.jsonToexcelConversionRes = joi.object();

external.exceltojsonConversionReq = joi.object({
    payload: {
        sheetName       : joi.string().required(),
        input           : joi.string().required(),
        output          : joi.string().required(),
        lowerCaseHeaders: joi.boolean()
    }
});

external.exceltojsonConversionRes = joi.array().items(joi.object());

external.jsonToPdfConversionReq = joi.object({
    payload: {
        pdfType: joi.array().items(joi.string().valid(['GENERAL'])).required(),
        pdfData: joi.object()
    }
});

external.jsonTopdfConversionRes = joi.object();

module.exports = external;