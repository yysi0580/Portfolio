function AboutSection() {
  return (
    <section className="section intro-section" id="about">
      <div className="section-header" data-animate>
        <div>
          <p className="section-index">01</p>
          <h2>About</h2>
        </div>
        <p className="section-header__summary">
          요구사항을 엔티티, 상태 전이, API 계약으로 바꾸고 운영 시나리오까지
          구현하는 일을 좋아합니다.
        </p>
      </div>

      <div className="intro-layout">
        <article className="intro-statement" data-animate>
          <p className="statement-lead">
            비즈니스 흐름을 구조화하고, 필요한 기능을 끝까지 구현해 결과로 연결하는
            개발자입니다.
          </p>
          <p>
            Spring Boot 기반 백엔드, JPA와 Oracle 모델링, JWT 인증과 권한 제어,
            관리자 운영 기능 구현 경험이 있습니다. React와 Flutter 프로젝트를 함께
            다루며 화면이 실제로 어떤 요청값과 상태 변화를 요구하는지도 백엔드 관점에서
            맞춰왔습니다.
          </p>
        </article>

        <div className="fact-table" data-animate>
          <div className="fact-row">
            <span>Work Style</span>
            <strong>흐름이 보이는 문서와 코드로 정리하고, 마지막 동작까지 직접 확인합니다.</strong>
          </div>
          <div className="fact-row">
            <span>Interesting Problems</span>
            <strong>상태 전이, 인증/권한, 예외 처리, 관리자 운영 기능 설계</strong>
          </div>
          <div className="fact-row">
            <span>What I Can Contribute</span>
            <strong>유지보수 가능한 API 구조와 도메인 흐름이 드러나는 백엔드 구현</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
