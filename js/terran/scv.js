define(['terran/command_center'], function (CommandCenter) {

  console.log(CommandCenter);

  var exports = {
    name : 'scv',
    type : '유닛',

    getMineral : function (mineral) {
      console.log('미네랄 캐는중...');
      mineral.remain = mineral.remain + 8;
      console.log('남은 미네랄 : ' + mineral.remain);
    },
    getGas : function (gas) {
      console.log('가스 캐는중...');
      gas.remain = gas.remain + 8;
      console.log('남은 가스 : ' + gas.remain);
    },

    makeGasStation : function (mineral) {
      if (typeof CommandCenter !== undefined) {
        console.log('가스 스테이션 건설중...');
        mineral.remain = mineral.remain - 50;
        console.log('남은 미네랄 : ' + mineral.remain);
        console.log('가스 스테이션 건설완료');
      }
    }
  }

  return exports;
})
