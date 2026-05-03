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
    }, { threshold: 0.3 });

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

      {/* 2. Dacademyとは */}
      <section className="concept-about-html">
        <div className="concept-about-bg-text">What is<br />Dacademy?</div>
        <div className="concept-floating-decor decor-1">✦</div>
        <div className="concept-floating-decor decor-2">✦</div>
        <div className="concept-floating-decor decor-3">＋</div>
        
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

      {/* 3. Dacademyが大切にしていること */}
      <section className="concept-values-html">
        <div className="container">
          <div className="values-box animate-on-scroll fade-up">
            <h2 className="values-box-title">
              <span className="sparkle">✦</span>
              <span><span className="text-cyan">D</span>academyが大切にしていること</span>
              <span className="sparkle">✦</span>
            </h2>
            <div className="values-grid">
              <div className="value-item animate-on-scroll fade-up delay-1">
                <div className="value-icon-wrapper">
                  <img src="/images/img1.png" alt="感覚を、論理へ" className="value-icon-img" />
                </div>
                <h3 className="value-item-title">感覚を、論理へ。</h3>
                <p className="value-item-text">
                  経験や勘に頼るのではなく、<br />
                  エビデンスに基づいた理解で、<br />
                  確かな臨床力を育てます。
                </p>
              </div>

              <div className="value-item animate-on-scroll fade-up delay-2">
                <div className="value-icon-wrapper">
                  <img src="/images/img2.png" alt="現場で使える学び" className="value-icon-img" />
                </div>
                <h3 className="value-item-title">現場で使える学び</h3>
                <p className="value-item-text">
                  明日からの診療で実践できる<br />
                  具体的なスキルを通して、<br />
                  わかりやすくお伝えします。
                </p>
              </div>

              <div className="value-item animate-on-scroll fade-up delay-3">
                <div className="value-icon-wrapper">
                  <img src="/images/img3.png" alt="学び続ける環境" className="value-icon-img" />
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
                <img src="/images/プレース①.png" alt="目指す未来1" className="future-img" />
              </div>
              <h3 className="future-item-title">
                歯科衛生士一人ひとりの成長を支え、<br />
                クリニックの価値を高める。
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
              <div className="future-image-wrapper">
                <img src="/images/プレース②.png" alt="目指す未来2" className="future-img" />
              </div>
              <h3 className="future-item-title">
                学びを、患者さんの笑顔へ。
              </h3>
              <p className="future-item-text">
                確かな知識と心のあるケアで、<br />
                患者さんの健康と笑顔を守る。<br />
                その先も、Dacademyは全力でサポートします。
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
                  <img src="/images/t1.png" alt="基礎から見直したい" className="value-icon-img" />
                </div>
                <h3 className="value-item-title">基礎から見直したい</h3>
                <p className="value-item-text">知識や手技の基礎を<br/>しっかり整理したい方</p>
              </div>
              <div className="value-item animate-on-scroll fade-up delay-2">
                <div className="value-icon-wrapper outline-icon">
                  <img src="/images/t2.png" alt="SRPを深めたい" className="value-icon-img" />
                </div>
                <h3 className="value-item-title">SRPを深めたい</h3>
                <p className="value-item-text">SRPの理論を深め、<br/>確実な技術を身につけたい方</p>
              </div>
              <div className="value-item animate-on-scroll fade-up delay-3">
                <div className="value-icon-wrapper outline-icon">
                  <img src="/images/t3.png" alt="インプラントメインテナンスを学びたい" className="value-icon-img" />
                </div>
                <h3 className="value-item-title">インプラントメインテナンス<br/>を学びたい</h3>
                <p className="value-item-text">インプラントの基礎から<br/>メインテナンスまで学びたい方</p>
              </div>
              <div className="value-item animate-on-scroll fade-up delay-4">
                <div className="value-icon-wrapper outline-icon">
                  <img src="/images/t4.png" alt="現場で活かしたい" className="value-icon-img" />
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
                  <img src="/images/f1.png" alt="学びの流れ1" className="value-icon-img" />
                </div>
                <h3 className="value-item-title">学ぶ</h3>
                <p className="value-item-text">基礎知識や理論を<br/>わかりやすくインプット。</p>
              </div>

              <div className="flow-arrow animate-on-scroll fade-up delay-2"></div>

              <div className="flow-step animate-on-scroll fade-up delay-2">
                <div className="flow-badge">2</div>
                <div className="value-icon-wrapper no-border">
                  <img src="/images/f2.png" alt="学びの流れ2" className="value-icon-img" />
                </div>
                <h3 className="value-item-title">実践する</h3>
                <p className="value-item-text">実技やワークを通して、<br/>臨床で使える力を身につける。</p>
              </div>

              <div className="flow-arrow animate-on-scroll fade-up delay-3"></div>

              <div className="flow-step animate-on-scroll fade-up delay-3">
                <div className="flow-badge">3</div>
                <div className="value-icon-wrapper no-border">
                  <img src="/images/f3.png" alt="学びの流れ3" className="value-icon-img" />
                </div>
                <h3 className="value-item-title">振り返る</h3>
                <p className="value-item-text">ケースや症例を振り返り、<br/>理解を深める。</p>
              </div>

              <div className="flow-arrow animate-on-scroll fade-up delay-4"></div>

              <div className="flow-step animate-on-scroll fade-up delay-4">
                <div className="flow-badge">4</div>
                <div className="value-icon-wrapper no-border">
                  <img src="/images/f4.png" alt="学びの流れ4" className="value-icon-img" />
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
