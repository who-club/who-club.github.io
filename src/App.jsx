import { useEffect, useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    let animationFrameId
    let lastX = 0
    let lastY = 0

    const handleMouseMove = (e) => {
      lastX = e.clientX
      lastY = e.clientY

      if (animationFrameId) {
        return
      }

      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: lastX, y: lastY })
        animationFrameId = null
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    
    const checkReveal = () => {
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', checkReveal)
    checkReveal()
    
    return () => window.removeEventListener('scroll', checkReveal)
  }, [])

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      {/* Custom Cursor */}
      <div 
        className="custom-cursor" 
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Header */}
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <a href="#" onClick={(e) => handleSmoothScroll(e, '.hero')} className="logo-link">
            <img src={logo} alt="WHO" className="logo-img" />
            <span className="logo-text">WHO<span className="accent">.</span></span>
          </a>
          <nav>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
            <a href="#activities" onClick={(e) => handleSmoothScroll(e, '#activities')}>Activities</a>
            <a href="#vision" onClick={(e) => handleSmoothScroll(e, '#vision')}>Vision</a>
            <a href="https://forms.gle/zuw5L81n8TBw1w7C8" className="btn-join" target="_blank" rel="noopener noreferrer">
              Join Us →
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">신입부원 모집 2026</div>
          <h1 className="hero-title">
            첫 시작,<br/>
            <span className="gradient-text"> WHO와 함께하세요 </span>
          </h1>
          <p className="hero-subtitle">
            전북대 컴퓨터인공지능공학부 동아리<br/>
            프로젝트부터 친목까지, WHO와 함께
          </p>
          <div className="hero-cta">
            <a href="https://forms.gle/zuw5L81n8TBw1w7C8" className="btn-primary" target="_blank" rel="noopener noreferrer">
              지원하기
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card reveal">
              <div className="stat-number">50+</div>
              <div className="stat-label">Members</div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-number">Annual</div>
              <div className="stat-label">Hackathon</div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-number">6</div>
              <div className="stat-label">Activities</div>
            </div>
            <div className="stat-card reveal">
              <div className="stat-number">Core</div>
              <div className="stat-label">Studies</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">01 — About</span>
            <h2 className="section-title">WHO는<br/>어떤 동아리인가요?</h2>
          </div>
          <div className="about-grid">
            <div className="about-card reveal">
              <div className="card-number">01</div>
              <h3>함께 배우는<br/>커뮤니티</h3>
              <p>혼자가 아닌 '함께'의 가치를 배우며 서로의 지식을 공유하는 문화</p>
            </div>
            <div className="about-card reveal">
              <div className="card-number">02</div>
              <h3>선후배가<br/>연결되는 공간</h3>
              <p>다양한 경험을 가진 선배들과 열정 넘치는 신입생들의 시너지</p>
            </div>
            <div className="about-card reveal">
              <div className="card-number">03</div>
              <h3>실전 경험<br/>중심</h3>
              <p>단순 이론 공부를 넘어 직접 서비스를 구현해보는 실전 활동</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="activities">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">02 — Activities</span>
            <h2 className="section-title">주요 활동</h2>
          </div>
          <div className="activities-list">
            <div className="activity-card reveal">
              <div className="activity-header">
                <span className="activity-number">01</span>
                <h3>스터디 & 멘토링</h3>
              </div>
              <p className="activity-desc">
                C언어, Python 기초부터 실전까지. 선배의 가이드로 함께 성장합니다.
              </p>
              <div className="activity-tags">
                <span className="tag">Study</span>
                <span className="tag">Mentoring</span>
                <span className="tag">Learning</span>
              </div>
            </div>

            <div className="activity-card reveal">
              <div className="activity-header">
                <span className="activity-number">02</span>
                <h3>후커톤</h3>
              </div>
              <p className="activity-desc">
                아이디어를 실제로 구현. 생성형 AI 도구를 적극 활용하며 프로젝트 경험을 쌓습니다.
              </p>
              <div className="activity-tags">
                <span className="tag">Project</span>
                <span className="tag">AI</span>
                <span className="tag">Innovation</span>
              </div>
            </div>

            <div className="activity-card reveal">
              <div className="activity-header">
                <span className="activity-number">03</span>
                <h3>해커톤</h3>
              </div>
              <p className="activity-desc">
                실전 개발 대회 참여로 스펙과 실력을 동시에. 포트폴리오에 담을 결과물을 만듭니다.
              </p>
              <div className="activity-tags">
                <span className="tag">Competition</span>
                <span className="tag">Portfolio</span>
                <span className="tag">Team</span>
              </div>
            </div>

            <div className="activity-card reveal">
              <div className="activity-header">
                <span className="activity-number">04</span>
                <h3>친목 & 네트워킹</h3>
              </div>
              <p className="activity-desc">
                개강총회, MT, 소모임. 강의실 밖에서 끈끈한 인맥을 형성합니다.
              </p>
              <div className="activity-tags">
                <span className="tag">Networking</span>
                <span className="tag">MT</span>
                <span className="tag">Community</span>
              </div>
            </div>

            <div className="activity-card reveal">
              <div className="activity-header">
                <span className="activity-number">05</span>
                <h3>E-sports 대회</h3>
              </div>
              <p className="activity-desc">
                게임으로 하나되기. 가벼운 참여부터 진지한 경쟁까지 함께 즐깁니다.
              </p>
              <div className="activity-tags">
                <span className="tag">Gaming</span>
                <span className="tag">Fun</span>
                <span className="tag">Competition</span>
              </div>
            </div>

            <div className="activity-card reveal">
              <div className="activity-header">
                <span className="activity-number">06</span>
                <h3>1일 1코딩</h3>
              </div>
              <p className="activity-desc">
                매일 알고리즘 문제 풀고 깃허브에 인증. 꾸준한 습관으로 포트폴리오를 쌓아갑니다.
              </p>
              <div className="activity-tags">
                <span className="tag">Daily</span>
                <span className="tag">GitHub</span>
                <span className="tag">Challenge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="vision">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">03 — Vision 2026</span>
            <h2 className="section-title">활동 방향</h2>
          </div>
          <div className="vision-grid">
            <div className="vision-card reveal">
              <div className="vision-icon">🤝</div>
              <h3>선·후배 간<br/>유대관계 강화</h3>
              <p>멘토링과 MT를 통해 학년 간 벽을 허물고 함께 성장하는 문화</p>
              <div className="vision-arrow">→</div>
            </div>
            <div className="vision-card reveal">
              <div className="vision-icon">🤖</div>
              <h3>생성형 AI<br/>활용 능력 향상</h3>
              <p>변화하는 기술 트렌드에 맞춰 실무 역량 키우기</p>
              <div className="vision-arrow">→</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="join">
        <div className="container">
          <div className="join-content reveal">
            <h2 className="join-title">
              2026 신입부원<br/>
              <span className="gradient-text">모집</span>
            </h2>
            <div className="join-grid">
              <div className="join-item">
                <div className="join-label">모집 대상</div>
                <div className="join-value">컴퓨터인공지능학부 재학생<br/>공학2계열 신입생</div>
              </div>
              <div className="join-item">
                <div className="join-label">회비</div>
                <div className="join-value">학기당<br/>10,000원</div>
              </div>
              <div className="join-item">
                <div className="join-label">주요 활동</div>
                <div className="join-value">스터디, 프로젝트<br/>해커톤, 친목</div>
              </div>
              <div className="join-item">
                <div className="join-label">스터디</div>
                <div className="join-value">C언어<br/>Python</div>
              </div>
            </div>
            <a href="https://forms.gle/zuw5L81n8TBw1w7C8" className="btn-primary-large" target="_blank" rel="noopener noreferrer">
              지금 바로 지원하기
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <div className="join-links">
              <a href="mailto:jbnuwho25@gmail.com?subject=%5BWHO%20%EB%AC%B8%EC%9D%98%5D&body=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%2C%20WHO%20%EB%8F%99%EC%95%84%EB%A6%AC%EC%97%90%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.%0A%0A" className="btn-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 6L12 13L2 6"/>
                </svg>
                메일 문의
              </a>
              <a href="https://open.kakao.com/o/..." className="btn-secondary" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.442 1.443 4.64 3.8 6.11l-1.22 4.39c-.09.33.22.62.53.49l5.23-2.24c.55.07 1.12.11 1.66.11 5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
                </svg>
                오픈채팅 문의
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <a href="#" onClick={(e) => handleSmoothScroll(e, '.hero')} className="logo-link">
                <img src={logo} alt="WHO" className="logo-img footer-logo" />
                <span className="logo-text">WHO<span className="accent">.</span></span>
              </a>
              <p>전북대학교 컴퓨터인공지능공학부 동아리</p>
            </div>
            <div className="footer-contact">
              <p>동아리실: 공과대학 7호관 지하 7007-1호</p>
              <p>이메일: jbnuwho25@gmail.com</p>
              <p>회장: 황현성 010-2898-6963</p>
            </div>
            <div className="footer-links">
              <a href="https://forms.gle/zuw5L81n8TBw1w7C8" target="_blank" rel="noopener noreferrer">지원하기</a>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>소개</a>
              <a href="#activities" onClick={(e) => handleSmoothScroll(e, '#activities')}>활동</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 WHO. All rights reserved.</p>
            <p className="footer-highlight">2026학년도 WHO, 많은 관심과 지원 부탁드립니다</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App