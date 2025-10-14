export default function Header() {
  return (
    <header className="site-header bg-warning text-dark py-3 shadow-sm user-select-none">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="site-title fs-3 fw-bold">🧸 KIDS ROOM</h1>

        <nav className="site-nav d-flex align-items-center gap-3">
          <a href="#catalog">Каталог</a>
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </div>
    </header>
  );
}
