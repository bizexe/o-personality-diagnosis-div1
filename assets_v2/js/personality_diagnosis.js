$(function () {
  // --- 診断結果データ（CSVから抽出） ---
  const RESULT_DETAILS = {
    male: {
      1: { title: "【真面目で責任感の強い男性】", desc: "物事を正しいか正しくないかで判断しようとします。人や物事のあるべき理想の姿を求め、高い基準を設けて行動します。理性的で秩序を重んじるタイプです。" },
      2: { title: "【やさしく思いやりのある男性】", desc: "理屈よりも気持ちを大切にし、困っている人がいると放っておけません。人とのつながりを重視し、周囲をサポートすることに喜びを感じます。" },
      3: { title: "【野心的で行動力のある男性】", desc: "目標達成に向けて効率的に動くことができます。自分の魅力をアピールするのが得意で、周囲から注目されることでさらに力を発揮します。" },
      4: { title: "【情緒豊かで美意識の高い男性】", desc: "独特の世界観を持ち、感受性が非常に豊かです。自分の内面を大切にし、平凡であることを避け、本質的な結びつきを求めます。" },
      5: { title: "【冷静で思慮深い男性】", desc: "物静かで観察力に優れています。感情に流されず、知識を蓄え、状況を客観的に分析してから行動する慎重派です。" },
      6: { title: "【誠実で義務を果たせる男性】", desc: "ルールや約束をしっかり守る、信頼できる人です。組織やコミュニティへの忠誠心が強く、周囲と協力しながら着実に進みます。" },
      7: { title: "【楽天的で好奇心旺盛な男性】", desc: "明るく社交的で、常に楽しいことを探しています。多才で切り替えが早く、周囲に活力を与えるムードメーカーです。" },
      8: { title: "【エネルギッシュでチャレンジ精神旺盛な男性】", desc: "意志が強く、困難にも真っ向から立ち向かいます。正義感が強く、自分の信念を貫き通すリーダーシップのある人です。" },
      9: { title: "【温厚で落ち着きのある男性】", desc: "平和を愛し、争い事を避けます。穏やかで誰にでも合わせることができ、周囲に安心感を与える癒やし系タイプです。" }
    },
    female: {
      1: { title: "【まじめで落ち着きのある女性】", desc: "善悪の基準がはっきりしており、常に正しくあろうと努めます。「こうあるべき」という基準を大切にし、落ち着いて物事を処理できる人です。" },
      2: { title: "【やさしく思いやりのある女性】", desc: "周囲の感情に敏感で、細やかな気遣いができます。人の役に立つことに幸せを感じ、温かい人間関係を築くのが得意です。" },
      3: { title: "【自分の魅力をアピールできる女性】", desc: "目標に向かって生き生きと活動します。効率性を重んじ、自分の長所を理解して周囲にポジティブな印象を与えるのが上手です。" },
      4: { title: "【内気で繊細、感情が豊かな女性】", desc: "自分の感受性を大切にするロマンチストです。人とは違う感性を持ち、深い理解や本質的な出会いを強く求める傾向があります。" },
      5: { title: "【物静かで控えめ、思慮深い女性】", desc: "分析的で独立心があります。感情をあまり表に出さず、まずはじっくりと考えてから一人の時間を大切にしつつ行動します。" },
      6: { title: "【誠実で相手に合わせられる女性】", desc: "責任感が強く、周囲との調和を大切にします。一度信頼した相手や場所を大切にし、サポート役に回ることで安心感を得られます。" },
      7: { title: "【明るく社交的な女性】", desc: "好奇心旺盛で、楽しいことが大好きです。切り替えが早く、ポジティブな見通しを持って周囲を明るくする魅力があります。" },
      8: { title: "【元気ではつらつとした女性】", desc: "自信に満ち、自分の意見をはっきり持っています。困難を恐れず、大切な人を守ろうとする強さと優しさを兼ね備えています。" },
      9: { title: "【穏和な癒し系の女性】", desc: "ゆったりとした雰囲気で周囲を包み込みます。対立を好まず、相手の意見を尊重できるため、非常に話しやすい印象を与えます。" }
    }
  };

  const QUESTION_LIST = [
    {
      no: "01",
      question: "性別を選択してください",
      answer1: "男性",
      answer2: "女性",
      answer3: "",
      questionKind: "基本属性",
      answer1Type: "male",
      answer2Type: "female",
      answer3Type: "",
    },
    {
      no: "02",
      question: "周りの人と勝ち負けや順番を決める競争になったとしたら、あなたの本音は……",
      answer1: "もちろん、自分が一番になりたい。",
      answer2: "一番より二番めあたりがいい。",
      answer3: "競争からは降りていたい。",
      questionKind: "対人態度",
      answer1Type: "a",
      answer2Type: "b",
      answer3Type: "c",
    },
    {
      no: "03",
      question: "プライベートで自分がやりたいことで何か重要なことを決断するときは……",
      answer1: "信頼できる人に相談してから決める。",
      answer2: "決めるまでに、また決めても行動に移るまでに時間がかかる。",
      answer3: "あまり迷わず自分で決断し、決めたらすぐ実行に移す。",
      questionKind: "対人態度",
      answer1Type: "b",
      answer2Type: "c",
      answer3Type: "a",
    },
    {
      no: "04",
      question: "自分にとっては都合の悪い話や嫌な話を伝えられるときは……",
      answer1: "もってまわった言い方はせず、はっきり言ってもらった方がいい。",
      answer2: "あまりはっきり言われたくない。言い方に気をつかってほしい。",
      answer3: "",
      questionKind: "対人態度",
      answer1Type: "a",
      answer2Type: "b",
      answer3Type: "",
    },
    {
      no: "05",
      question: "友人に対して相手が聞いたら嫌だろうなと思うことを伝えなければならないとしたら、あなたの思いや態度は……",
      answer1: "誤解のないようはっきり言っておいた方がいいと思う。",
      answer2: "遠回しにわかるように話し相手に察してもらいたい。",
      answer3: "言わないで済ませたいのでなるべく友人から離れる。",
      questionKind: "対人態度",
      answer1Type: "a",
      answer2Type: "b",
      answer3Type: "c",
    },
    {
      no: "06",
      question: "早い者勝ちであなたがぜひとも欲しいと思っているものが手に入るというとき、「欲しい人は手を挙げて」と言われたら……",
      answer1: "迷わず「ハイ、欲しいです」と手を挙げる。",
      answer2: "自分には手に入りそうにないなと思う。",
      answer3: "まず周りの人の出方を見る。",
      questionKind: "対人態度",
      answer1Type: "a",
      answer2Type: "c",
      answer3Type: "b",
    },
    {
      no: "07",
      question: "あまり得意ではない家事で、一定量の作業を終わらせなければならないときは……",
      answer1: "さっさとやってさっさと終わらせる。",
      answer2: "始めるまでにも終わらせるにも時間がかかりそう。",
      answer3: "",
      questionKind: "対人態度",
      answer1Type: "a",
      answer2Type: "c",
      answer3Type: "",
    },
    {
      no: "08",
      question: "友人や恋人と話をしているときは……",
      answer1: "自分が話していることが多く、よく「わたしは」という主語を口にする。",
      answer2: "自分は聞き役に回り、人がしゃべっているのを聞いていることの方が多い。",
      answer3: "相手の反応を気にしながら話し、同時に話し出した時は「どうぞ」と譲る。",
      questionKind: "対人態度",
      answer1Type: "a",
      answer2Type: "c",
      answer3Type: "b",
    },
    {
      no: "09",
      question: "友人や家族から、期待されていることがわかると……",
      answer1: "期待に応えられるようがんばりたい。",
      answer2: "期待されても困る。あまり期待されないほうがいい。",
      answer3: "",
      questionKind: "対人態度",
      answer1Type: "b",
      answer2Type: "c",
      answer3Type: "",
    },
    {
      no: "10",
      question: "友人の集まりで決まりそうになった活動について、あなたは反対意見なら……",
      answer1: "「自分は反対」とはっきりその場で自分の意見を言う。",
      answer2: "多数決なら仕方がないので、皆に合わせ多少の協力はする。",
      answer3: "とくに何も言わないが、その活動からは次第に身を引く。",
      questionKind: "対人態度",
      answer1Type: "a",
      answer2Type: "b",
      answer3Type: "c",
    },
    {
      no: "11",
      question: "人前に出たり、人の先頭に立ち、みなから注目を浴びるようなことがあると……",
      answer1: "正直、わりといい気分になり、ふだんよりも生き生きする。",
      answer2: "目立ちすぎると「出る杭は打たれる」と思うので、周りに気をつかう。",
      answer3: "あまり目立ちたくない。ふだんはなるべく人前には出たくない。",
      questionKind: "対人態度",
      answer1Type: "a",
      answer2Type: "b",
      answer3Type: "c",
    },
    {
      no: "12",
      question: "いい知らせと悪い知らせ、事務的な用件の三つを伝えるときは……",
      answer1: "いい知らせから伝える。",
      answer2: "悪い知らせから伝える。",
      answer3: "事務的な用件から伝える。",
      questionKind: "問題対処",
      answer1Type: "x",
      answer2Type: "z",
      answer3Type: "y",
    },
    {
      no: "13",
      question: "あなたに対する周りの評価。わずかに否定的な意見もあるときは……",
      answer1: "否定的な評価で好意的な評価も台無しの気分になる。",
      answer2: "どちらの評価も受け入れ参考にする。",
      answer3: "否定的な方は気にせず忘れてしまう。",
      questionKind: "問題対処",
      answer1Type: "z",
      answer2Type: "y",
      answer3Type: "x",
    },
    {
      no: "14",
      question: "困難な状況に直面したとき、より大切だと思われる態度は……",
      answer1: "事実を受け入れ、一つひとつの問題を解決していくこと。",
      answer2: "きっとうまくいくと信じ、明るい見通しを持ち続けること。",
      answer3: "",
      questionKind: "問題対処",
      answer1Type: "x",
      answer2Type: "y",
      answer3Type: "",
    },
    {
      no: "15",
      question: "他人が感情をあらわにしているのを見ると……",
      answer1: "まあまあ、楽しくやろうよとなだめたくなる。",
      answer2: "感情丸出しでみっともないなあと思う。",
      answer3: "その感情に影響され、こっちまで気持ちがざわざわしてくる。",
      questionKind: "問題対処",
      answer1Type: "x",
      answer2Type: "y",
      answer3Type: "z",
    },
    {
      no: "16",
      question: "心配事やちょっと厄介な問題を抱えてしまったときは……",
      answer1: "一人で抱えていると悶々とするが、人に話せばすっきりする。",
      answer2: "何とかなるだろうと、自然にいい方に考えてしまう。",
      answer3: "その問題を解決するために淡々と行動する。",
      questionKind: "問題対処",
      answer1Type: "z",
      answer2Type: "x",
      answer3Type: "y",
    },
    {
      no: "17",
      question: "外出先で火の元や戸締りが思い出せないと……",
      answer1: "火事にならないか、泥棒が入らないかなどと心配になる。",
      answer2: "たぶん大丈夫だろうと思い、それほど心配しない。",
      answer3: "",
      questionKind: "問題対処",
      answer1Type: "z",
      answer2Type: "x",
      answer3Type: "",
    },
    {
      no: "18",
      question: "大きなトラブルを抱えている友達に同意を求められたら……",
      answer1: "わからないと答える。",
      answer2: "大丈夫じゃないでしょと言う。",
      answer3: "大丈夫だよと言ってあげる。",
      questionKind: "問題対処",
      answer1Type: "y",
      answer2Type: "z",
      answer3Type: "x",
    },
    {
      no: "19",
      question: "自分の悩み事について人に相談したとき、まず求めるのは……",
      answer1: "共感してくれなくてもいいので、有益なアドバイスがほしい。",
      answer2: "まずは自分の気持ちを汲み取ってほしい。",
      answer3: "",
      questionKind: "問題対処",
      answer1Type: "y",
      answer2Type: "z",
      answer3Type: "",
    },
    {
      no: "20",
      question: "個人的には安泰の日々が続いていたら……",
      answer1: "このままずっと安泰の日々が続きそうな気がする。",
      answer2: "ただ自分のやりたいことややるべきことを続けていく。",
      answer3: "何かしら不安材料や気がかりなことが思い浮かぶ。",
      questionKind: "問題対処",
      answer1Type: "x",
      answer2Type: "y",
      answer3Type: "z",
    },
    {
      no: "21",
      question: "いまから百年後の世界はどうなっているか……",
      answer1: "いまより悪くなっているのではないかと思う。",
      answer2: "きっといまよりよくなっているはずだ。",
      answer3: "わからないがいまよりよくなっていてほしい。",
      questionKind: "問題対処",
      answer1Type: "z",
      answer2Type: "x",
      answer3Type: "y",
    },
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
      clone.find(".radioSetLegendNo").html(`Q ${_getTwoDigits(index)}/${QUESTION_LIST.length}`);
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
      const resultData = executeDiagnosis();
      if (resultData) {
        $("#personality-diagnosis--modal .dialogTop").html(`🎉 あなたは${resultData.title} 🎉`);
        $("#personality-diagnosis--modal .dialogMainContent").html(resultData.desc);
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

    const gender = answers[1]; // Q1の回答（male or female）
    const type = calcResultType(answers);
    
    // データ取得
    const detail = RESULT_DETAILS[gender][type];
    
    $("input[name='personalityDiagnosisResults']").val(`Type ${type} (${gender})`);
    return detail;
  }

  function collectInputValues(formName) {
    const $form = $("form[name='" + formName + "']");
    const answers = [];
    const errors = [];
    for (let index = 1; index <= QUESTION_LIST.length; ++index) {
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

  /**
   * 性格診断計算（設問が1つずれたためインデックスを調整）
   */
  function calcResultType(answers) {
    // 設問Q1が性別のため、旧Q1〜Q10は answers[2]〜[11]になる
    var arr1 = [answers[2], answers[3], answers[5], answers[6], answers[8], answers[10], answers[11]];
    // 旧Q11〜Q20は answers[12]〜[21]になる
    var arr2 = [answers[12], answers[13], answers[15], answers[16], answers[18], answers[20], answers[21]];

    var ma = countIf(arr1, "a"), mb = countIf(arr1, "b"), mc = countIf(arr1, "c");
    var mx = countIf(arr2, "x"), my = countIf(arr2, "y"), mz = countIf(arr2, "z");

    var mabc = Math.max(ma, mb, mc);
    var mxyz = Math.max(mx, my, mz
