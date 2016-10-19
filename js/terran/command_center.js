define(['terran/scv'], function (SCV) {
  var name = '커맨드센터';
  var type = '건물';

  var Scv = function (SCV) {
    this.SCV  = SCV;
  };

  var exports = {
    makeSCV : function (MineralModule) {
      var mineral = MineralModule.getMineral();
      if (mineral >= 50) {
        console.log('SCV 생산중...');
        console.log('남은 미네랄 : ' + mineral));
        console.log('SCV 생산 완료');
        MineralModule.setMineral(mineral - 50);

        return new Scv(SCV);
      }
    }
  };

  return exports;
});
