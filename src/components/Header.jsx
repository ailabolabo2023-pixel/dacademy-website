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
          <Link to="/" onClick={() => setIsOpen(false)}>TOP</Link>
          <Link to="/philosophy" onClick={() => setIsOpen(false)}>Dacademyについて</Link>
          <Link to="/programs" onClick={() => setIsOpen(false)}>育成プログラム</Link>
          <Link to="/clinic" onClick={() => setIsOpen(false)}>医院訪問研修</Link>
          <Link to="/profile" onClick={() => setIsOpen(false)}>プロフィール・活動実績</Link>
          <Link to="/contact" className="btn-contact" onClick={() => setIsOpen(false)}>お問い合わせ・お申し込み</Link>
        </nav>
      </div>
    </header>
  )
}
