import './Programs.css'

export default function Programs() {
  return (
    <div className="programs">
      <section className="prog-hero logic-zone">
        <div className="container">
          <h1 className="hero-catch">
            <span className="speech-bubble">「いつも通り」が、</span><br/>
            <span className="eng-title">壁に変わる時。</span>
          </h1>
          <p className="prog-hero-subtext bg-white">共に壁を越え、指先にプロの確信を。</p>
          <div className="prog-intro">
            <p>
              技術が感覚から論理へと進化する過程で、多くの歯科衛生士が壁に直面します。<br/>
              Dacademyでは、圧倒的な実技トレーニングと論理的な思考を通じて、<br/>
              <strong>「わかる」を「できる」へと引き上げます。</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="prog-challenges">
        <div className="container">
          <h2 className="eng-title section-title text-magenta">成長を止める3つの壁</h2>
          <div className="challenge-cards">
            <div className="card">
              <h3 className="card-title">「regression（後退）」</h3>
              <p>前はできたのに、なぜか今回はできない。</p>
            </div>
            <div className="card">
              <h3 className="card-title">「ブラインド操作」</h3>
              <p>ポケットが深くなると、どこを触っているか不安になる。</p>
            </div>
            <div className="card">
              <h3 className="card-title">「自己流」</h3>
              <p>自分の癖に気づかず、特定の部位だけがいつまでも改善しない。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="prog-programs logic-zone">
        <div className="container">
          <h2 className="eng-title section-title text-cyan">PROGRAMS</h2>
          
          <div className="program-list">
            <div className="program-item bg-white border-black shadow-cyan">
              <div className="badge">1</div>
              <h3>3時間集中セミナー：基礎の再構築と即効性</h3>
              <p>キュレットの的確な使い分けや、負担を軽減する正しいポジションの習得。初心者の方の第一歩にも最適。</p>
            </div>
            <div className="program-item bg-white border-black shadow-magenta">
               <div className="badge">2</div>
              <h3>SRP 3日間コース：圧倒的な実技による「確信」の獲得</h3>
              <p>基礎から確実な手技の土台を作るベーシックから、複雑な難症例にも対応しうる応用技術の習得まで。</p>
            </div>
            <div className="program-item bg-white border-black shadow-yellow">
               <div className="badge">3</div>
              <h3>インプラントメインテナンス：未来を見据えた専門ケア</h3>
              <p>天然歯とは異なる、インプラント特有のメインテナンスメニュー立案からチップの安全な選択までを完全網羅。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="prog-voice heart-zone">
        <div className="container">
          <h2 className="eng-title section-title text-black">VOICE</h2>
          <div className="voice-bubble">
            <p>「感覚で行っていたSRPの『なぜ？』が論理的に繋がり、深いポケットへの恐怖心が消えました。今では明日の診療が楽しみです。」</p>
            <span className="voice-author">（臨床経験5年 / ベーシックコース受講）</span>
          </div>
        </div>
      </section>
    </div>
  )
}
