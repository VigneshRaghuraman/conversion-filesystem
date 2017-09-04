/**
 * Created by encore on 26/04/17.
 */
'use strict';

const fs              = require('fs');
const _               = require('underscore');
const ExcelWriter     = require('./excel-writer');
const DOWNLOAD_PATH   = './data.xlsx';
const FILE_DELETE_SEC = 60;


module.exports.generateSheet = (inputs, callBack) => {

    const fileName     = inputs.fileName;
    const saveFilePath = DOWNLOAD_PATH;
    const sheetKey     = inputs.sheetKey;
    const totDay       = inputs.data.length;

    let writer = new ExcelWriter({
        sheets       : [{
            name: inputs.sheetName,
            key : sheetKey,
        }],
        sheetRowCount: totDay + 3
    });

    /** Alignment Block **/
        //1st 5 Row for ASM,
    const data = inputs.data;
    /** Data Block ***/
    for (let i = 0; i < data.length; i++) {
        writer.worksheets[sheetKey].getRow(i + 1).values = data[i];
    }
    if (inputs.sheetKey == 'NPS') {
        writer.worksheets[sheetKey].columns = [{
            width: 28
        }, {
            width: 14
        }, {
            width: 19
        }, {
            width: 18
        }, {
            width: 22
        }, {
            width: 15
        }, {
            width: 22
        }, {
            width: 15
        }, {
            width: 15
        }];
    }

    writer.save()
        .then((stream) => {
            return stream.pipe(fs.createWriteStream(saveFilePath));
        })
        .then(() => {
            const exportUrl = DOWNLOAD_PATH + fileName;
            const urlObject = {
                publicUrl: exportUrl,
                fileName : fileName,
                localPath: saveFilePath
            };
            callBack(null, urlObject);
            setTimeout(function () {
                fs.unlink(fileName, function () {
                    // file deleted
                });
            }, (FILE_DELETE_SEC * 1000));
        })
        .catch(function (ex) {
            callBack(ex);
        })
};
