import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container container">
        <Link to="/" className="logo-area">
          <img src="/images/logo.png" alt="Dacademy" className="logo" />
          <span className="logo-text">Dacademy</span>
        </Link>
        
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)} className="nav-item">
            <span className="nav-jp">トップ</span>
            <span className="nav-en">TOP</span>
          </Link>
          <Link to="/philosophy" onClick={() => setIsOpen(false)} className="nav-item">
            <span className="nav-jp">Dacademyとは</span>
            <span className="nav-en">CONCEPT</span>
          </Link>
          <Link to="/news" onClick={() => setIsOpen(false)} className="nav-item">
            <span className="nav-jp">最新情報</span>
            <span className="nav-en">NEWS & SEMINAR</span>
          </Link>
          <Link to="/programs" onClick={() => setIsOpen(false)} className="nav-item">
            <span className="nav-jp">コース内容</span>
            <span className="nav-en">PROGRAM / SERVICE</span>
          </Link>
          <Link to="/profile" onClick={() => setIsOpen(false)} className="nav-item">
            <span className="nav-jp">講師紹介</span>
            <span className="nav-en">PROFILE</span>
          </Link>
          <a href="https://www.instagram.com/d_academy2024?igsh=dXlwbXV1N3Awd2Nt&utm_source=qr" target="_blank" rel="noopener noreferrer" className="nav-item" onClick={() => setIsOpen(false)}>
            <span className="nav-jp">インスタグラム</span>
            <span className="nav-en">INSTAGRAM</span>
          </a>
          <Link to="/contact" className="btn-contact" onClick={() => setIsOpen(false)}>
            <span className="nav-jp">お問い合わせ</span>
            <span className="nav-en">CONTACT</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
