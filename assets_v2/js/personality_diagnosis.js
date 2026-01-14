$(function () {
  // --- CSV全項目データ (タイプ1-9, 男女) ---
  const RESULT_DETAILS = {
    male: {
      1: { intro: "真面目で責任感の強い男性", pattern: "物事を正しいか正しくないかで判断しようとします。間違ったことや不正は許せません。理想の姿を求め、高い基準を設けて行動します。", attitude: "自立心の強い人ですが協調性もあります。誰に対しても平等公平で、嘘やごまかしがなく率直です。", traits: "勤勉な努力家で忍耐強いタイプ。何事もきちんとしていないと気がすまず、完璧主義な面があります。", marriage: "恋愛・結婚についても真面目です。一生添い遂げるべきものと考え、多少の我慢と忍耐は必要だと思っています。", partner1Type: "タイプ６", partner1Rel: "常識があり、家庭のことをしっかり受け持ってくれる女性がふさわしいでしょう。", partner1App: "こだわりを述べるより、相手がリラックスできる雰囲気作りを。軽い冗談を取り入れて緊張を解きましょう。", partner2Type: "タイプ４", partner2Rel: "情緒性があり、フェミニンなやさしさのある女性がよさそうです。生活に潤いをもたらします。", partner2App: "お相手の趣味や好みを尋ねてみましょう。感覚的に合いそうかじっくり感じ取ってください。", failFactor: "お相手にパーフェクトを求めすぎていませんか？欠点ばかりに目が向き、善いところを見逃しがちです。", advice: "「こうでなければならない」を一度手放し、相手のいいところに目を向けましょう。ポジティブな見方が大切です。" },
      2: { intro: "やさしく思いやりのある男性", pattern: "理屈よりも気持ちを大切にする人です。何事にもポジティブで、ネガティブな感情は表に出さないようにします。", attitude: "協調性があり周りを気遣います。困っている人を放っておけず、自分より他人を優先します。", traits: "人から必要とされることに喜びを感じる世話好きタイプ。愛情豊かでボランティア精神も旺盛です。", marriage: "愛する人のために尽くします。家庭では家族との時間を大切にし、親戚付き合いも大切にします。", partner1Type: "タイプ２", partner1Rel: "同じように温かいハートを持つ女性。笑顔を絶やさない家庭的な方と仲良くなれるでしょう。", partner1App: "友達止まりになりがちです。結婚生活の夢など、一歩踏み込んだ話を積極的にしましょう。", partner2Type: "タイプ４", partner2Rel: "繊細で傷つきやすそうな女性に魅力を感じるはず。趣味のいいものに囲まれた暮らしを好みます。", partner2App: "相手の気持ちに寄り添い、気まぐれな態度も温かく受け止めてあげましょう。心を開いてくれるはずです。", failFactor: "「誰にでもやさしい」と思われたり、問題を抱えた女性を支えようとしすぎる面があります。", advice: "やさしさだけでなく男らしさも強調しましょう。相手が話したくなるまで待つことも大切です。" },
      3: { intro: "野心的で行動力のある男性", pattern: "合理的に割り切った考えができる人。目標を設定し、最短距離でやり遂げようとする効率重視のタイプです。", attitude: "第一印象を大切にし、自分をアピールするのが得意。チームではリーダーシップを発揮します。", traits: "価値ある人間でありたいという気持ちが強く、実力が認められ評価されることを望みます。", marriage: "カッコよく見られるよう外見に気を配ります。結婚は現実的に考え、良い条件を比較して選びます。", partner1Type: "タイプ３", partner1Rel: "華のある魅力的な女性に惹かれるでしょう。積極的でテキパキした方と価値観を共有できます。", partner1App: "自信を持って行動し、仕事への情熱を伝えましょう。理想の家庭像が一致すれば進展は早いです。", partner2Type: "タイプ７", partner2Rel: "社交的で元気な女性。家の中を明るくし、休日を一緒に楽しめるパートナーになります。", partner2App: "お互いに社交的なのですぐ親しくなれます。デートの誘いもためらわず、ともに行動しましょう。", failFactor: "格好をつけようとして自慢話をしたり見栄を張ったりしがちです。それがマイナス印象になることも。", advice: "理想を演じるより、自然体で接しましょう。普段着でデートできるようなリラックス感が大切です。" },
      4: { intro: "情緒豊かで美意識の高い男性", pattern: "繊細な感受性を持ち、フィーリングで物事を判断します。自分自身の感じ方に従うユニークな視点の人です。", attitude: "内向的で孤独を愛しますが、実は人恋しくなるタイプ。自分は理解されにくいと感じています。", traits: "想像力豊かでクリエイティブな世界に関心があります。悲しんでいる人に寄り添える共感力があります。", marriage: "ロマンチックな関係を夢見ています。自分には平凡な結婚は向かないと思う一方、切実に理解者を求めます。", partner1Type: "タイプ１", partner1Rel: "まじめでしっかり者のお相手がおすすめ。揺れ動くあなたの気持ちをしっかり受け止めてくれます。", partner1App: "約束事をきちんと守ることが信頼の鍵です。SNSは自分を伝えるツールとして有効活用しましょう。", partner2Type: "タイプ２", partner2Rel: "気持ちが温かくて思いやりのある女性がおすすめ。感情を分かち合える関係になります。", partner2App: "相手の気遣いに感謝を伝えましょう。思い出話などは距離を縮めるのに役立ちます。", failFactor: "相手を想像の中で理想化しすぎて、リアルな相手を見ていない場合があります。後で失望しがちです。", advice: "想像で判断せず、相手の話を聴き、ありのままを知る努力を。直接対話が大切です。" },
      5: { intro: "冷静で思慮深い男性", pattern: "物事を論理的・分析的に受け止めます。納得するまで考えるタイプで、行動までに準備に時間をかけます。", attitude: "一人を好み世間話には興味がありません。自分の専門分野を理解してくれる人を求めます。", traits: "内向的で感情を表に出しません。斬新なアイデアを持ち、私生活では物欲が少ない方です。", marriage: "「愛とは何か」を深く考えてしまいます。一人になれる時間と空間を保てる関係を理想とします。", partner1Type: "タイプ５", partner1Rel: "物静かで知的な方をおすすめします。お互いのスペースを尊重できる居心地のいい関係になります。", partner1App: "趣味や仕事の話から始めましょう。自分の簡単な好き嫌いを語ることから始めてください。", partner2Type: "タイプ６", partner2Rel: "自分の時間を大切にしたいあなたを尊重してくれる女性。家計管理も上手な方です。", partner2App: "信頼できるか知るために、プライベートな生活の様子も少しずつお話ししましょう。", failFactor: "「何を考えているかわからない」と思われがち。反応が乏しく、冷たい感じを与えてしまうかも。", advice: "雑談が苦手でも相手に質問をしてみましょう。それだけで相手は喜んでくれます。" },
      6: { intro: "誠実で義務を果たせる男性", pattern: "規則や秩序を重んじ、用意周到です。危機管理意識が高く、有事には誰よりも勇敢に行動します。", attitude: "協調性があり集団への帰属意識が強いです。上下関係を意識し、誠実な仲間付き合いをします。", traits: "責任感が強く几帳面。ルールに従いコツコツと物事を進めるのが得意な、信頼できる人です。", marriage: "男らしさにこだわり保守的です。妻には外で立ててほしいが、内では甘えたい面もあります。", partner1Type: "タイプ２", partner1Rel: "明るく家庭的で思いやりのある女性がおすすめ。温かい家庭を築けるパートナーになります。", partner1App: "将来設計を話し、率直な気持ちを尋ねましょう。相手の好意をしっかり確認することが大事です。", partner2Type: "タイプ７", partner2Rel: "社交的で楽天的な女性。風通しのいい家庭になり、あなたの考えすぎを和らげてくれます。", partner2App: "一緒にいて楽しいと思ってもらうのが第一。トレンドの場所へデートに誘いましょう。", failFactor: "好意を抱いた相手にもすぐ疑いや迷いが生じ、決断のタイミングを逃してしまうことがありそうです。", advice: "価値観の違いは当然と受け止め、迷いは心に留めず、向き合ってコミュニケーションを取りましょう。" },
      7: { intro: "楽天的で好奇心旺盛な男性", pattern: "何事もいい方に解釈し、次々と計画を立てます。活発でじっとしておらず、思い立ったら即実行します。", attitude: "物おじせず明るく社交的。誰とでもすぐ親しくなり、場を盛り上げて周りを元気づけるのが得意です。", traits: "前向きで切り替えが早いです。呑み込みが早く器用なので、複数のことを並行してこなせます。", marriage: "付き合って楽しい人が一番。フィーリング重視で、意気投合すれば即決する傾向があります。", partner1Type: "タイプ１", partner1Rel: "真面目な常識人の女性がいいでしょう。外に向かいがちなあなたを家庭に繋ぎ止めてくれます。", partner1App: "楽しい話だけでなく、現実に即した将来の話を。相手の話にじっくり耳を傾ける姿勢も重要です。", partner2Type: "タイプ３", partner2Rel: "積極的で行動的な女性。エネルギーが釣り合い、仕事も遊びも意欲的な二人になります。", partner2App: "自分の誇れる実績を遠慮せず話しましょう。相手はスペックも気にしています。魅力を褒めてあげて。", failFactor: "束縛を嫌い、結婚に踏み切るのが惜しくなることが。目移りしやすい面にも注意です。", advice: "「明るい家庭を築けそう」と思わせるアピールを。今目の前の方と向き合う時間を大切に。" },
      8: { intro: "エネルギッシュでチャレンジ精神旺盛な男性", pattern: "直感で即決即断します。考えるよりも行動。逆境に強く、生存戦略を練るのが得意です。", attitude: "ストレートに自分を主張します。自立心が強く、頼られると放っておけない親分肌です。", traits: "パワフルで裏表がありません。リスクを恐れず挑戦し、面倒見が良い反面、無邪気なところもあります。", marriage: "好意を持った相手にはストレート。支配欲がある反面、干渉し合わない自立した関係を望みます。", partner1Type: "タイプ８", partner1Rel: "あなたと同じくらい活力のある、男勝りな性格の方が相性良し。進展は早いです。", partner1App: "好意をうまく伝えられず隠してしまう不器用な面も。素直に気持ちを伝えましょう。", partner2Type: "タイプ９", partner2Rel: "温和で落ち着きのある女性。強気なあなたをなだめてくれる、リラックスした相手です。", partner2App: "相手はおっとりしているので、あなたがリードし、答えははっきりもらいましょう。", failFactor: "強引な面が目立ったり、言葉足らずで誤解を与えたり。決断を急ぎすぎて壊すことがあります。", advice: "相手の返事が遅くても忍耐強く待ちましょう。時間をかければうまくいく話もたくさんあります。" },
      9: { intro: "温厚で落ち着きのある男性", pattern: "平和を好み、ゆったりした時間の中で粘り強く物事に取り組みます。めったに慌てません。", attitude: "付き合いは受け身的。周りに溶け込んでおり、対立を避ける仲介役になることが多いです。", traits: "自然体で人をほっとさせる雰囲気。波風を立てず変化の少ない平穏な暮らしを望みます。", marriage: "恋にも受け身。相手からのアプローチを好みます。家庭でも平和な日々を願います。", partner1Type: "タイプ８", partner1Rel: "元気でエネルギーのある女性。背中を押してくれる積極的な相手に魅力を感じるでしょう。", partner1App: "「伝わっているはず」という曖昧な態度は厳禁。伝えるべきことは言葉にしましょう。", partner2Type: "タイプ９", partner2Rel: "おおらかで落ち着いた女性。波長が合い、言葉がなくても安心できる穏やかな関係になります。", partner2App: "両方受け身なので、あなたが少し積極的になる必要があります。お互いを理解する会話を。", failFactor: "自己アピールが不足し、意思表示が不明確。煮え切らない人と思われがちです。", advice: "必要なことは伝え、意思表示をはっきりさせましょう。コミュニケーションを磨くのが鍵です。" }
    },
    female: {
      1: { intro: "まじめで落ち着きのある女性", pattern: "善悪の基準で判断し、正しい選択をしようとします。秩序を重んじ、落ち着いて処理します。", attitude: "自立心と協調性のバランスが良く節度を守ります。周囲からは信頼できるしっかり者です。", traits: "責任感が強く自分に厳しい努力家。完璧主義で、社会が善い方向に進むことを願っています。", marriage: "恋愛も結婚も誠実に真面目に考えます。一生添い遂げるものと考え、相手にも誠実さを求めます。", partner1Type: "タイプ７", partner1Rel: "明るくポジティブな男性がお勧め。活発な方ならあなたも楽しみを分かち合えます。", partner1App: "相手のテンポに合わせてみましょう。笑顔で楽しい雰囲気作りを心がけてください。", partner2Type: "タイプ６", partner2Rel: "常識を大切にし、将来設計を描いている方がふさわしい。堅実な家庭を築けます。", partner2App: "家族や友人の話をすると親しみを持ってもらえます。お相手の夢を聞いてみましょう。", failFactor: "お相手に厳しい基準を持ちすぎていませんか？欠点ばかりに目が向き、減点方式になりがちです。", advice: "こだわりを一度手放し、間口を広げて。相手のいいところを見つけて褒める習慣を。" },
      2: { intro: "やさしく思いやりのある女性", pattern: "気持ちや感情を大切にします。ポジティブな気働きを常に行動に移すタイプです。", attitude: "友好的で親切。自分より他人を優先し、人を喜ばせることが幸せにつながる人です。", traits: "愛情豊かで世話好き。奉仕の精神があり、辛い思いをしている人を助けようとします。", marriage: "絆で結ばれた温かい家庭を築くのが夢。お互いの気持ちを確かめ合う距離感を好みます。", partner1Type: "タイプ３", partner1Rel: "野心家で仕事熱心な方がお勧め。成功を目指して頑張る相手は、あなたの誇りです。", partner1App: "あか抜けた服装を心がけましょう。相手の自慢話には「すごいね」と褒めてあげて。", partner2Type: "タイプ４", partner2Rel: "プライベートを大切にする方も。良い趣味を持ち、暮らしを味わっている方と合います。", partner2App: "相手に共感を示しましょう。先回りせず、落ち着いて一緒に過ごす時間を大切に。", failFactor: "尽くしすぎて相手が重荷に感じたり、「いい人止まり」で終わってしまう可能性があります。", advice: "先回りして気を使いすぎず、動かなくてもいい時はじっとしている忍耐も必要です。" },
      3: { intro: "自分の魅力をアピールできる女性", pattern: "合理的で適応力があります。目標を最短距離で達成しようとするスマートなタイプです。", attitude: "積極的に関わり、意見を主張できます。自分に自信を持ち、いい印象を与えるのが上手です。", traits: "能力や魅力を磨く努力を惜しみません。賞賛される成功した人生を望みます。", marriage: "経済的ゆとりを重視し、条件も現実的に判断します。理想の方となら臨機応変に対応できます。", partner1Type: "タイプ３", partner1Rel: "上昇志向が強く仕事熱心な男性がお勧め。共に頼もしい関係になれるでしょう。", partner1App: "見栄を張らずに、素顔の自分をのぞかせるような自然で率直な態度で接しましょう。", partner2Type: "タイプ７", partner2Rel: "仕事もレジャーも楽しめるマルチな方がお勧め。初対面から意気投合できるはずです。", partner2App: "ノリよく応じ、また会いたいと思える関係を作りましょう。自然な振る舞いで会話が弾みます。", failFactor: "スペックにこだわりすぎていませんか？条件で判断し、人柄を見落としがちです。", advice: "よく見せようと背伸びしがちですが、もう少しリラックスして。相手の人柄が見えてきます。" },
      4: { intro: "内気で繊細、感情が豊かな女性", pattern: "感受性が強く、感情の揺れ動きが大きい人です。情緒的なものを大切にする自己表現欲の高い人です。", attitude: "恥ずかしがり屋。孤独を愛する一方、共感能力が高く人の苦しみを我がことのように受け止めます。", traits: "想像力豊かで芸術に関心が高いです。趣味のいいものや洗練されたものを好みます。", marriage: "ロマンチックな関係と運命の人を夢見ています。心から分かり合えるパートナーを求めます。", partner1Type: "タイプ１", partner1Rel: "まじめでしっかり者のお相手がお勧め。あなたの繊細さを好ましいと受け止めてくれます。", partner1App: "メールの返信を早く、時間を守るなど基本的なルールを大切に。誠実さが信頼に繋がります。", partner2Type: "タイプ２", partner2Rel: "やさしく思いやりのある方もお勧め。時間をかけて味わえば、頼りがいが見えてきます。", partner2App: "自分の気持ちを素直に話しましょう。感謝の気持ちを言葉で伝えると相手は喜びます。", failFactor: "現実の相手より空想の中で理想化しがちです。実際に会うと失望しやすい傾向があります。", advice: "空想で迷うより直接会って向き合いましょう。あなたの魅力は直接会うことで伝わります。" },
      5: { intro: "物静かで控えめ、思慮深い女性", pattern: "冷静に物事を受け止め、納得するまで調べます。準備に時間をかける集中力の高いタイプです。", attitude: "大勢の集まりが苦手。独自の知識を大切にし、自分から積極的に関わりません。", traits: "内向的で感情を表に出しません。独自の賢明な視点を持ち、一人の時間を大切にします。", marriage: "「愛とは何か」を深く考える人。結婚後も一人になれる場所と時間を必要とします。", partner1Type: "タイプ５", partner1Rel: "物静かで知的な方がおすすめ。尊敬し合える居心地のいい家庭になります。", partner1App: "共通の趣味などから話を広げましょう。タイミングを逃さず連絡し合うのがポイントです。", partner2Type: "タイプ６", partner2Rel: "まじめで堅実な男性もお勧めです。将来を安心して預けられる、家庭を大切にする相手です。", partner2App: "相手はあなたがどんな人か知りたがっています。家族の話なども織り交ぜて安心感を与えましょう。", failFactor: "「何を考えているかわからない」と思われやすく、反応が乏しいと次につながりません。", advice: "言葉数を増やす工夫を。「はい」だけでなく代わりの提案をするなど、繋げる意識を。" },
      6: { intro: "誠実で相手に合わせられる女性", pattern: "不安になりやすく用意周到に備えます。頼れるものや安心できるものを求めるタイプです。", attitude: "協調性があり周りに合わせます。控えめですが、仲間内ではおちゃめな面もあります。", traits: "几帳面。整理整頓を欠かさず、いざという時は勇敢になります。役割に忠実です。", marriage: "結婚願望が強く、生活の保障と安心安全を求めます。将来の家族計画をしっかり描いています。", partner1Type: "タイプ３", partner1Rel: "野心家で仕事熱心な方が理想。社会的に頑張っている男性は頼もしく支えがいがあります。", partner1App: "あか抜けたファッションで接しましょう。自分を磨く努力を忘れないことが大切です。", partner2Type: "タイプ１", partner2Rel: "まじめで責任感が強い、勤勉な男性もお勧め。金銭感覚も堅実で、信頼を築ける相手です。", partner2App: "相手と意見が違っても、率直に自分の考えを伝えましょう。理解が深まっていきます。", failFactor: "理想の相手が現れても「自分なんかでいいのか」と臆病になり、決断できなくなることがあります。", advice: "「選ばれる側」という意識を捨て、対等の立場で自分の意思を明確にしましょう。" },
      7: { intro: "明るく社交的な女性", pattern: "楽観的で前向き。頭の回転が速く器用で、いくつかのことを並行してこなせます。", attitude: "社交的で誰とでもすぐ親しくなれます。場を盛り上げるのが得意で、執着しません。", traits: "好奇心旺盛で冒険好き。辛いことがあっても明るさを失わず、人生を楽しむタイプです。", marriage: "付き合って楽しい人が一番。意気投合すれば迷わず決断し、楽しい結婚生活を求めます。", partner1Type: "タイプ６", partner1Rel: "堅実に仕事をしている男性がお勧め。安定した家庭の中でレジャーも楽しめます。", partner1App: "明るさを発揮しつつ礼儀正しい自己紹介を。相手の話を聞く側に回ると好感度アップ。", partner2Type: "タイプ７", partner2Rel: "明るく社交的な方もお勧め。あなたも気楽に付き合え、楽しみを分かち合えます。", partner2App: "お相手の興味に共感を示しましょう。ただし、自分の予定も優先してバランスを大切に。", failFactor: "一人の人に決められず目移りしがち。「他にもっといい人がいるかも」と考えがちです。", advice: "今目の前の方に焦点を合わせましょう。一つひとつの出会いを大切に向き合ってください。" },
      8: { intro: "元気ではつらつとした女性", pattern: "決断力と実行力があり、意思が強いです。考えるよりも行動が先に出るエネルギッシュな人です。", attitude: "ストレートに主張します。自立心が強く、頼られると放っておけない親分肌です。", traits: "パワフルで裏表がありません。どんな状況でもへこたれない強さを持っています。", marriage: "好きになったらストレート。この人ならと思える人に出会った時に結婚を決断します。", partner1Type: "タイプ８", partner1Rel: "同じように野心的な男性がおすすめ。あなたの強さを尊重してくれる良きパートナーになります。", partner1App: "初対面は強がってぎこちないかも。でも話し始めれば意気投合できる相手です。", partner2Type: "タイプ９", partner2Rel: "温厚な方もお勧め。どっしり構えた相手なら、あなたの短気をなだめてくれます。", partner2App: "相手は積極的ではないので、あなたが主導権を握り、はっきり意思表示しましょう。", failFactor: "自立心が強すぎて人に甘えるのが苦手です。拒絶を恐れて自分から関係を断つことがあります。", advice: "適度な甘えと忍耐が必要です。話し合うことで信頼関係はさらに深まります。" },
      9: { intro: "穏和な癒し系の女性", pattern: "楽観的でめったに慌てません。平和で心地よい空気を好むマイペースな人です。", attitude: "受け身的で誰でも受け入れます。場を和ませる温かい雰囲気を持っています。", traits: "素朴で飾らず平穏な暮らしを望みます。ふだんは温厚ですが、頑固な面も持っています。", marriage: "恋も受け身。相手からのアプローチを優先し、パートナーと一体化する感じを持ちます。", partner1Type: "タイプ８", partner1Rel: "力強く行動的な男性がお勧め。引っ張ってくれる相手となら、活気ある生活が送れます。", partner1App: "相手ははっきり言ってほしいタイプ。食事選びなど些細なことでも意思表示をしましょう。", partner2Type: "タイプ９", partner2Rel: "同じく穏やかな方も。時間はかかりますが絆は深くなり、オシドリ夫婦になれるでしょう。", partner2App: "両方受け身なのであなたからアプローチを。希望を伝えないと進展しません。", failFactor: "自信を持てず消極的。いいなと思った人に近づけず、乗り気でない誘いを断れないことも。", advice: "自分に自信を持ちましょう。意思表示をはっきりさせることで自分の気持ちを守れます。" }
    }
  };

  const FORM_NAME = "personalityDiagnosisQuestions";

  // 質問リスト生成
  const QUESTION_LIST = [
    { no: "01", question: "性別を選択してください", answer1: "男性", answer2: "女性", answer3: "", answer1Type: "male", answer2Type: "female", answer3Type: "" },
    { no: "02", question: "周りの人と勝ち負けや順番を決める競争になったとしたら、あなたの本音は……", answer1: "もちろん、自分が一番になりたい。", answer2: "一番より二番めあたりがいい。", answer3: "競争からは降りていたい。", answer1Type: "a", answer2Type: "b", answer3Type: "c" },
    { no: "03", question: "プライベートで自分がやりたいことで何か重要なことを決断するときは……", answer1: "信頼できる人に相談してから決める。", answer2: "決めるまでに、また決めても行動に移るまでに時間がかかる。", answer3: "あまり迷わず自分で決断し、決めたらすぐ実行に移す。", answer1Type: "b", answer2Type: "c", answer3Type: "a" },
    { no: "04", question: "自分にとっては都合の悪い話や嫌な話を伝えられるときは……", answer1: "はっきり言ってもらった方がいい。", answer2: "あまりはっきり言われたくない。気をつかってほしい。", answer3: "", answer1Type: "a", answer2Type: "b", answer3Type: "" },
    { no: "05", question: "友人に対して、相手が聞いたら嫌だろうなと思うことを伝えなければならないとしたら……", answer1: "誤解のないようはっきり言っておいた方がいい。", answer2: "遠回しにわかるように話し相手に察してもらいたい。", answer3: "言わないで済ませたいので離れる。", answer1Type: "a", answer2Type: "b", answer3Type: "c" },
    { no: "06", question: "早い者勝ちで欲しいものが手に入るというとき、手を挙げろと言われたら……", answer1: "迷わず「ハイ、欲しいです」と手を挙げる。", answer2: "自分には手に入りそうにないなと思う。", answer3: "まず周りの人の出方を見る。", answer1Type: "a", answer2Type: "c", answer3Type: "b" },
    { no: "07", question: "あまり得意ではない家事で、一定量の作業を終わらせなければならないときは……", answer1: "さっさとやってさっさと終わらせる。", answer2: "始めるまでにも終わらせるにも時間がかかりそう。", answer3: "", answer1Type: "a", answer2Type: "c", answer3Type: "" },
    { no: "08", question: "友人や恋人と話をしているときは……", answer1: "自分が話していることが多く、よく「わたしは」という主語を口にする。", answer2: "自分は聞き役に回り、人がしゃべっているのを聞くことが多い。", answer3: "相手の反応を気にしながら話し、譲り合う。", answer1Type: "a", answer2Type: "c", answer3Type: "b" },
    { no: "09", question: "友人や家族から、期待されていることがわかると……", answer1: "期待に応えられるようがんばりたい。", answer2: "期待されても困る。あまり期待されないほうがいい。", answer3: "", answer1Type: "b", answer2Type: "c", answer3Type: "" },
    { no: "10", question: "友人の集まりで決まりそうになった活動について、反対意見なら……", answer1: "「自分は反対」とはっきりその場で自分の意見を言う。", answer2: "多数決なら仕方がないので皆に合わせる。", answer3: "とくに何も言わないが、次第に身を引く。", answer1Type: "a", answer2Type: "b", answer3Type: "c" },
    { no: "11", question: "人前に出たり先頭に立ち、注目を浴びるようなことがあると……", answer1: "正直いい気分になり、ふだんよりも生き生きする。", answer2: "目立ちすぎると「出る杭は打たれる」と思い、気をつかう。", answer3: "あまり目立ちたくない。なるべく人前には出たくない。", answer1Type: "a", answer2Type: "b", answer3Type: "c" },
    { no: "12", question: "いい知らせ、悪い知らせ、事務的な用件の三つを伝えるときは……", answer1: "いい知らせから伝える。", answer2: "悪い知らせから伝える。", answer3: "事務的な用件から伝える。", answer1Type: "x", answer2Type: "z", answer3Type: "y" },
    { no: "13", question: "あなたに対する周りの評価。わずかに否定的な意見もあるときは……", answer1: "否定的な評価で好意的な評価も台無しの気分になる。", answer2: "どちらの評価も受け入れ参考にする。", answer3: "否定的な方は気にせず忘れてしまう。", answer1Type: "z", answer2Type: "y", answer3Type: "x" },
    { no: "14", question: "困難な状況に直面したとき、より大切だと思われる態度は……", answer1: "事実を受け入れ、一つひとつの問題を解決していくこと。", answer2: "きっとうまくいくと信じ、明るい見通しを持ち続けること。", answer3: "", answer1Type: "x", answer2Type: "y", answer3Type: "" },
    { no: "15", question: "他人が感情をあらわにしているのを見ると……", answer1: "まあまあ、楽しくやろうよとなだめたくなる。", answer2: "感情丸出しでみっともないなあと思う。", answer3: "影響され、こっちまで気持ちがざわざわしてくる。", answer1Type: "x", answer2Type: "y", answer3Type: "z" },
    { no: "16", question: "心配事やちょっと厄介な問題を抱えてしまったときは……", answer1: "一人で抱えていると悶々とするが、人に話せばすっきりする。", answer2: "何とかなるだろうと、自然にいい方に考えてしまう。", answer3: "その問題を解決するために淡々と行動する。", answer1Type: "z", answer2Type: "x", answer3Type: "y" },
    { no: "17", question: "外出先で火の元や戸締りが思い出せないと……", answer1: "火事にならないか、泥棒が入らないかなどと心配になる。", answer2: "たぶん大丈夫だろうと思い、それほど心配しない。", answer3: "", answer1Type: "z", answer2Type: "x", answer3Type: "" },
    { no: "18", question: "大きなトラブルを抱えている友達に同意を求められたら……", answer1: "わからないと答える。", answer2: "大丈夫じゃないでしょと言う。", answer3: "大丈夫だよと言ってあげる。", answer1Type: "y", answer2Type: "z", answer3Type: "x" },
    { no: "19", question: "自分の悩み事について人に相談したとき、まず求めるのは……", answer1: "共感してくれなくてもいいので、有益なアドバイスがほしい。", answer2: "まずは自分の気持ちを汲み取ってほしい。", answer3: "", answer1Type: "y", answer2Type: "z", answer3Type: "" },
    { no: "20", question: "個人的には安泰の日々が続いていたら……", answer1: "このままずっと安泰の日々が続きそうな気がする。", answer2: "ただ自分のやりたいことややるべきことを続けていく。", answer3: "何かしら不安材料や気がかりなことが思い浮かぶ。", answer1Type: "x", answer2Type: "y", answer3Type: "z" },
    { no: "21", question: "いまから百年後の世界はどうなっているか……", answer1: "いまより悪くなっているのではないかと思う。", answer2: "きっといまよりよくなっているはずだ。", answer3: "わからないがいまよりよくなっていてほしい。", answer1Type: "z", answer2Type: "x", answer3Type: "y" },
  ];

  function prepareContents() {
    const $template_radioSet = $("#template_radioSet");
    const $template_radioSetItem = $("#template_radioSetItem");
    if ($template_radioSet.length === 0) { setTimeout(prepareContents, 100); return; }

    const template_radioSet = $template_radioSet.html();
    const template_radioSetItem = $template_radioSetItem.html();

    const $container = $("#personality-diagnosis--questions").empty();
    QUESTION_LIST.forEach((data, i) => {
      const index = i + 1;
      const clone = $(template_radioSet).attr("id", `q-${index}`);
      clone.find(".radioSetLegendNo").html(`Q ${("00" + index).slice(-2)}/21`);
      clone.find(".radioSetLegendTitle").html(data.question);
      const items = clone.find(".radioSetItems");
      
      const createItem = (no, type, label) => {
        const item = $(template_radioSetItem);
        const inputId = `q-${index}-ans-${no}`;
        item.find(".radioSetItemInput").attr({ id: inputId, name: FORM_NAME + ("00" + index).slice(-2), value: type, "data-index": index });
        item.find(".radioSetItemInputLabel").attr({ for: inputId }).html(label);
        return item;
      };

      items.append(createItem("1", data.answer1Type, data.answer1));
      items.append(createItem("2", data.answer2Type, data.answer2));
      if (data.answer3) items.append(createItem("3", data.answer3Type, data.answer3));
      $container.append(clone);
    });

    $("#personality-diagnosis--button").show().on("click", () => {
      const result = executeDiagnosis();
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
              <div class="item-text" style="border-left: 4px solid var(--color-primary);">${result.advice}</div>
            </div>
            <div class="report-seal">ONET<br>鑑定済</div>
          </div>
        `;
        $("#personality-diagnosis--modal .dialog").html(`<button type="button" class="dialogCloseButton">×</button>${reportHtml}`);
        $("#personality-diagnosis--modal").css("display", "flex");
      }
    });

    $(document).on("click", ".dialogCloseButton", () => { $("#personality-diagnosis--modal").hide(); });
    $(document).on("change", ".radioSetItemInput", (e) => { $(e.target).closest("fieldset").find(".radioSetItemsError").hide(); });
  }

  prepareContents();

  function executeDiagnosis() {
    const answers = [];
    const errors = [];
    for (let i = 1; i <= 21; i++) {
      const val = $(`input[name='${FORM_NAME + ("00" + i).slice(-2)}']:checked`).val();
      if (!val) errors.push(i); else answers[i] = val;
    }
    if (errors.length > 0) {
      errors.forEach(idx => $(`#q-${idx} .radioSetItemsError`).show());
      $("html, body").animate({ scrollTop: $(`#q-${errors[0]}`).offset().top - 80 }, 500);
      return;
    }
    const gender = answers[1]; 
    const type = calcResultType(answers);
    return RESULT_DETAILS[gender][type];
  }

  function calcResultType(ans) {
    // 1問目が性別なので、性格設問は2問目以降
    const arr1 = [ans[2], ans[3], ans[5], ans[6], ans[8], ans[10], ans[11]];
    const arr2 = [ans[12], ans[13], ans[15], ans[16], ans[18], ans[20], ans[21]];
    const ma = countIf(arr1, "a"), mb = countIf(arr1, "b"), mc = countIf(arr1, "c");
    const mx = countIf(arr2, "x"), my = countIf(arr2, "y"), mz = countIf(arr2, "z");
    const mabc = Math.max(ma, mb, mc), mxyz = Math.max(mx, my, mz);

    let abc = (ma===mabc?"a":"") + (mb===mabc?"b":"") + (mc===mabc?"c":"");
    if (abc === "ab") abc = ans[4]; else if (abc === "ac") abc = ans[7]; else if (abc === "bc") abc = ans[9]; else if (abc.length > 1) abc = abc[0];

    let xyz = (mx===mxyz?"x":"") + (my===mxyz?"y":"") + (mz===mxyz?"z":"");
    if (xyz === "xy") xyz = ans[14]; else if (xyz === "xz") xyz = ans[17]; else if (xyz === "yz") xyz = ans[19]; else if (xyz.length > 1) xyz = xyz[0];

    const typeMap = { "by": 1, "bx": 2, "ay": 3, "cz": 4, "cy": 5, "bz": 6, "ax": 7, "az": 8, "cx": 9 };
    return typeMap[abc + xyz] || 1;
  }

  function countIf(arr, val) { return arr.filter(v => v === val).length; }
});
