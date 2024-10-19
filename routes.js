'use strict';

module.exports = function(app){
    var json = require('./controller');

    app.route('/')
        .get(json.index);
    
    app.route('/tampilnmkitab')
        .get(json.tampilsemuanamakitab);

    app.route('/tampildeskripsikitab')
        .get(json.tampildeskripsikitab);
}