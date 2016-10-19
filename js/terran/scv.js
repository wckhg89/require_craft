define([], function () {
  var name = 'scv';
  var type = '유닛';

  var exports = {
    getMineral : function (MineralModule) {
      var mineral = MineralModule.getMineral();
      console.log('미네랄 캐는중...');
      MineralModule.setMmineral(mineral + 8);
      console.log('남은 미네랄 : ' + mineral);
    },
    getGas : function (GasModule) {
      var gas = GasModule.getGas();
      console.log('가스 캐는중...');
      GasModule.setGas(gas + 8)
      console.log('남은 가스 : ' + gas.remain);
    },

    makeGasStation : function (MineralModule) {
      var mineral = MineralModule.getMineral();
      console.log('가스 스테이션 건설중...');
      MineralModule.setMmineral(mineral - 50);
      console.log('남은 미네랄 : ' + mineral);
      console.log('가스 스테이션 건설완료');
    }
  };

  return exports;
});
