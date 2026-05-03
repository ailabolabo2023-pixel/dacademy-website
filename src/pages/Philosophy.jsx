import { useEffect } from 'react'
import './Philosophy.css'

export default function Philosophy() {
  useEffect(() => {
    document.title = "コンセプトと想い（太田めぐみ・晋山直子）| 歯科衛生士セミナーのDacademy";
  }, []);

  return (
    <div className="philosophy">
      {/* 1. ヒーローセクション */}
      <section className="concept-hero">
        <div className="concept-hero-image-container">
          {/* PC用画像 */}
          <img src="/images/Dacademyとはヒーロー画像.png" alt="Dacademyとは CONCEPT ヒーロー PC" className="concept-hero-base-img pc-only" />
          {/* スマホ用画像 */}
          <img src="/images/Dacademyとはヒーロー画像_スマホ.png" alt="Dacademyとは CONCEPT ヒーロー スマホ" className="concept-hero-base-img sp-only" />
          
          {/* 画像の上にテキストを絶対配置 */}
          <div className="concept-hero-text-overlay">
            <div className="concept-hero-header">
              <h1 className="concept-title">Dacademyとは</h1>
              <span className="concept-en">CONCEPT</span>
            </div>
            <h2 className="concept-main-copy">
              感覚を、論理へ。<br/>
              <span className="highlight-text">歯科衛生士の“確かな技術”を育てる。</span>
            </h2>
            <p className="concept-sub-copy">
              実践に役立つ学びを通して、臨床力と自信を育み、<br/>
              患者さんにより良いケアを届けられる衛生士を目指します。
            </p>
          </div>
        </div>
      </section>

      <section className="ph-our-philosophy">
        <div className="container">
          <h2 className="eng-title section-title">OUR PHILOSOPHY</h2>
          <p className="ph-section-desc">
            歯科医療において、感覚に頼った手技はいつか限界を迎えます。同時に、技術だけでは患者様の本当の笑顔を引き出すことはできません。<br/>
            Dacademyが目指すのは、<br/>
            <strong>「再現性のある確かな技術（論理）」と「患者様に寄り添う力（多角的な視点）」</strong><br/>
            の両立です。
          </p>

          <div className="ph-features logic-zone">
            <h3>「できる」ではなく、「なぜできるのか」を言葉にする</h3>
            <p>なぜその持ち方なのか、なぜその角度なのか。結果論だけでなく「なぜ？」を深く考える思考力を育成します。全ての動作に明確な理由を持たせることで、どのような難症例にも対応できる強固な土台が完成します。</p>
          </div>

          <div className="ph-features heart-zone">
            <h3>世界基準の視点と、納得感のあるカウンセリング</h3>
            <p>単に歯を綺麗にするだけでなく、患者様が「一生自分の歯で笑えること」を目標に。痛みの少ない丁寧なケアと、患者様の背景まで汲み取る多角的な視点で、真の信頼関係を築く力を育みます。</p>
          </div>
        </div>
      </section>

      <section className="ph-why-dacademy">
        <div className="container">
          <h2 className="eng-title section-title">WHY DACADEMY?</h2>
          <p className="ph-section-desc">
            2人の現役プロフェッショナルが、それぞれの強みであなたの成長に伴走します。<br/>
            Dacademyの最大の強みは、最前線の臨床現場で活躍する2人のインストラクターがタッグを組み、多角的なアプローチで指導を行えることです。
          </p>

          <div className="ph-instructors">
            <div className="instructor-card border-cyan logic-zone">
              <h3 className="eng-title instructor-name">MEGUMI OTA</h3>
              <h4 className="instructor-role">精密な技術と長期管理のスペシャリスト</h4>
              <p>重度歯周病の再生療法やインプラント治療後の長期安定（SPT）において、25年以上の臨床経験を持つ視点から、感覚を論理へと昇華させる「圧倒的な実技の土台」を構築します。</p>
            </div>
            <div className="instructor-card border-magenta heart-zone">
              <h3 className="eng-title instructor-name">NAOKO SHINYAMA</h3>
              <h4 className="instructor-role">国際的な視野と寄り添うケアのエキスパート</h4>
              <p>海外（オーストラリア・イギリス）での臨床・マネジメント経験を活かし、患者様とのコミュニケーションや、痛みの少ない愛護的なアプローチなど、「心に寄り添うケア」の真髄を伝えます。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ph-message bg-yellow">
        <div className="container message-container">
          <h2 className="eng-title section-title text-black">MESSAGE</h2>
          <div className="speech-bubble-large">
            <p>「いつも通りやっているのに上手くいかない」<br/>「スタッフの育成に悩んでいる」</p>
          </div>
          <p className="message-text">
            その壁は、決してあなた一人、あるいは貴院だけの悩みではありません。<br/>
            技術が進化し、チームが成長するための大切な「前触れ」です。<br/><br/>
            私たちは、皆さまがその壁を越え、指先にプロとしての確信を持てるその日まで、共に考え、共に歩みます。
          </p>
        </div>
      </section>
    </div>
  )
}
