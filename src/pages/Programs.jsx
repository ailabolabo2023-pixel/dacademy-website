import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Programs.css'

const Programs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // スライドごとの画像とキャッチコピーを設定
  const slides = [
    {
      image: '/images/コース内容ヒーロー画像①.png',
      catchphrase: (
        <>
          今の<span className="highlight-text">課題</span>に合わせて、<br />
          <span className="highlight-text">確かな技術</span>を段階的に育てる。
        </>
      )
    },
    {
      image: '/images/コース内容ヒーロー画像②.png',
      catchphrase: (
        <>
          「<span className="highlight-text">楽しい</span>」が「自信」に変わる。<br />
          <span className="highlight-text">本気</span>で向き合う、実践の場。
        </>
      )
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0))
    }, 6000) // じっくり読めるよう6秒に変更
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="programs-page">
      {/* 1. ヒーローセクション */}
      <section className="programs-hero">
        {/* 背景スライダー */}
        <div className="programs-hero-slider">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`コース内容ヒーロー画像 ${index + 1}`}
              className={`programs-hero-img ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
          {/* テキスト保護用の左側のみのグラデーション */}
          <div className="programs-hero-overlay"></div>
        </div>

        <div className="container programs-hero-container">
          <div className="programs-hero-content">
            <div className="programs-title-wrapper">
              <h1 className="programs-hero-title-en eng-title">PROGRAM</h1>
              <h2 className="programs-hero-title-ja">コース内容</h2>
            </div>
            
            {/* keyを設定することで、スライドが切り替わるたびにアニメーションが再発火する */}
            <h3 className="programs-hero-catch" key={`catch-${currentSlide}`}>
              {slides[currentSlide].catchphrase}
            </h3>
            
            <p className="programs-hero-text">
              Dacademyでは、基礎の見直しからSRPの実技習得、インプラントメインテナンス、医院全体の教育体制づくりまで、目的に合わせた学びをご用意しています。
              <br /><br />
              感覚に頼るのではなく、すべての動作に「なぜ？」を持ち、臨床で再現できる技術へ。<br />
              一人ひとりの課題に寄り添いながら、明日の診療につながる学びを届けます。
            </p>
          </div>
        </div>
      </section>

      {/* 今後のセクションをここに追加していきます */}

    </div>
  )
}

export default Programs
