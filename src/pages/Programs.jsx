import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Programs.css'

const Programs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // スライドごとの画像（PC用・スマホ用）とキャッチコピーを設定
  const slides = [
    {
      imagePc: '/images/コース内容ヒーロー画像①.png',
      imageSp: '/images/コース内容ヒーロー画像①スマホ.png',
      catchphrase: (
        <>
          今の<span className="highlight-text">課題</span>に合わせて、<br />
          <span className="highlight-text">確かな技術</span>を段階的に育てる。
        </>
      )
    },
    {
      imagePc: '/images/コース内容ヒーロー画像②.png',
      imageSp: '/images/コース内容ヒーロー画像②スマホ.png',
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
            <picture key={index} className={`programs-hero-picture ${index === currentSlide ? 'active' : ''}`}>
              <source media="(max-width: 768px)" srcSet={slide.imageSp} />
              <img src={slide.imagePc} alt={`コース内容ヒーロー画像 ${index + 1}`} className="programs-hero-img" />
            </picture>
          ))}
          {/* テキスト保護用の左側のみのグラデーション */}
          <div className="programs-hero-overlay"></div>
        </div>

        <div className="container programs-hero-container">
          <div className="programs-hero-content">
            {/* ポップアート風の動くテープ（マーキー） */}
            <div className="programs-ticker-tape">
              <div className="programs-ticker-content">
                <span>PROGRAM ★ COURSE ★ PROGRAM ★ COURSE ★ PROGRAM ★ COURSE ★ PROGRAM ★ COURSE ★ </span>
                <span>PROGRAM ★ COURSE ★ PROGRAM ★ COURSE ★ PROGRAM ★ COURSE ★ PROGRAM ★ COURSE ★ </span>
              </div>
            </div>

            <div className="programs-title-wrapper">
              <h1 className="programs-hero-title-en eng-title">PROGRAM</h1>
              <h2 className="programs-hero-title-ja">コース内容</h2>
            </div>
            
            {/* keyを設定することで、スライドが切り替わるたびにアニメーションが再発火する */}
            <h3 className="programs-hero-catch" key={`catch-${currentSlide}`}>
              {slides[currentSlide].catchphrase}
            </h3>
          </div>
        </div>
      </section>

      {/* 2. 壁を越えるビジュアルセクション */}
      <section className="programs-wall-section">
        {/* メインビジュアル（全幅画像・スマホ自動切り替え） */}
        <div className="wall-image-wrapper">
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/コース内容セクション２スマホ.png" />
            <img 
              src="/images/コース内容セクション２.png" 
              alt="「いつも通り」が、壁に変わる時。" 
              className="wall-image" 
            />
          </picture>
        </div>
        
        <div className="container">
          
          {/* 補足メッセージ */}
          <div className="wall-text-wrapper">
            <p className="wall-supplementary-text">
              技術が伸びる過程で生まれる不安や迷いは、成長が止まったサインではありません。<br />
              一人ひとりのペースに合わせて、乗り越える力を共に育みます。
            </p>
          </div>
        </div>
      </section>

      {/* 3. コース一覧（詳細）セクション */}
      <section className="programs-list-section">
        
        {/* 全ての写真をタイル状に敷き詰めるスケルトン背景 */}
        <div className="programs-bg-grid">
          {/* 写真が足りなくならないように複数回繰り返して配置 */}
          {[...Array(6)].map((_, i) => (
            bgImages.map((img, j) => (
              <div 
                key={`${i}-${j}`} 
                className="bg-grid-item" 
                style={{ backgroundImage: `url('/images/コース背景用/${img}')` }}
              ></div>
            ))
          ))}
          <div className="bg-overlay"></div>
        </div>

        <div className="container relative-z">
          <div className="programs-section-header">
            <h2 className="programs-section-title-en">COURSE DETAILS</h2>
            <p className="programs-section-title-ja">各プログラムの詳細</p>
          </div>

          <div className="course-detailed-list">
            {coursesData.map((course, index) => (
              <div key={course.id} className={`course-detail-block ${index % 2 !== 0 ? 'reverse' : ''}`}>
                
                {/* 画像エリア（大きく表示） */}
                <div className="course-detail-image">
                  <img src={course.image} alt={course.title} />
                  <span className="course-category">{course.category}</span>
                </div>
                
                {/* テキスト情報エリア（たっぷり情報を載せる） */}
                <div className="course-detail-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-desc-main">{course.description}</p>
                  
                  {/* 対象者 */}
                  <div className="course-info-box">
                    <h4 className="info-box-title">こんな方におすすめ</h4>
                    <ul className="info-box-list check-list">
                      {course.target.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* カリキュラム・学べること */}
                  {course.curriculum && (
                    <div className="course-info-box">
                      <h4 className="info-box-title">主なカリキュラム・学べること</h4>
                      <ul className="info-box-list dot-list">
                        {course.curriculum.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 開催概要（料金・時間など） */}
                  {course.details && (
                    <table className="course-details-table">
                      <tbody>
                        {course.details.map((detail, idx) => (
                          <tr key={idx}>
                            <th>{detail.label}</th>
                            <td>{detail.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                  
                  <div className="course-card-footer">
                    <button className="course-btn">このコースに申し込む</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 今後のセクションをここに追加していきます */}
    </div>
  )
}

// ----------------------------------------------------
// コース詳細データ（ここに情報をたっぷり書き込めます！）
// ----------------------------------------------------
const coursesData = [
  {
    id: 1,
    category: "SEMINAR",
    title: "3時間集中セミナー",
    target: ["SRPの基礎を学び直したい方", "短時間で要点を掴み、翌日から活かしたい方"],
    description: "SRPの基礎的な知識と技術を、3時間で集中的に学ぶ入門コースです。感覚に頼らない理論に基づいた技術の第一歩を踏み出し、正しい器具の扱い方をマスターします。",
    curriculum: [
      "SRPの基本理念とプローブ操作の再確認",
      "正しい姿勢とポジショニング",
      "ブレードの当て方・ストロークの基本（実技）"
    ],
    details: [
      { label: "対象", value: "歯科衛生士の方" },
      { label: "受講時間", value: "全1回（3時間）" },
      { label: "定員", value: "少人数制" }
    ],
    image: "/images/3時間セミナーの画像.png"
  },
  {
    id: 2,
    category: "PRACTICE",
    title: "SRP 3日間コース",
    target: ["実践的な技術を確実に定着させたい方", "自院でのメインテナンスに自信を持ちたい方"],
    description: "少人数制で一人ひとりの癖や課題に向き合いながら、3日間かけて確実に技術を定着させる本格的な実践プログラムです。インスツルメンテーションを徹底的に身体に覚え込ませます。",
    curriculum: [
      "1日目：基本操作と前歯部のスケーリング",
      "2日目：臼歯部のアプローチと応用",
      "3日目：総復習と臨床ケーススタディ"
    ],
    details: [
      { label: "対象", value: "基礎を見直したい・技術を向上させたい歯科衛生士" },
      { label: "受講期間", value: "全3回（各日◯時間）" }
    ],
    image: "/images/SPR３日間コース.png"
  },
  {
    id: 3,
    category: "MAINTENANCE",
    title: "インプラントメインテナンス",
    target: ["インプラントのケアに不安がある方", "専門的な知識を深め患者に指導したい方"],
    description: "インプラント患者様に対する正しいメインテナンス方法と、長持ちさせるための専門的なケア技術を習得します。専用のインスツルメントの選び方から実際のケアまで網羅します。",
    curriculum: [
      "インプラント周囲組織の解剖学的理解",
      "天然歯との違いと炎症のリスクファクター",
      "インプラント用インスツルメントの実践的操作"
    ],
    details: [
      { label: "対象", value: "歯科衛生士・歯科医師" },
      { label: "形式", value: "座学＋実習" }
    ],
    image: "/images/インプラントメインテナンス.png"
  },
  {
    id: 4,
    category: "ONLINE",
    title: "オンライン雑談会 ZOOM",
    target: ["日々の臨床の悩みを相談したい方", "全国の衛生士と情報交換したい方"],
    description: "臨床での疑問や悩みを、講師や他の参加者とフランクに話し合えるオンライン形式の相談会です。技術のことだけでなく、働き方やモチベーションの悩みまで幅広く共有します。",
    curriculum: [
      "テーマに沿ったミニレクチャー",
      "参加者同士のグループディスカッション",
      "質疑応答・アドバイスタイム"
    ],
    details: [
      { label: "開催方法", value: "オンライン（Zoom）" },
      { label: "参加費", value: "無料または要問合せ" }
    ],
    image: "/images/オンライン雑談会ZOOM.png"
  },
  {
    id: 5,
    category: "VISIT",
    title: "オーダーメイド医院訪問研修",
    target: ["医院全体の教育体制を整えたい院長先生", "自院の環境・機材に合わせた指導が欲しい方"],
    description: "講師が直接医院へ伺い、実際の診療環境や使用機材に合わせたオーダーメイドの技術指導・教育体制づくりを行います。医院の課題をヒアリングし、最適なプログラムをご提案します。",
    curriculum: [
      "事前ヒアリングと課題の洗い出し",
      "自院の機材を使った実践的テクニック指導",
      "スタッフ間のスキル標準化とマニュアル作成サポート"
    ],
    details: [
      { label: "対象", value: "歯科医院（院長＋スタッフ全員）" },
      { label: "費用・日程", value: "医院の規模に合わせて個別にお見積り" }
    ],
    image: "/images/オーダーメイド医院訪問研修.png"
  }
]

// ----------------------------------------------------
// 背景に敷き詰める写真リスト（フォルダ内の全画像）
// ----------------------------------------------------
const bgImages = [
  "LINE_ALBUM_Dacademy_260501_1.jpg",
  "LINE_ALBUM_Dacademy_260501_12.jpg",
  "LINE_ALBUM_Dacademy_260501_13.jpg",
  "LINE_ALBUM_Dacademy_260501_14.jpg",
  "LINE_ALBUM_Dacademy_260501_15.jpg",
  "LINE_ALBUM_Dacademy_260501_2.jpg",
  "LINE_ALBUM_Dacademy_260501_3.jpg",
  "LINE_ALBUM_Dacademy_260501_9.jpg",
  "LINE_ALBUM_Dacademy_260506_1.jpg",
  "LINE_ALBUM_Dacademy_260506_5.jpg",
  "LINE_ALBUM_Dacademy_260506_6.jpg",
  "コース背景.png"
]

export default Programs
