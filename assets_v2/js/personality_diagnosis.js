$(function () {
  const QUESTION_LIST = [
    { no: "01", question: "周りの人と勝ち負けや順番を決める競争になったとしたら、あなたの本音は……", answer1: "もちろん、自分が一番になりたい。", answer2: "一番より二番めあたりがいい。", answer3: "競争からは降りていたい。", questionKind: "対人態度", answer1Type: "a", answer2Type: "b", answer3Type: "c" },
    { no: "02", question: "プライベートで自分がやりたいことで何か重要なことを決断するときは……", answer1: "信頼できる人に相談してから決める。", answer2: "決めるまでに、また決めても行動に移るまでに時間がかかる。", answer3: "あまり迷わず自分で決断し、決めたらすぐ実行に移す。", questionKind: "対人態度", answer1Type: "b", answer2Type: "c", answer3Type: "a" },
    { no: "03", question: "自分にとっては都合の悪い話や嫌な話を伝えられるときは……", answer1: "もってまわった言い方はせず、はっきり言ってもらった方がいい。", answer2: "あまりはっきり言われたくない。言い方に気をつかってほしい。", answer3: "", questionKind: "対人態度", answer1Type: "a", answer2Type: "b", answer3Type: "" },
    { no: "04", question: "友人に対して相手が聞いたら嫌だろうなと思うことを伝えなければならないとしたら、あなたの思いや態度は……", answer1: "誤解のないようはっきり言っておいた方がいいと思う。", answer2: "遠回しにわかるように話し相手に察してもらいたい。", answer3: "言わないで済ませたいのでなるべく友人から離れる。", questionKind: "対人態度", answer1Type: "a", answer2Type: "b", answer3Type: "c" },
    { no: "05", question: "早い者勝ちであなたがぜひとも欲しいと思っているものが手に入るというとき、「欲しい人は手を挙げて」と言われたら……", answer1: "迷わず「ハイ、欲しいです」と手を挙げる。", answer2: "自分には手に入りそうにないなと思う。", answer3: "まず周りの人の出方を見る。", questionKind: "対人態度", answer1Type: "a", answer2Type: "c", answer3Type: "b" },
    { no: "06", question: "あまり得意ではない家事で、一定量の作業を終わらせなければならないときは……", answer1: "さっさとやってさっさと終わらせる。", answer2: "始めるまでにも終わらせるにも時間がかかりそう。", answer3: "", questionKind: "対人態度", answer1Type: "a", answer2Type: "c", answer3Type: "" },
    { no: "07", question: "友人や恋人と話をしているときは……", answer1: "自分が話していることが多く、よく「わたしは(ぼくは、オレは)」という主語を口にする。", answer2: "自分は聞き役に回り、人がしゃべっているのを聞いていることの方が多い。", answer3: "相手の反応を気にしながら話し、同時に話し出した時は「どうぞ」と相手に会話を譲る。", questionKind: "対人態度", answer1Type: "a", answer2Type: "c", answer3Type: "b" },
    { no: "08", question: "友人や家族から、期待されていることがわかると……", answer1: "期待に応えられるようがんばりたい。", answer2: "期待されても困る。あまり期待されないほうがいい。", answer3: "", questionKind: "対人態度", answer1Type: "b", answer2Type: "c", answer3Type: "" },
    { no: "09", question: "友人の集まりで決まりそうになった活動について、あなたは反対意見なら……", answer1: "「自分は反対」とはっきりその場で自分の意見を言う。", answer2: "多数決なら仕方がないので、皆に合わせ多少の協力はする。", answer3: "とくに何も言わないが、その活動からは次第に身を引く。", questionKind: "対人態度", answer1Type: "a", answer2Type: "b", answer3Type: "c" },
    { no: "10", question: "人前に出たり、人の先頭に立ち、みなから注目を浴びるようなことがあると……", answer1: "正直、わりといい気分になり、ふだんよりも生き生きする。", answer2: "目立ちすぎると「出る杭は打たれる」と思うので、周りに気をつかう。", answer3: "あまり目立ちたくない。ふだんはなるべく人前には出たくない。", questionKind: "対人態度", answer1Type: "a", answer2Type: "b", answer3Type: "c" },
    { no: "11", question: "人に事務的な伝達事項といい知らせと悪い知らせの三つを伝えなければならないときは……", answer1: "いい知らせから伝える。", answer2: "悪い知らせから伝える。", answer3: "事務的な用件から伝える。", questionKind: "問題対処", answer1Type: "x", answer2Type: "z", answer3Type: "y" },
    { no: "12", question: "あなたに対する周りの評価はおおむね好意的、ただわずかにかなり否定的な意見も……", answer1: "否定的な評価で好意的な評価も台無しの気分になる。", answer2: "どちらの評価も受け入れ参考にする。", answer3: "否定的な方は気にせず忘れてしまう。", questionKind: "問題対処", answer1Type: "z", answer2Type: "y", answer3Type: "x" },
    { no: "13", question: "困難な状況に直面したとき、あなたにとってより大切だと思われる態度は……", answer1: "事実を受け入れ、一つひとつの問題を解決していくこと。", answer2: "きっとうまくいくと信じ、明るい見通しを持ち続けること。", answer3: "", questionKind: "問題対処", answer1Type: "x", answer2Type: "y", answer3Type: "" },
    { no: "14", question: "他人が感情的になって人前で怒ったり泣いたり感情をあらわにしているのを見ると……", answer1: "まあまあ、楽しくやろうよとなだめたくなる。", answer2: "感情丸出しでみっともないなあと思う。", answer3: "その感情に影響され、こっちまで気持ちががざわざわしてくる。", questionKind: "問題対処", answer1Type: "x", answer2Type: "y", answer3Type: "z" },
    { no: "15", question: "心配事やちょっと厄介な問題を抱えてしまったときは……", answer1: "一人で抱えていると悶々とするが、人に話せばすっきりする。", answer2: "何とかなるだろうと、自然にいい方に考えてしまう。", answer3: "その問題を解決するために淡々と行動する。", questionKind: "問題対処", answer1Type: "z", answer2Type: "x", answer3Type: "y" },
    { no: "16", question: "外出した先で、火の元や戸締りなどきちんとしてきたかどうか思い出せないと……", answer1: "火事にならないか、泥棒が入らないかなどと心配になる。", answer2: "たぶん大丈夫だろうと思い、それほど心配しない。", answer3: "", questionKind: "問題対処", answer1Type: "z", answer2Type: "x", answer3Type: "" },
    { no: "17", question: "大きなトラブルを抱えている友達が、あなたに「大丈夫だよね」と同意を求めてきたら……", answer1: "わからないと答える。", answer2: "大丈夫じゃないでしょと言う。", answer3: "大丈夫だよと言ってあげる。", questionKind: "問題対処", answer1Type: "y", answer2Type: "z", answer3Type: "x" },
    { no: "18", question: "自分の悩み事について人に相談したとき、まず相手に求めるのは……", answer1: "共感してくれなくてもいいので、有益で冷静なアドバイスがほしい。", answer2: "まずは自分の気持ちを汲み取って、「そうだね」という共感がほしい。", answer3: "", questionKind: "問題対処", answer1Type: "y", answer2Type: "z", answer3Type: "" },
    { no: "19", question: "個人的にはとくに悩みもなく、安泰の日々が続いていたら……", answer1: "このままずっと安泰の日々が続きそうな気がする。", answer2: "ただ自分のやりたいことややるべきことを続けていく。", answer3: "何かしら不安材料や気がかりなことが思い浮かぶ。", questionKind: "問題対処", answer1Type: "x", answer2Type: "y", answer3Type: "z" },
    { no: "20", question: "いまから百年後の世界はどうなっているかというと……", answer1: "いまより悪くなっているのではないかと思う。", answer2: "きっといまよりよくなっているはずだ。", answer3: "わからないがいまよりよくなっていてほしい。", questionKind: "問題対処", answer1Type: "z", answer2Type: "x", answer3Type: "y" },
  ];

  const FORM_NAME = "personalityDiagnosisQuestions";

  function prepareContents() {
    const $template_radioSet = $("#template_radioSet");
    const $template_radioSetItem = $("#template_radioSetItem");

    if ($template_radioSet.length === 0) {
      setTimeout(prepareContents, 100);
      return;
    }

    const template_radioSet = $template_radioSet.html();
    const template_radioSetItem = $template_radioSetItem.html();

    function cloneRadioItem(index, radioNo, answerType, answerLabel) {
      const cloneItem = $(template_radioSetItem);
      const idBase = _buildItemId(index);
      const name = FORM_NAME + _getTwoDigits(index);
      const inputId = `${idBase}-answer${radioNo}`;

      const itemInput = cloneItem.find(".radioSetItemInput");
      itemInput.attr({
        id: inputId,
        name: name,
        value: answerType,
        "data-index": index,
      });
      const itemInputLabel = cloneItem.find(".radioSetItemInputLabel");
      itemInputLabel.attr({ for: inputId });
      itemInputLabel.html(answerLabel);
      return cloneItem;
    }

    let index = 1;
    const $container = $("#personality-diagnosis--questions");
    $container.empty();

    for (const data of QUESTION_LIST) {
      const clone = $(template_radioSet);
      clone.attr("id", _buildItemId(index));
      clone.find(".radioSetLegendNo").html(`Q ${_getTwoDigits(index)}/20`);
      clone.find(".radioSetLegendTitle").html(data.question);

      const radioItems = clone.find(".radioSetItems");
      radioItems.append(cloneRadioItem(index, "1", data.answer1Type, data.answer1));
      radioItems.append(cloneRadioItem(index, "2", data.answer2Type, data.answer2));
      if (data.answer3) {
        radioItems.append(cloneRadioItem(index, "3", data.answer3Type, data.answer3));
      }
      $container.append(clone);
      index++;
    }

    $("#personality-diagnosis--button").on("click", () => {
      const result = executeDiagnosis();
      if (result) {
        $("#personality-diagnosis--modal .dialogMainContent").html(`タイプ ${result}`);
        $("#personality-diagnosis--modal").css("display", "flex");
      }
    });

    $("#personality-diagnosis--modal .dialogCloseButton").on("click", () => {
      $("#personality-diagnosis--modal").css("display", "none");
    });

    $(document).on("change", ".radioSetItemInput", (event) => {
      const index = $(event.target).data("index");
      if (index) {
        $(`#${_buildItemId(index)} > .radioSetItemsError`).hide();
      }
    });

    $("#personality-diagnosis--button").show();
    return true;
  }

  prepareContents();

  function executeDiagnosis() {
    const { answers, errors } = collectInputValues(FORM_NAME);
    if (errors.length > 0) {
      let firstErrorItemId = null;
      for (const errorIndex of errors) {
        const itemId = _buildItemId(errorIndex);
        $(`#${itemId} > .radioSetItemsError`).show();
        if (!firstErrorItemId) firstErrorItemId = itemId;
      }
      const scrollTop = $(`#${firstErrorItemId}`).offset().top;
      $("html, body").animate({ scrollTop: Math.max(0, scrollTop - 80) }, 500);
      return;
    }
    const type = calcResultType(answers);
    $("input[name='personalityDiagnosisResults']").val(type);
    return type;
  }

  function collectInputValues(formName) {
    const $form = $("form[name='" + formName + "']");
    const answers = [];
    const errors = [];
    for (let index = 1; index <= 20; ++index) {
      const questionInputName = formName + _getTwoDigits(index);
      const val = $form.find(`input[name='${questionInputName}']:checked`).val() || null;
      if (val === null) {
        errors.push(index);
      } else {
        answers[index] = val;
      }
    }
    return { answers, errors };
  }

  function calcResultType(answers) {
    var arr1 = [answers[1], answers[2], answers[4], answers[5], answers[7], answers[9], answers[10]];
    var arr2 = [answers[11], answers[12], answers[14], answers[15], answers[17], answers[19], answers[20]];

    var ma = countIf(arr1, "a"), mb = countIf(arr1, "b"), mc = countIf(arr1, "c");
    var mx = countIf(arr2, "x"), my = countIf(arr2, "y"), mz = countIf(arr2, "z");

    var mabc = Math.max(ma, mb, mc);
    var mxyz = Math.max(mx, my, mz);

    var abc = "";
    if (ma === mabc) abc = "a";
    if (mb === mabc) abc += "b";
    if (mc === mabc) abc += "c";
    if (abc === "ab") abc = answers[3];
    if (abc === "ac") abc = answers[6];
    if (abc === "bc") abc = answers[8];

    var xyz = "";
    if (mx === mxyz) xyz = "x";
    if (my === mxyz) xyz += "y";
    if (mz === mxyz) xyz += "z";
    if (xyz === "xy") xyz = answers[13];
    if (xyz === "xz") xyz = answers[16];
    if (xyz === "yz") xyz = answers[18];

    var typeMap = { "by": 1, "bx": 2, "ay": 3, "cz": 4, "cy": 5, "bz": 6, "ax": 7, "az": 8, "cx": 9 };
    return typeMap[abc + xyz] || "error";
  }

  function countIf(array, searchValue) {
    return array.filter(v => v === searchValue).length;
  }

  function _buildItemId(index) { return `personality-diagnosis-q-${index}`; }
  function _getTwoDigits(val) { return ("00" + val).slice(-2); }
});
