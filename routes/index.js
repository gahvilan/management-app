var express = require('express');
var router = express.Router();
const controller = require('../controllers/schema_info');

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express', info: data });
});

/* GET Userlist page. */
router.get('/data', function(req, res) {
    var db = req.db;
    var collection = db.get('schema_info');
    collection.find({},{},function(e,data){
        res.render('data', {
            "data" : data[0]
        });
    });
});

module.exports = router;
