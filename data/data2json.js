// 将原始数据集转换为JSON格式的数据集

var fs = require('fs');
try {
  fs.readFile('./iris.data', function(err, data) {
    if (err) throw err;
    data = data.toString().split("\n");
    var jsonData = [];

    for (var i = 0, len = data.length; i < len; ++i) {
      var _data = data[i].split(',');
      if (_data.length < 5) continue;
      var _type = _data.splice(4, 1)[0];
      jsonData.push({attribute: _data, type: _type});
    }

    fs.writeFile('iris.json', JSON.stringify(jsonData), function(err) {
      if (err) throw err;
    });

  });
} catch (err) {
  fs.appendFile('error.log', err, function(err) {
    if (err) {
      console.log("log error: ", err);
    }
  });
}