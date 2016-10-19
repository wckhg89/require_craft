require.config({
  baseUrl : 'js',
  paths : {
    'mineral' : 'resource/mineral',
    'gas' : 'resource/gas'
  }
});

require(['terran/command_center', 'mineral', 'gas'] , function (CommandCenter, MineralModule, GasModule) {
  var scvs = [];

  for (var i = 0 ; i < 5 ; i++) {
    var scv = CommandCenter.makeSCV(MineralModule);
    scvs.push(scv);
  }

  for (var j = 0 ; j < 4 ; j++) {
    scvs[j].SCV.getMineral(mineral);
  }
s
  scvs[4].SCV.makeGasStation(mineral);
});
