# csvtojson [![NPM version](https://badge.fury.io/js/csvtojson.svg)](https://npmjs.org/package/csvtojson) [![Build Status](https://travis-ci.org/node-components/csvtojson.svg?branch=master)](https://travis-ci.org/node-components/csvtojson)

> conversion of csv to json and vice versa

## Installation

```sh
$ npm install --save csvtojson
```

## Usage

```js
var csvtojson = require('csvtojson');
csvtojson();
```

## License

ISC © [vignesh]()


## Description

This Module used to Convert Excel to JSON and vice versa , used to convert JSON to pdf

## API's

1. JSON to PDF Conversion **

Request         : Contains JSON data as an input
Sample Request  : var data = {
                      payload : {
                          pdfType : ["GENERAL"],
                          pdfData :{
                              emailId : "abcdefgh@gmail.com",
                              companyName: "Hakuna Matata Solutions Pvt ltd.",
                              name : "user_name",
                              amount : 100,
                              phoneNumber : 1234567890,
                              date : 17/5/2017
                          }
                      }
                  };
Response        : A new file will be created under pdfDocuments

2. JSON to Excel Conversion **

Request         : Contains JSON data as input , and we can specify the row and column position where the data has to be revealed.
                  It contains headerArray and listArray.
                  Header Array will contain header content
                  List Array will contain list data which is shown as table


Sample Request  :   var headerArray = [{
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
                    }];
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
Response        :   A new Excel format sheet will be generated


3. Excel to JSON Conversion:

Request         :  Request contains as excel file
Sample Request  :   var req = {
                        payload :{
                            sheetName : "My Sheet",
                            input: "j2x.xlsx",
                            output: "sample.json",
                            lowerCaseHeaders : true
                        }
                    };
Response        : A new json file will be generated with the specified name in request.

