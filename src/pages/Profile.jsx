import { useEffect } from 'react'
import './Profile.css'

export default function Profile() {
  useEffect(() => {
    document.title = "講師紹介（太田めぐみ・晋山直子）| 歯科衛生士セミナーのDacademy";
  }, []);

  return (
    <div className="profile">
      <section className="prof-hero">
        <div className="container">
          <h1 className="hero-catch">
            <span className="speech-bubble">圧倒的な実績と、</span><br/>
            <span className="eng-title">寄り添う心。</span>
          </h1>
          <p className="prof-hero-subtext bg-white">第一線のプロフェッショナルが、あなたの成長に伴走します。</p>
          <div className="prof-intro">
            <p>最前線の臨床現場で日々患者様と向き合い、多様なバックグラウンドと確かな技術を持つ現役のプロフェッショナルたちが、確実なステップアップをサポートします。</p>
          </div>
        </div>
      </section>

      <section className="prof-profiles">
        <div className="container">
          <div className="prof-card logic-zone">
            <div className="prof-img-wrap">
              <img src="/images/ota.png" alt="太田 めぐみ" className="prof-img shadow-cyan border-black" />
            </div>
            <div className="prof-info">
              <h2 className="eng-title text-cyan">MEGUMI OTA</h2>
              <h3>代表・メインインストラクター<br/>太田 めぐみ</h3>
              <p className="prof-quote">「10年、20年先を見据えた精密な臨床で、生涯にわたる健康をプロデュース」</p>
              <ul className="prof-list">
                <li><strong>専門資格：</strong>日本臨床歯周病学会 指導歯科衛生士・認定歯科衛生士 / 関西支部理事、日本口腔インプラント学会 専門歯科衛生士</li>
                <li><strong>略歴：</strong>1998年大阪府歯科医師会附属歯科衛生士専門学校卒業。2023年DENTALCARE HEALTH PROMOTION設立。重度歯周病やインプラント治療後の長期安定（SPT）のスペシャリスト。</li>
              </ul>
            </div>
          </div>

          <div className="prof-card heart-zone">
            <div className="prof-info">
              <h2 className="eng-title text-magenta">NAOKO SHINYAMA</h2>
              <h3>認定インストラクター・講師<br/>晋山 直子</h3>
              <p className="prof-quote">「世界で学んだ多角的な視点と、確かな専門技術で一人ひとりに寄り添うケアを」</p>
              <ul className="prof-list">
                <li><strong>専門資格：</strong>日本歯周病学会 認定歯科衛生士、日本歯科医学振興機構 臨床歯科麻酔認定衛生士</li>
                <li><strong>略歴：</strong>1998年堺歯科衛生士専門学校卒業。オーストラリア、イギリス（ロンドン）へ留学。現地歯科医院での勤務・マネジメントディプロマを取得。国際的な視野と痛みの少ない愛護的なケアのエキスパート。</li>
              </ul>
            </div>
             <div className="prof-img-wrap">
              <img src="/images/shinyama.png" alt="晋山 直子" className="prof-img shadow-magenta border-black" />
            </div>
          </div>
        </div>
      </section>

      <section className="prof-activity bg-yellow">
        <div className="container">
           <h2 className="eng-title section-title text-black">ACTIVITY</h2>
           <p className="activity-intro text-black">臨床の知見を、広く社会へ。</p>
           <div className="activity-cards">
             <div className="act-card bg-white border-black">
               <h4 className="act-title">講演・学会発表</h4>
               <p>大阪・関西万博ステージ登壇（「定期検診」と「歯科衛生士のケア」の大切さについて発信）、日本臨床歯周病学会 教育講演シンポジウム等。</p>
             </div>
             <div className="act-card bg-white border-black">
               <h4 className="act-title">論文・執筆活動</h4>
               <p>学術論文（J-Stage掲載『歯周組織再生療法から10年以上の長期的SPTを継続した症例から学ぶこと』）、専門誌『歯科衛生士』特集執筆。</p>
             </div>
             <div className="act-card bg-white border-black">
               <h4 className="act-title">社会貢献・啓発活動</h4>
               <p>大阪成蹊女子高等学校での講話、子ども食堂や淀川アーバンマルシェを通じた啓発活動。</p>
             </div>
           </div>
        </div>
      </section>
    </div>
  )
}
