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
    	for (var i = data.length - 1; i >= 0; i--) {
    		var suma1 = 0;
    		var suma2 = 0;
    		var suma3 = 0;
    		for (var k = data[i].data.length - 1; k >= 0; k--) {
    			suma1 = suma1 + data[i].data[k].values[0];
    			suma2 = suma2 + data[i].data[k].values[1];
    			suma3 = suma3 + data[i].data[k].values[2];
    		}
    		var totales = {first : suma1, second: suma2, third: suma3};
    		data[i].totales = totales;
    	}
    	console.log(data);
        res.render('data', {"data" : data});
    });
});

router.get('/details/:id', function(req, res) {
    var db = req.db;
    var val = req.params.id;
    var collection = db.get('schema_info');
    collection.findOne({name: val},function(e,data){
        res.render('details', {
            "data" : data
        });
    });
});

module.exports = router;
