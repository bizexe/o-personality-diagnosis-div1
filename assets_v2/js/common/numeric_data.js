/* ------------------------------------------------------------
定期更新対象の自動入力(PC,SP共通)
2024/09/30 ローディング付きに修正（古川）
------------------------------------------------------------*/
(function($) {

  var methods = {
    init: function(argOptions) {
      return this.each(function() {
        $('#overlay').show();  // ローディングアイコンを表示

        $('span.memberCnt').html('35,159'); /* 会員数(all) */
        $('span.memberCntAbout').html('35,000'); /* 会員数(all概算) */
        $('span.memberCntM').html('23,306'); /* 会員数(男性) */
        $('span.memberCntF').html('11,853'); /* 会員数(女性) */
        $('span.pauseCnt').html('8,072'); /* 休止中会員数 */
        $('span.defineDate').html('2025年1月1日'); /* 基準日 */

        /* オーネット会員＋IBJ会員 */
        $('span.memberCntIbj').html('122,776'); /* 会員数 */
        $('span.memberCntAboutIbj').html('12.2万'); /* 会員数・概算 */
        $('span.defineDateIbj').html('2025年1月1日'); /* 基準日 */
        $('span.thisYear').html('2025'); /* 今年の西暦 */
        $('span.topTextIbj').html('当社は、登録会員数、お見合い数、および成婚数No.1（＊）のIBJの加盟相談所です。<br>＊日本マーケティングリサーチ機構調べ（成婚数/お見合い数:2024年累計、会員数:2024年12月末時点、2025年2月期_指定領域における市場調査）＊成婚数:IBJ連盟内での成婚者数'); /* 業界最大級・No.1注釈文 */

        /* 全共通 */
        $('span.newMemberCnt').html('12,419'); /* 年間新規入会者数(all) */
        $('span.newMemberTwelveSplit').html('1,035'); /* 年間新規入会者数(all) 12分割 */
        $('span.newMemberCntM').html('7,056'); /* 年間新規入会者数(男性) */
        $('span.newMemberCntF').html('5,363'); /* 年間新規入会者数(女性) */
        $('span.marriageCnt').html('7,845'); /* 年間成婚者数(all) */
        $('span.marriageCntInternal').html('3,702'); /* 年間成婚者数(internal) */
        $('span.marriageCplInternal').html('1,882'); /* 年間成婚組(internal) */
        $('span.marriageCntExternal').html('4,143'); /* 年間成婚者数(external) */
        $('span.remarriagePercent').html('16'); /* 年間再婚パーセント */
        $('span.activityPeriodMeetMonth').html('6'); /* お相手に出会うまでの活動期間 */
        $('span.Meet6monthPercent').html('57'); /* 6カ月以内にお相手と出会うパーセント */
        $('span.marriageCntDaily').html('10'); /* 1日あたりの成婚者数(all) */
        $('span.marriageCntSum').html('159,108'); /* 累計成婚者数(all) */
        $('span.pauseMonth').html('約10カ月'); /* 交際期間 */
        $('span.pauseMonthM').html('10.02'); /* 交際期間(男性) */
        $('span.pauseMonthF').html('10.01'); /* 交際期間(女性) */
        $('span.lastYear').html('2024'); /* 前年の西暦 */
        $('span.branchCnt').html('39'); /* 店舗数 */
        $('span.foundedYears').html('45'); /* 創業年数 */
        $('span.capital').html('1億'); /* 資本金 */
        $('span.employeeCnt').html('409'); /* 従業員数 */
        $('span.corporateAllianceCnt').html('781'); /* 法人提携数 */
        $('span.corporateAllianceCntAbout').html('780'); /* 法人提携数(all概算) */
        $('span.marriagePeakStart').html('10'); /* 入会から成婚退会までのピーク(開始) */
        $('span.marriagePeakEnd').html('12'); /* 入会から成婚退会までのピーク(終了) */
        $('span.defineDateCorporateAlliance').html('2024年4月1日'); /* 法人提携数基準日 */

        /* スーペリア */
        $('span.marriageHistory').html('59'); /* 婚姻歴がある人の割合 */

        $('#overlay').hide();  // ローディングアイコンを非表示
      });
    }
  };


  $.fn.onetStatistics = function(argMethod) {
    if (methods[argMethod]) {
      return methods[argMethod].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof(argMethod) === 'object' || !argMethod) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Methos ' + argMethod + ' does not exist on jQuery.onetStatistics');
    }
  };
})(jQuery);

/* ------------------------------------------------------------
  document.ready
------------------------------------------------------------*/
jQuery(document).ready(function($) {
  $('#overlay').show();  // ローディングアイコンを表示
  setTimeout(function(){
    $(document).onetStatistics();
  }, 1500);
});
