var api = require('../api')
    ,path = require('path');

module.exports = function(app) {

    app.route('/v1/tasks')
        .get(api.list);
    
    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};