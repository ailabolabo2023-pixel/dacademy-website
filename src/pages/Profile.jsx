import { useEffect } from 'react'
import './Profile.css'

export default function Profile() {
  useEffect(() => {
    document.title = "講師紹介（太田めぐみ・晋山直子）| 歯科衛生士セミナーのDacademy";
  }, []);

  return (
    <div className="profile">
      
      {/* 1. KINETIC HERO SECTION (Canva Style) */}
      <section className="prof-hero-kinetic">
        <div className="kinetic-text-bg">
          <span>INSTRUCTOR PROFILE INSTRUCTOR PROFILE</span>
          <span>INSTRUCTOR PROFILE INSTRUCTOR PROFILE</span>
          <span>INSTRUCTOR PROFILE INSTRUCTOR PROFILE</span>
          <span>INSTRUCTOR PROFILE INSTRUCTOR PROFILE</span>
        </div>
        <div className="inner-frame"></div>
        
        <div className="hero-content">
          <h1>INSTRUCTORS</h1>
          <p>圧倒的な実績と、寄り添う心。</p>
        </div>
        
        <div className="rotating-badge"></div>
      </section>

      {/* 2. OTA MEGUMI SECTION */}
      <section className="instructor-wrapper premium-bg-ota">
        <div className="container">
          
          {/* HERO BLOCK */}
          <div className="prof-feature-hero">
            <div className="prof-feature-header">
              <h3 className="prof-rank">DENTALCARE HEALTH PROMOTION 代表 / Dacademy 主催・講師</h3>
              <h4 className="prof-name-main">太田 めぐみ <span className="en-small">Megumi ŌTA</span></h4>
            </div>
            
            <div className="prof-feature-split">
              <div className="prof-feature-visual">
                <div className="cutout-img-wrap">
                  <video src="/images/プロフィール太田.mp4" autoPlay loop muted playsInline alt="太田 めぐみ" />
                </div>
              </div>
              <div className="prof-feature-text">
                <div className="prof-vision-highlight">
                  「10年、20年先を見据えた精密な臨床で、生涯にわたる健康をプロデュース」
                </div>
                <p className="prof-narrative">
                  日本臨床歯周病学会の認定歯科衛生士・指導歯科衛生士として、長年にわたり臨床の最前線で研鑽を積む。特に歯周病治療とインプラントケアにおいて高度な専門性を有し、同学会の関西支部理事も務めるなど、業界の発展にも寄与している。2024年に「DENTALCARE HEALTH PROMOTION」を設立し、歯科衛生士の育成や地域社会への健康増進活動に注力。2025年の大阪・関西万博での講演をはじめ、多方面で「口腔から始まる健康」の重要性を発信し続けている。
                </p>
              </div>
            </div>
          </div>

          {/* DETAILS BLOCK */}
          <div className="prof-feature-details">
            <div className="details-grid-wrapper">
              <div className="data-group">
                <h4><span>■</span> 所属学会 / スタディグループ</h4>
                <ul className="elegant-list">
                  <li>日本臨床歯周病学会 所属</li>
                  <li>日本臨床歯周病学会 認定歯科衛生士</li>
                  <li>日本臨床歯周病学会 指導歯科衛生士</li>
                  <li>日本臨床歯周病学会 歯科衛生士委員 関西支部理事</li>
                  <li>日本口腔インプラント学会</li>
                  <li>日本口腔インプラント学会 専門歯科衛生士</li>
                  <li>日本歯科医学振興機構 臨床歯科麻酔認定衛生士</li>
                  <li>O2スタディークラブ 所属</li>
                  <li>Dacademy 主催</li>
                </ul>
              </div>

              <div className="data-group">
                <h4><span>■</span> 執筆</h4>
                <div className="history-timeline">
                  <div className="history-item">
                    <span className="history-date">クインテッセンス出版社『歯科衛生士』</span>
                    <div className="history-detail">
                      ・『第23回SparkJoy!DH』2022年11月 vol.46<br/>
                      ・『他院でインプラント治療を受けた患者さんが来院したら』2023年11月号 vol.47
                    </div>
                  </div>
                  <div className="history-item">
                    <span className="history-date">日本臨床歯周病学会会誌 Vol.42 No.2 2024</span>
                    <div className="history-detail">
                      ・聴講記：日本臨床歯周病学会 第42回年次大会 Prof Jessica Skoogh Anderssonによる "Management of periodontitis and peri-implantitisーclinical and scientific perspectives" Audience report<br/>
                      ・An audience report of "Management of periodontitis and peri implantitis-clinical and scientific perspectives" by Prof. Jessica Skoogh Andersson
                    </div>
                  </div>
                </div>
              </div>

              <div className="data-group span-full">
                <h4><span>■</span> 学術大会講演</h4>
                <div className="history-timeline grid-layout">
                  <div className="history-item">
                    <span className="history-date">2019年6月</span>
                    <div className="history-title">日本臨床歯周病学会 第37回年次大会 会員発表</div>
                    <div className="history-detail">全顎的歯周治療を行なった長期症例を振り返る ー10年以上の長期SPTから学ぶこと</div>
                  </div>
                  <div className="history-item">
                    <span className="history-date">2021年4月</span>
                    <div className="history-title">日本臨床歯周病学会 2021年度第1回支部教育研修会 教育講演シンポジウム『深い歯周ポケットへの対応』</div>
                    <div className="history-detail">「生涯にわたり歯を守っていくために歯科衛生士にできること」</div>
                  </div>
                  <div className="history-item">
                    <span className="history-date">2023年7月</span>
                    <div className="history-title">第９回SAFE学術大会 DHセッション</div>
                    <div className="history-detail">「過去の資料採得が自分の臨床を変える」</div>
                  </div>
                  <div className="history-item">
                    <span className="history-date">2024年11月</span>
                    <div className="history-title">日本臨床歯周病学会 2024年度第2回支部教育研修会 教育講演シンポジウム『歯周病と全身疾患』</div>
                    <div className="history-detail">「全身疾患を有する患者に対して求められる歯科衛生士の視点」</div>
                  </div>
                  <div className="history-item">
                    <span className="history-date">2025年</span>
                    <div className="history-title">大阪関西万博 大阪ヘルスケアパビリオン</div>
                    <div className="history-detail">テーマ：「健康」の第一歩は「健口」から</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SHINYAMA NAOKO SECTION */}
      <section className="instructor-wrapper premium-bg-shinyama">
        <div className="container">
          
          {/* HERO BLOCK */}
          <div className="prof-feature-hero">
            <div className="prof-feature-header">
              <h3 className="prof-rank">おくだ歯科医院 歯周病・インプラントセンター 主任歯科衛生士 / Dacademy 主催・講師</h3>
              <h4 className="prof-name-main">晋山 直子 <span className="en-small">Naoko SHINYAMA</span></h4>
            </div>
            
            <div className="prof-feature-split">
              <div className="prof-feature-visual">
                <div className="cutout-img-wrap" style={{background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)'}}>
                  <video src="/images/晋山プロフィール.mp4" autoPlay loop muted playsInline alt="晋山 直子" />
                </div>
              </div>
              <div className="prof-feature-text">
                <div className="prof-vision-highlight">
                  「世界で学んだ多角的な視点と、確かな専門技術で一人ひとりに寄り添うケアを」
                </div>
                <p className="prof-narrative">
                  国内での豊富な臨床経験に加え、オーストラリアやイギリスでの海外研修・歯科勤務を経て培ったグローバルな視点を併せ持つ。イギリスでは「Diploma for Nurse Management」を取得し、臨床のみならず医院マネジメントの専門性も追求。現在はおくだ歯科医院の主任歯科衛生士としてチームを牽引。専門資格を活かした学術発表から、地域社会への貢献活動まで多岐にわたる活動を通じて、歯科保健の普及と後進の育成に邁進している。
                </p>
              </div>
            </div>
          </div>

          {/* DETAILS BLOCK */}
          <div className="prof-feature-details">
            <div className="details-grid-wrapper">
              <div className="data-group">
                <h4><span>■</span> 略歴</h4>
                <div className="history-timeline">
                  <div className="history-item"><span className="history-date">1998年</span><div className="history-detail">堺歯科衛生士専門学校 卒業<br/>宇野歯科医院 入社</div></div>
                  <div className="history-item"><span className="history-date">2000年</span><div className="history-detail">宇野歯科医院 退職</div></div>
                  <div className="history-item"><span className="history-date">2000年 ~ 2003年</span><div className="history-detail">オーストラリア（パース）ワーキングホリデー / 語学留学</div></div>
                  <div className="history-item"><span className="history-date">2003年</span><div className="history-detail">西村歯科 Licca インプラントセンター 金剛本院 入社</div></div>
                  <div className="history-item"><span className="history-date">2006年</span><div className="history-detail">西村歯科 Licca インプラントセンター 金剛本院 退職</div></div>
                  <div className="history-item"><span className="history-date">2006年 ～ 2008年</span><div className="history-detail">イギリス（ロンドン） Diploma for Nurse Management 取得<br/>Dental Nurse としてパートタイム勤務 (Dentexcel LONDON)</div></div>
                  <div className="history-item"><span className="history-date">2008年</span><div className="history-detail">ふくしげ歯科医院 入社</div></div>
                  <div className="history-item"><span className="history-date">2010年</span><div className="history-detail">ふくしげ歯科医院 退職<br/>おくだ歯科医院 歯周病・インプラントセンター 入社<br/>おくだ歯科医院 主任歯科衛生士 現在に至る</div></div>
                </div>
              </div>

              <div className="data-group">
                <h4><span>■</span> 所属学会 / スタディクラブ</h4>
                <ul className="elegant-list magenta-marker">
                  <li>日本歯周病学会 認定歯科衛生士</li>
                  <li>日本臨床歯周病学会 会員</li>
                  <li>日本歯科医学振興機構 臨床歯科麻酔認定衛生士</li>
                  <li>咬合療法研究会 力のコーディネーター(認定)</li>
                  <li>O2 study club 所属</li>
                  <li>Dacademy 主催</li>
                </ul>
              </div>

              <div className="data-group span-full">
                <h4><span>■</span> 学術大会発表</h4>
                <div className="history-timeline grid-layout">
                  <div className="history-item"><span className="history-date">2013年11月</span><div className="history-title">日本臨床歯周病学会 関西支部</div><div className="history-detail">「歯周治療における細菌検査の役割」</div></div>
                  <div className="history-item"><span className="history-date">2015年7月</span><div className="history-title">日本臨床歯周病学会 第33回年次大会</div><div className="history-detail">「歯周治療における歯科衛生士の役割」</div></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. VOLUNTEER SECTION */}
      <section className="volunteer-section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h2 className="eng-title" style={{fontSize: '4.5rem', margin: 0, letterSpacing: '4px'}}>VOLUNTEER</h2>
            <p style={{fontSize: '1.2rem', fontWeight: 700, color: '#666', letterSpacing: '2px', marginTop: '15px'}}>ボランティア・社会貢献活動</p>
          </div>
          
          <div className="volunteer-grid">
            <div className="vol-card">
              <h5>太田 めぐみ - 活動記録</h5>
              <ul className="vol-list">
                <li><strong>2023年</strong>：子ども食堂プロジェクト</li>
                <li><strong>2023年</strong>：淀川アーバンマルシェ出店</li>
                <li><strong>2024年</strong>：大阪成蹊女子高等学校にて講演<br/>「笑顔美人になるための条件：歯と健康の関係」「口腔から健康増進」</li>
              </ul>
            </div>
            
            <div className="vol-card">
              <h5>晋山 直子 - 活動記録</h5>
              <ul className="vol-list">
                <li><strong>2023年</strong>：子ども食堂プロジェクト</li>
                <li><strong>2023年</strong>：淀川アーバンマルシェ 「口腔から健康増進」</li>
                <li><strong>2024年</strong>：大阪成蹊女子高等学校 「笑顔美人になるための条件：歯と健康の関係」</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
