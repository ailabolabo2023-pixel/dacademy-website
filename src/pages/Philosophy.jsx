import { useEffect, useRef } from 'react'
import './Philosophy.css'

export default function Philosophy() {
  const observerRef = useRef(null);

  useEffect(() => {
    document.title = "コンセプトと想い（太田めぐみ・晋山直子）| 歯科衛生士セミナーのDacademy";

    // スクロール検知によるアニメーション
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    // アニメーション対象の要素を監視
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
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
            <p className="concept-catch-copy">
              楽しく学べて、本気で変われる
            </p>
          </div>
        </div>
      </section>
      {/* 2. Dacademyとは（HTML構成＆文字アニメーション） */}
      <section className="concept-about-html">
        <div className="container">
          <div className="concept-about-content">
            <h2 className="section-elegant-title animate-on-scroll fade-up">
              <span className="sparkle">✦</span>
              <span><span className="text-cyan">D</span>academyとは</span>
              <span className="sparkle">✦</span>
            </h2>
            <div className="concept-about-text-body">
              <p className="concept-about-desc animate-on-scroll fade-up delay-1">
                Dacademyは、歯科衛生士のための実践的ラーニングプログラムです。<br />
                SRP・インプラントメインテナンスを中心に、臨床で本当に役立つ知識と技術を体系的に学び、<br />
                明日からの現場で自信を持って活かせる力を育てます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dacademyが大切にしていること（画像ベースのレイアウト再現） */}
      <section className="concept-values-html">
        <div className="container">
          <div className="values-box animate-on-scroll fade-up">
            <h2 className="values-box-title">
              <span className="sparkle">✦</span>
              <span><span className="text-cyan">D</span>academy が大切にしていること</span>
              <span className="sparkle">✦</span>
            </h2>
            
            <div className="values-grid">
              {/* アイテム 1 */}
              <div className="value-item animate-on-scroll fade-up delay-1">
                <div className="value-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon">
                    <path d="M12 4c-3-2-7 0-7 4 0 1.5.5 3 1.5 4-.5 1-1 2.5-1 4 0 2 1.5 3.5 3.5 3.5 1 0 2-.5 2.5-1.5.5 1 1.5 1.5 2.5 1.5s2-.5 2.5-1.5c.5 1 1.5 1.5 2.5 1.5 2 0 3.5-1.5 3.5-3.5 0-1.5-.5-3-1-4 1-1 1.5-2.5 1.5-4 0-4-4-6-7-4z" />
                    <path d="M12 4v16" />
                    <path d="M12 8c-1-1-2.5-1-4 0" />
                    <path d="M12 12c-1-1-2.5-1-4 0" />
                  </svg>
                </div>
                <h3 className="value-item-title">感覚を、論理へ。</h3>
                <p className="value-item-text">
                  経験や勘に頼るのではなく、<br />
                  エビデンスに基づいた理解で、<br />
                  確かな臨床力を育てます。
                </p>
              </div>

              {/* アイテム 2 */}
              <div className="value-item animate-on-scroll fade-up delay-2">
                <div className="value-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <path d="M9 14l2 2 4-4" />
                    <path d="M9 10h6" />
                  </svg>
                </div>
                <h3 className="value-item-title">現場で使える学び</h3>
                <p className="value-item-text">
                  明日からの診療で実践できる<br />
                  具体的なスキルを通して、<br />
                  わかりやすくお伝えします。
                </p>
              </div>

              {/* アイテム 3 */}
              <div className="value-item animate-on-scroll fade-up delay-3">
                <div className="value-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon">
                    <path d="M12 22V12" />
                    <path d="M12 12C12 7 17 6 20 5c0 5-1 10-8 7z" />
                    <path d="M12 12C12 7 7 6 4 5c0 5 1 10 8 7z" />
                    <path d="M8 22h8" />
                  </svg>
                </div>
                <h3 className="value-item-title">学び続ける環境</h3>
                <p className="value-item-text">
                  最新の材料や考え方を学び続け、<br />
                  仲間とともに成長し続けられる<br />
                  環境を整えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 目指す未来 */}
      <section className="concept-future-html">
        <div className="container">
          <h2 className="section-elegant-title animate-on-scroll fade-up">
            <span className="sparkle">✦</span>
            <span>目指す未来</span>
            <span className="sparkle">✦</span>
          </h2>
          <div className="future-grid">
            <div className="future-item animate-on-scroll fade-up delay-1">
              <div className="future-image-wrapper">
                {/* 丸い画像が入る場所（プレースホルダーとしてアイコンを設定） */}
                <svg viewBox="0 0 24 24" fill="none" stroke="#00bcd4" strokeWidth="1" className="future-svg"><path d="M12 2C7.5 2 4 5.5 4 10c0 4 3 6 5 9 1 1.5 2 3 3 3s2-1.5 3-3c2-3 5-5 5-9 0-4.5-3.5-8-8-8z"/><path d="M12 10a2 2 0 100-4 2 2 0 000 4z"/></svg>
              </div>
              <h3 className="future-item-title">
                歯科衛生士一人ひとりの成長を支え、<br />
                クリニックの価値の質を高める。
              </h3>
              <p className="future-item-text">
                学びが自信となり、患者さんへのケアが変わる。<br />
                Dacademyは、その成長の連鎖がクリニック全体の<br className="pc-only-br" />信頼を高めると信じています。
              </p>
            </div>

            <div className="future-divider animate-on-scroll fade-up delay-2">
              <span className="sparkle">✦</span>
            </div>

            <div className="future-item animate-on-scroll fade-up delay-3">
              <div className="future-image-wrapper pink-bg">
                {/* 丸い画像が入る場所（プレースホルダー） */}
                <svg viewBox="0 0 24 24" fill="none" stroke="#ff7eb3" strokeWidth="1" className="future-svg"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z"/></svg>
              </div>
              <h3 className="future-item-title">
                学びを、患者さんの笑顔へ。
              </h3>
              <p className="future-item-text">
                確かな知識と心のあるケアで、<br />
                患者さんの健康と笑顔を守る。<br />
                その先にも、Dacademyは全力でサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. こんな方へ */}
      <section className="concept-target-html">
        <div className="container">
          <div className="values-box animate-on-scroll fade-up">
            <h2 className="values-box-title">
              <span className="sparkle">✦</span>
              <span>こんな方へ</span>
              <span className="sparkle">✦</span>
            </h2>
            <div className="values-grid four-cols">
              <div className="value-item animate-on-scroll fade-up delay-1">
                <div className="value-icon-wrapper outline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </div>
                <h3 className="value-item-title">基礎から見直したい</h3>
                <p className="value-item-text">知識や手技の基礎を<br/>しっかり整理したい方</p>
              </div>
              <div className="value-item animate-on-scroll fade-up delay-2">
                <div className="value-icon-wrapper outline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon"><path d="M12 2C7.5 2 4 5.5 4 10c0 4 3 6 5 9 1 1.5 2 3 3 3s2-1.5 3-3c2-3 5-5 5-9 0-4.5-3.5-8-8-8z"/></svg>
                </div>
                <h3 className="value-item-title">SRPを深めたい</h3>
                <p className="value-item-text">SRPの理論を深め、<br/>確実な技術を身につけたい方</p>
              </div>
              <div className="value-item animate-on-scroll fade-up delay-3">
                <div className="value-icon-wrapper outline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <h3 className="value-item-title">インプラントメインテナンス<br/>を学びたい</h3>
                <p className="value-item-text">インプラントの基礎から<br/>メインテナンスまで学びたい方</p>
              </div>
              <div className="value-item animate-on-scroll fade-up delay-4">
                <div className="value-icon-wrapper outline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="value-item-title">現場で活かしたい</h3>
                <p className="value-item-text">学んだことを現場で活かし、<br/>患者さんに貢献したい方</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 学びの流れ */}
      <section className="concept-flow-html">
        <div className="container">
          <div className="values-box animate-on-scroll fade-up">
            <h2 className="values-box-title">
              <span className="sparkle">✦</span>
              <span>学びの流れ</span>
              <span className="sparkle">✦</span>
            </h2>
            <div className="flow-grid">
              
              <div className="flow-step animate-on-scroll fade-up delay-1">
                <div className="flow-badge">1</div>
                <div className="value-icon-wrapper no-border">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </div>
                <h3 className="value-item-title">学ぶ</h3>
                <p className="value-item-text">基礎知識や理論を<br/>わかりやすくインプット。</p>
              </div>

              <div className="flow-arrow animate-on-scroll fade-up delay-2"></div>

              <div className="flow-step animate-on-scroll fade-up delay-2">
                <div className="flow-badge">2</div>
                <div className="value-icon-wrapper no-border">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                </div>
                <h3 className="value-item-title">実践する</h3>
                <p className="value-item-text">臨床で使える技術を<br/>動画や教材でインプット。</p>
              </div>

              <div className="flow-arrow animate-on-scroll fade-up delay-3"></div>

              <div className="flow-step animate-on-scroll fade-up delay-3">
                <div className="flow-badge">3</div>
                <div className="value-icon-wrapper no-border">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M9 14l2 2 4-4" /><path d="M9 10h6" /></svg>
                </div>
                <h3 className="value-item-title">振り返る</h3>
                <p className="value-item-text">ケースや症例を振り返り、<br/>理解を深める。</p>
              </div>

              <div className="flow-arrow animate-on-scroll fade-up delay-4"></div>

              <div className="flow-step animate-on-scroll fade-up delay-4">
                <div className="flow-badge">4</div>
                <div className="value-icon-wrapper no-border">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                </div>
                <h3 className="value-item-title">成長する</h3>
                <p className="value-item-text">学びを積み重ね、<br/>自信と成果を積み重ねる。</p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
