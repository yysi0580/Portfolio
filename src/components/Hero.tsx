function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="hero section" id="top">
      <div className="hero-grid">
        <aside className="hero-rail" data-animate>
          <p className="rail-label">{currentYear} Portfolio</p>
          <div className="rail-block">
            <span className="rail-title">Position</span>
            <strong>Backend / Fullstack Junior Developer</strong>
          </div>
          <div className="rail-block">
            <span className="rail-title">Core</span>
            <p>Java, Spring Boot, JPA, Oracle, JWT</p>
          </div>
          <div className="rail-block">
            <span className="rail-title">Focus</span>
            <p>주문 상태 · 배차 흐름 · 결제 · 정산 · 운영 API</p>
          </div>
          <div className="rail-block">
            <span className="rail-title">Value</span>
            <p>비즈니스 흐름을 이해하고 API와 상태 로직으로 연결합니다.</p>
          </div>
        </aside>

        <div className="hero-main">
          <div className="hero-copy" data-animate>
            <div>
              <p className="section-label">Yang Siyeol</p>
              <h1>양시열의 포트폴리오</h1>
              <p className="hero-summary">
                비즈니스 흐름을 이해하고 주문, 배차, 결제, 정산 같은 상태 로직을 API와
                데이터 모델로 구현하는 백엔드/풀스택 신입 개발자입니다.
              </p>
            </div>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">
                프로젝트 보기
              </a>
              <a
                className="button button--secondary"
                href="mailto:yysi00558800@gmail.com"
              >
                문의하기
              </a>
            </div>
          </div>

          <div className="hero-panel" data-animate>
            <div className="hero-panel__header">
              <p className="panel-tag">Core Keywords</p>
              <span>01</span>
            </div>
            <div className="blueprint">
              <div className="blueprint-row">
                <span>AUTH</span>
                <span>ORDER</span>
                <span>SETTLEMENT</span>
              </div>
              <div className="blueprint-line" />
              <div className="blueprint-row">
                <span>API</span>
                <span>JPA</span>
                <span>OPERATIONS</span>
              </div>
            </div>
            <div className="hero-panel__footer">
              <div>
                <span className="mini-label">Identity</span>
                <strong>Business Flow - API - DB</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
