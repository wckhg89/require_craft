define(['terran/scv'], function (SCV) {
  var exports = {
    name : '커맨드센터',
    type : '건물',

    makeSCV : function (mineral) {
      if (mineral.remain >= 50) {
        console.log('SCV 생산중...');
        console.log('남은 미네랄 : ' + mineral.remain);
        console.log('SCV 생산 완료');
        mineral.remain = mineral.remain - 50;

        return SCV;
      }
    }
  };
  
  return exports;
});
