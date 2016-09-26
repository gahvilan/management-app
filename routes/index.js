var express = require('express');
var router = express.Router();
const controller = require('../controllers/schema_info');

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express', info: data });
});

router.get('/data', function(req, res) {
    var db = req.db;
    var collection = db.get('schema_info');
    collection.find({},{},function(e,data){
        res.render('data', {
            "data" : data
        });
    });
});

router.get('/details/:id', function(req, res) {
    var db = req.db;
    var val = req.params.id;
    var collection = db.get('schema_info');
    collection.findOne({name: val},function(e,data){
    	console.log(data);
        res.render('details', {
            "data" : data
        });
    });
});

module.exports = router;
