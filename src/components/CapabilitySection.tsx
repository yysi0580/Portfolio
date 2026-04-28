const capabilityRows = [
  {
    title: "상태 기반 비즈니스 로직",
    description:
      "주문, 배차, 결제, 정산처럼 단계가 이어지는 도메인을 엔티티와 상태 전이, 예외 처리로 나눠 구현합니다."
  },
  {
    title: "인증과 권한 제어",
    description:
      "JWT 기반 인증과 역할별 접근 제어를 적용해 사용자 API와 관리자 API의 책임을 분리합니다."
  },
  {
    title: "운영 기능 설계",
    description:
      "사용자 화면에서 끝내지 않고 승인, 보류, 제재, 매출/정산 조회 같은 관리자 운영 기능을 함께 설계합니다."
  },
  {
    title: "프론트·모바일 협업",
    description:
      "React와 Flutter 화면이 필요로 하는 요청값, 응답 구조, 에러 케이스를 맞추며 API 계약을 정리합니다."
  }
];

const stackColumns = [
  {
    label: "Backend",
    value: "Java, Spring Boot, Spring Security, JPA, JWT, Swagger"
  },
  {
    label: "Frontend / App",
    value: "React, Vite, TypeScript, Flutter, JavaScript, HTML, CSS"
  },
  {
    label: "Database / Infra / Tools",
    value: "Oracle, MySQL, Docker, Linux, Postman, GitHub"
  }
];

function CapabilitySection() {
  return (
    <section className="section capability-section" id="capability">
      <div className="section-header" data-animate>
        <div>
          <p className="section-index">03</p>
          <h2>Capability</h2>
        </div>
        <p className="section-header__summary">
          화면을 만드는 것보다, 서비스가 안정적으로 굴러가게 하는 백엔드와 운영
          흐름 구현 역량을 중심으로 정리했습니다.
        </p>
      </div>

      <div className="capability-table">
        {capabilityRows.map((capability) => (
          <article key={capability.title} className="capability-row" data-animate>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </article>
        ))}
      </div>

      <div className="stack-strip" data-animate>
        {stackColumns.map((stack) => (
          <div key={stack.label} className="stack-column">
            <span className="stack-label">{stack.label}</span>
            <p>{stack.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CapabilitySection;
