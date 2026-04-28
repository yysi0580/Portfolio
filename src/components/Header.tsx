type HeaderProps = {
  activeSectionId: string;
};

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "capability", label: "Capability" },
  { id: "contact", label: "Contact" }
];

function Header({ activeSectionId }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="홈으로 이동">
          <span className="brand__name">Yang Siyeol</span>
          <span className="brand__role">Backend Developer Portfolio</span>
        </a>
        <nav className="site-nav" aria-label="주요 메뉴">
          {navItems.map((item) => {
            const isActive = activeSectionId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
