import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

// --- [管理者様・開発者様へ] ---
// Instagram連携サービス「Behold.so」で発行された「JSON Feed URL」をここに貼り付けてください。
const BEHOLD_URL = ""; 
// -----------------------------

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [logoPos, setLogoPos] = useState(10);
  const [instaPosts, setInstaPosts] = useState([]);

  // Instagramの投稿を取得
  useEffect(() => {
    if (!BEHOLD_URL) return;

    fetch(BEHOLD_URL)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setInstaPosts(data.slice(0, 5));
        }
      })
      .catch(err => console.error("Instagram fetch error:", err));
  }, []);

  // ロゴ出現時の高さをランダム管理するためのステート
  const randomizeLogo = () => {
    const nextPos = Math.floor(Math.random() * 80); 
    setLogoPos(nextPos);
  };

  useEffect(() => {
    // 5秒ごとにスライドを切り替え
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    // タイトルを最新のキャッチコピーに設定
    document.title = "【歯科衛生士セミナー】Dacademy｜笑顔で、ずっと向き合うために。";

    return () => clearInterval(timer);
  }, []);

  // デフォルト（読み込み前・エラー時用）の画像リスト
  const defaultInstaImages = [
    { media_url: '/images/hero1スマホ.png', permalink: 'https://www.instagram.com/d_academy2024?igsh=dXlwbXV1N3Awd2Nt&utm_source=qr' },
    { media_url: '/images/太田さんセクション２スマホ.png', permalink: 'https://www.instagram.com/d_academy2024?igsh=dXlwbXV1N3Awd2Nt&utm_source=qr' },
    { media_url: '/images/hero2スマホ.png', permalink: 'https://www.instagram.com/d_academy2024?igsh=dXlwbXV1N3Awd2Nt&utm_source=qr' },
    { media_url: '/images/ota.png', permalink: 'https://www.instagram.com/d_academy2024?igsh=dXlwbXV1N3Awd2Nt&utm_source=qr' },
    { media_url: '/images/shinyama.png', permalink: 'https://www.instagram.com/d_academy2024?igsh=dXlwbXV1N3Awd2Nt&utm_source=qr' }
  ];

  // 表示するデータを決定（APIから取れていればそれ、なければデフォルト）
  const displayPosts = instaPosts.length > 0 ? instaPosts : defaultInstaImages;

  return (
    <div className="home">
      {/* SEO用の隠し見出し（デザインには影響しません） */}
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
        【歯科衛生士セミナー】Dacademy（ディーアカデミー）。日本臨床歯周病学会理事・太田めぐみと晋山直子が、SRPやインプラント保存の実習（ハンズオン）を直接指導。10年後も通用する精密な臨床技術を体系的に学べる、スキルアップに最適な実践的育成プログラムです。
      </h1>

      {/* ファーストビュー (大きく使ってスライダー化) */}
      <section className="hero">
        {/* コンテナの高さを実際の画像サイズにピッタリ合わせるための見えない裏技 */}
        <img 
          src="/images/hero1.png" 
          className="hero-placeholder pc-only" 
          alt="歯科衛生士セミナー Dacademy メインバナー - 講師：太田めぐみ・晋山直子" 
        />
        <img 
          src="/images/hero1スマホ.png" 
          className="hero-placeholder sp-only" 
          alt="歯科衛生士セミナー Dacademy メインバナー - 講師：太田めぐみ・晋山直子" 
        />
        
        <div className="hero-slider">
          {/* スライド1 */}
          <div className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
            <div className="slide-blur-bg slide-bg-1"></div>
            <div className="slide-main-img slide-bg-1"></div>
          </div>
          {/* スライド2 */}
          <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
            <div className="slide-blur-bg slide-bg-2"></div>
            <div className="slide-main-img slide-bg-2"></div>
          </div>
        </div>
      </section>

      {/* キャッチコピー等のテキストを画像に置き換え */}
      <section className="hero-text-section bg-yellow">
        <img 
          src="/images/太田さんセクション２.png" 
          alt="「お掃除」から、「人生に伴走するプロ」へ。" 
          className="section2-img pc-only"
        />
        <img 
          src="/images/太田さんセクション２スマホ.png" 
          alt="「お掃除」から、「人生に伴走するプロ」へ。" 
          className="section2-img sp-only"
        />
      </section>

      {/* NEWS & SEMINAR セクション (アメコミ風) */}
      <section className="news-section">
        {/* 背景の流れ星（★）アニメーション - セクション全域をカバーするために増量 */}
        <div className="news-shooting-stars">
          <div className="news-star news-star-1">★</div>
          <div className="news-star news-star-2">★</div>
          <div className="news-star news-star-3">★</div>
          <div className="news-star news-star-4">★</div>
          <div className="news-star news-star-5">★</div>
          <div className="news-star news-star-6">★</div>
          <div className="news-star news-star-7">★</div>
          <div className="news-star news-star-8">★</div>
          <div className="news-star news-star-9">★</div>
          <div className="news-star news-star-10">★</div>
          {/* 追加：ロゴの流れ星 (毎回高さをランダムに変更) */}
          <div 
            className="news-star-logo" 
            style={{ top: `${logoPos}%` }}
            onAnimationIteration={randomizeLogo}
          >
            <img src="/images/logo.png" alt="Dacademy Logo" />
          </div>
        </div>

        {/* メガホン（左）と看板（右）のマスコットをニュースセクションの両サイドに配置 */}
        <div className="mascot-megaphone-wrap">
          <img src="/images/mascot_left_final.png" alt="Mascot Team Left" />
        </div>
        <div className="mascot-sign-wrap">
          <img src="/images/mascot_right_final.png" alt="Mascot Team Right" />
        </div>
        
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="eng-title">NEWS & SEMINAR</h2>
          </div>
          <div className="news-list">
            <a href="#" className="news-item">
              <div className="news-date-badge">2026.05.01</div>
              <div className="news-content">
                <span className="news-tag tag-magenta">セミナー</span>
                <p className="news-text">第1回 歯科衛生士向け 実践的育成プログラムの募集開始！</p>
              </div>
            </a>
            <a href="#" className="news-item">
              <div className="news-date-badge">2026.04.15</div>
              <div className="news-content">
                <span className="news-tag tag-cyan">お知らせ</span>
                <p className="news-text">Dacademy公式WEBサイトをプレオープンいたしました。</p>
              </div>
            </a>
            <a href="#" className="news-item">
              <div className="news-date-badge">2026.04.10</div>
              <div className="news-content">
                <span className="news-tag tag-yellow">イベント</span>
                <p className="news-text">医院訪問研修の無料オンライン相談会の受付がスタート。</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="profile-section">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="eng-title" style={{ textAlign: 'center' }}>PROFILE</h2>
            <p className="jp-sub-title">Dacademy 講師紹介</p>
          </div>
          
          <div className="home-prof-container">
            {/* 太田先生カード */}
            <div className="home-prof-card ota-bg">
              <div className="home-prof-img-wrap">
                <div className="large-pop-frame">
                  <img src="/images/ota.png" alt="太田 めぐみ" className="large-prof-img" />
                </div>
              </div>
              <div className="home-prof-info">
                <h2 className="bg-text-ota">MEGUMI OTA</h2>
                <div className="info-inner">
                  <h3 className="prof-rank">DENTALCARE HEALTH PROMOTION 代表 / Dacademy 主催・講師</h3>
                  <h4 className="prof-name-main">太田 めぐみ <span className="en-small">Megumi ŌTA</span></h4>
                  <div className="prof-vision-highlight">
                    「10年、20年先を見据えた精密な臨床で、生涯にわたる健康をプロデュース」
                  </div>
                  <p className="prof-narrative">
                    日本臨床歯周病学会の認定歯科衛生士・指導歯科衛生士として、長年にわたり臨床の最前線で研鑽を積む。特に歯周病治療とインプラントケアにおいて高度な専門性を有し、同学会の関西支部理事も務めるなど、業界の発展にも寄与している。2024年に「DENTALCARE HEALTH PROMOTION」を設立し、歯科衛生士の育成や地域社会への健康増進活動に注力。2025年の大阪・関西万博での講演をはじめ、多方面で「口腔から始まる健康」の重要性を発信し続けている。
                  </p>
                  <Link to="/profile" className="btn-detail-wide">詳しくはこちら <span>▶</span></Link>
                </div>
              </div>
            </div>

            {/* 晋山先生カード */}
            <div className="home-prof-card shinyama-bg reverse">
              <div className="home-prof-info">
                <h2 className="bg-text-shinyama">NAOKO SHINYAMA</h2>
                <div className="info-inner">
                  <h3 className="prof-rank">おくだ歯科医院 歯周病・インプラントセンター 主任歯科衛生士 / Dacademy 主催・講師</h3>
                  <h4 className="prof-name-main">晋山 直子 <span className="en-small">Naoko SHINYAMA</span></h4>
                  <div className="prof-vision-highlight border-magenta">
                    「世界で学んだ多角的な視点と、確かな専門技術で一人ひとりに寄り添うケアを」
                  </div>
                  <p className="prof-narrative">
                    国内での豊富な臨床経験に加え、オーストラリアやイギリスでの海外研修・歯科勤務を経て培ったグローバルな視点を併せ持つ。イギリスでは「Diploma for Nurse Management」を取得し、臨床のみならず医院マネジメントの専門性も追求。現在はおくだ歯科医院の主任歯科衛生士としてチームを牽引。専門資格を活かした学術発表から、地域社会への貢献活動まで多岐にわたる活動を通じて、歯科保健の普及と後進の育成に邁進している。
                  </p>
                  <Link to="/profile" className="btn-detail-wide bg-magenta">詳しくはこちら <span>▶</span></Link>
                </div>
              </div>
              <div className="home-prof-img-wrap">
                <div className="large-pop-frame border-cyan shadow-magenta">
                  <img src="/images/shinyama.png" alt="晋山 直子" className="large-prof-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="eng-title">INSTAGRAM</h2>
          </div>
          <div className="instagram-grid">
            {displayPosts.map((post, index) => (
              <a 
                key={index} 
                href={post.permalink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`insta-item ${index === 4 ? 'insta-fifth' : ''}`}
                style={{ backgroundImage: `url('${post.media_url}')` }}
              >
                <div className="insta-overlay">
                  <span className="insta-icon">📷</span>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <a href="https://www.instagram.com/d_academy2024?igsh=dXlwbXV1N3Awd2Nt&utm_source=qr" target="_blank" rel="noopener noreferrer" className="btn-contact btn-insta">
              公式Instagramを見る
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
