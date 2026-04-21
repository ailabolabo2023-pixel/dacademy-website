import { useEffect } from 'react'
import './Clinic.css'

export default function Clinic() {
  useEffect(() => {
    document.title = "医院訪問研修・スタッフ育成 | 歯科衛生士セミナーのDacademy";
  }, []);

  return (
    <div className="clinic">
      <section className="clinic-hero">
        <div className="container">
          <h1 className="hero-catch">
            <span className="speech-bubble">オーダーメイド</span><br/>
            <span className="eng-title">医院訪問研修</span>
          </h1>
          <p className="clinic-subtext">医院の未来を牽引する、確固たる基盤を。</p>
          <div className="clinic-intro">
            <p>
              スタッフの技術力向上はもちろん、医院全体の教育システム構築まで。<br/>
              Dacademyは、自律的に成長する理想のチーム医療の実現をサポートします。
            </p>
          </div>
        </div>
      </section>

      <section className="clinic-problems logic-zone">
        <div className="container">
          <div className="problem-box border-black shadow-cyan bg-white">
            <h2 className="problem-title text-cyan">院長先生、このようなお悩みはありませんか？</h2>
            <div className="speech-bubbles-wrap">
              <span className="speech-bubble-small">「スタッフのやる気を引き出したい」</span>
              <span className="speech-bubble-small">「衛生士育成の仕組みを作りたい」</span>
            </div>
            <p className="problem-desc">
              日々の診療に追われ、スタッフ教育に十分な時間を割けない医院様へ。<br/>
              外部からの客観的な視点と専門的な指導で、人材育成の課題を解決へと導きます。
            </p>
          </div>
        </div>
      </section>

      <section className="clinic-reasons bg-yellow">
        <div className="container">
          <h2 className="eng-title section-title text-black">3 REASONS</h2>
          <div className="reason-cards">
             <div className="reason-card border-black bg-white">
               <h3 className="reason-num">1</h3>
               <h4>完全オーダーメイドの指導計画</h4>
               <p>各医院の診療スタイルやスタッフの習熟度を深く分析し、最も効果的で柔軟な指導計画を立案します。</p>
             </div>
             <div className="reason-card border-black bg-white">
               <h3 className="reason-num">2</h3>
               <h4>中長期サポートによる定着</h4>
               <p>1年〜1年半という継続的な研修導入により、医院全体の「教育システム」として現場に定着させます。</p>
             </div>
             <div className="reason-card border-black bg-white">
               <h3 className="reason-num">3</h3>
               <h4>「診療の質」の劇的な向上</h4>
               <p>明確な理論に基づいた技術指導により、スタッフの自信と責任感を育成します。</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}
