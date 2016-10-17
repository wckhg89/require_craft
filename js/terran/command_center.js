define(['terran/scv'], function (SCV) {
  var name = '커맨드센터';
  var type = '건물';

  var Scv = function (SCV) {
    this.SCV  = SCV;
  };

  var exports = {
    makeSCV : function (mineral) {
      if (mineral.remain >= 50) {
        console.log('SCV 생산중...');
        console.log('남은 미네랄 : ' + mineral.remain);
        console.log('SCV 생산 완료');
        mineral.remain = mineral.remain - 50;

        return new Scv(SCV); // 이렇게 리턴해주면 같은 객체를 참조하는 꼴임.
      }
    }
  };

  return exports;
});
