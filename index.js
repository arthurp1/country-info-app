// Country Information App

// Part 1 Create a Node.js application that does the following:

// Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array process.argv
// Reads and parses the countries.json file. Note: you must use readFile and not readFileSync.
// Outputs information about that specific country. Must be in the following format:
// Country: Netherlands Top Level Domain: .nl

// Part 2

// For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
// One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
// Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.


var express = require( 'express' )
var fs = require( 'fs' )
var reader = require ( __dirname + '/node_modules/json-file-reader/json-reader.js' )

var file = './countries.json'

function countryParser (country) {
    reader(file, function(jsonData){
        for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].name == country) 
            domain = jsonData[i].topLevelDomain 
        }
    console.log( 'Country: ' + country )
    console.log( 'The Top Level Domain is: ' + domain )
    });
};
	

countryParser(process.argv[2])


// Reads and parses the countries.json file. Note: you must use readFile and not readFileSync.

// Outputs information about that specific country. Must be in the following format:
