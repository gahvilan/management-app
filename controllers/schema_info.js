


exports.index = function (req, res, next) {

  var data = SData.findOne();

  console.log(data);

  return res.render('data', {title: 'Lista de Algo', data: data})
}