$(function () {
  // --- 診断データの定義（CSV 14項目すべてを格納） ---
  const RESULT_DETAILS = {
    male: {
      1: {
        intro: "あなたは【真面目で責任感の強い男性】です",
        pattern: "物事を正しいか正しくないかで判断しようとします。人や物事のあるべき理想の姿を求め、高い基準を設けて行動します。理性的であろうとし、秩序立てて物事を処理します。",
        attitude: "自立心の強い人ですが、協調性もあります。誰に対しても平等公平に接し、嘘やごまかしがなく率直です。昔からの友人を大切にします。",
        traits: "勤勉な努力家で、何事もきちんとしていないと気がすみません。完璧主義な面があり、社会をよくしていきたいという強い正義感を持っています。",
        marriage: "結婚について真剣に考えています。夫婦は一生添い遂げるべきものと考え、お互いに多少の我慢と忍耐は必要だという保守的な考えを持っています。",
        partner1Type: "タイプ６",
        partner1Rel: "常識があり、家庭のことをしっかり受け持ってくれる女性がふさわしいでしょう。あまり我が強すぎず、協調性のある女性がおすすめです。",
        partner1App: "ご自分のこだわりを述べるより、相手の方がリラックスできる雰囲気作りを。軽い冗談やユーモアを取り入れて緊張を解きましょう。",
        partner2Type: "タイプ４",
        partner2Rel: "情緒性があり、フェミニンなやさしさのある女性がよさそうです。音楽や手芸など、日々の生活に潤いをもたらすパートナーが合っています。",
        partner2App: "お相手の方がどういう趣味を持ち、何を好むのかを尋ねてみましょう。お互いの感覚が合いそうかじっくり感じ取ってください。",
        failFactor: "お相手に対してかなり厳しい基準をお持ちのようです。欠点や至らない点に目を向けがちで、パーフェクトを求めすぎていませんか？",
        advice: "「こうでなければならない」というこだわりを一度手放し、相手のいいところに目を向けてみましょう。ポジティブな見方が運命を変えます。"
      },
      // ... 他のタイプも同様にCSVから全抽出 ...
      // ※ここではタイプ1の例を示していますが、納品時は1-9すべて含めます。
    },
    female: {
      1: {
        intro: "あなたは【まじめで落ち着きのある女性】です",
        pattern: "何事も真剣に考え、善悪の基準で判断します。「こうあるべき」という基準に従い、地に足の着いた行動で秩序立てて物事を処理できる人です。",
        attitude: "自立心と協調性のバランスが良く、常識やマナーを守ります。親しい間柄でもけじめを大切にし、人間的に信頼できる人という印象を与えます。",
        traits: "責任感が強く自分に厳しい努力家です。いい加減なことが嫌いで、やるべきことは完璧にこなそうとします。社会の善い方向を願う人です。",
        marriage: "恋愛も結婚も真剣です。誠実で信頼できる人を望み、結婚は一生のもの、夫婦は添い遂げるものという強い信念を持っています。",
        partner1Type: "タイプ７",
        partner1Rel: "明るくポジティブな男性がお勧めです。活発な方ならあなたも気楽に付き合え、お相手もあなたの堅実さを信頼できる魅力と感じるでしょう。",
        partner1App: "お相手の話に耳を傾け、テンポを合わせてみましょう。笑顔を忘れず、一緒にいて楽しいと感じられる会話を心がけてください。",
        partner2Type: "タイプ６",
        partner2Rel: "常識を大切にし、しっかりした将来設計を描いている方がふさわしいでしょう。二人で堅実な家庭を築いていくことができます。",
        partner2App: "あなた自身の家族や友人の話をすると親しみを持ってもらえます。お相手の将来の夢を聞き、価値観の近さを確認しましょう。",
        failFactor: "お相手に厳しい基準を課していませんか？「ここが気に入らない」と欠点に目を向け、パーフェクトな相手を探しすぎているかもしれません。",
        advice: "こだわりをいったん手放し、間口を広げてみましょう。自分も相手も、良いところを見つけて褒めることが出会いの近道です。"
      },
      // ... 他のタイプも同様 ...
    }
  };

  // ※ 実際の実装では1-9までの全データをCSV  から書き写します。

  // --- 表示処理の更新 ---
  $("#personality-diagnosis--button").on("click", () => {
    const result = executeDiagnosis(); // 詳細データ一式を取得
    if (result) {
      const reportHtml = `
        <div class="report-container">
          <div class="report-header">
            <h2>婚活性格診断結果報告書</h2>
            <div class="result-main-title">${result.intro}</div>
          </div>

          <div class="report-chapter">
            <span class="chapter-title">第1章：あなたの本質</span>
            <div class="item-label">考え方・行動パターン</div>
            <div class="item-text">${result.pattern}</div>
            <div class="item-label">対人態度</div>
            <div class="item-text">${result.attitude}</div>
            <div class="item-label">性格傾向</div>
            <div class="item-text">${result.traits}</div>
          </div>

          <div class="report-chapter">
            <span class="chapter-title">第2章：恋愛・結婚観</span>
            <div class="item-text">${result.marriage}</div>
          </div>

          <div class="report-chapter">
            <span class="chapter-title">第3章：理想のパートナー</span>
            <div class="partner-box">
              <span class="partner-type-badge">おすすめ①：${result.partner1Type}</span>
              <p><strong>【関係性】</strong><br>${result.partner1Rel}</p>
              <p class="u-mt8"><strong>【アプローチ】</strong><br>${result.partner1App}</p>
            </div>
            <div class="partner-box">
              <span class="partner-type-badge">おすすめ②：${result.partner2Type}</span>
              <p><strong>【関係性】</strong><br>${result.partner2Rel}</p>
              <p class="u-mt8"><strong>【アプローチ】</strong><br>${result.partner2App}</p>
            </div>
          </div>

          <div class="report-chapter">
            <span class="chapter-title">第4章：幸せへの鍵</span>
            <div class="item-label">うまくいかない要因は？</div>
            <div class="warning-box item-text">${result.failFactor}</div>
            <div class="item-label">ワンポイントアドバイス</div>
            <div class="item-text" style="border-left-color: var(--color-primary);">${result.advice}</div>
          </div>

          <div class="report-seal">ONET<br>鑑定済</div>
        </div>
      `;

      $("#personality-diagnosis--modal .dialog").html(`
        <button type="button" class="dialogCloseButton">×</button>
        ${reportHtml}
      `);
      $("#personality-diagnosis--modal").css("display", "flex");
    }
  });

  // （その他の質問生成・計算ロジックは前回同様）
});
