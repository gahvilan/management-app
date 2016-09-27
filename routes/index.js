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
    	for (var i =  0; i < data.length; i++) {
    		var suma1 = 0;
    		var suma2 = 0;
    		var suma3 = 0;
    		for (var k = 0; k < data[i].data.length; k++) {
    			suma1 = suma1 + data[i].data[k].values[0];
    			suma2 = suma2 + data[i].data[k].values[1];
    			suma3 = suma3 + data[i].data[k].values[2];
    		}
    		var totales = {first : suma1, second: suma2, third: suma3};
    		data[i].totales = totales;
    	}
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

router.post('/details/:id', function(req, res) {
    var db = req.db;
    var val = req.params.id;
    var collection = db.get('schema_info');
    collection.findOne({name: val},function(e,data){
        var arr_res = [];
        var arr_data = data.data;
        for (var i = 0; i < arr_data.length; i++) {
            var result = {};
            result.id = arr_data[i].id;
            result.name = arr_data[i].name; 
            result.values = []; 
            var v1 = 'ponderacion_'+arr_data[i].id;
            var v2 = 'grado_'+arr_data[i].id;
            var v3 = 'result_'+arr_data[i].id;
            result.values.push(parseInt(eval('req.body.'+v1)));
            result.values.push(parseInt(eval('req.body.'+v2)));
            result.values.push(parseInt(eval('req.body.'+v3)));
            arr_res.push(result);
        }
        collection.update({_id:data._id}, {$set : {data: arr_res}}, function(err, result) {
            if (err)
                console.log(result);
        });
        res.redirect('/data');
    });
});


module.exports = router;
