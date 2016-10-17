require.config({
  baseUrl : 'js',
  paths : {
    'mineral' : 'resource/mineral',
    'gas' : 'resource/gas'
  }
});

require(['terran/command_center', 'mineral'] , function (CommandCenter, mineral) {
  var scvs = [];


  for (var i = 0 ; i < 5 ; i++) {
    var scv = CommandCenter.makeSCV(mineral);
    scvs.push(scv);
  }

  for (var j = 0 ; j < 4 ; j++) {
    scvs[j].getMineral(mineral);
  }

  scvs[4].makeGasStation(mineral);


  scv.getMineral(mineral);
});
