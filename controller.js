'use strict';
var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan", res);
};

exports.tampilsemuanamakitab = function(req, res) {
    connection.query('SELECT nm_kitab FROM kitab', function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.tampildeskripsikitab = function(req, res) {
    connection.query('SELECT deskripsi_kitab FROM kitab', function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};
