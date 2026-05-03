import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import AudioPlayer from './components/AudioPlayer'
import Home from './pages/Home'
import Philosophy from './pages/Philosophy'
import Programs from './pages/Programs'
import Clinic from './pages/Clinic'
import Profile from './pages/Profile'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/clinic" element={<Clinic />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* オリジナルBGMプレイヤー（左下に追従） */}
        <AudioPlayer />
        
        {/* いつでもお問い合わせできる追従型アメコミボタン */}
        <Link to="/contact" className="floating-contact-btn">
          <img src="/images/お問い合わせ用ボタン.png" alt="お問い合わせ・お申込み" className="floating-contact-img" />
        </Link>
      </div>
    </Router>
  )
}

export default App
