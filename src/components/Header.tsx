import logo from "../assets/logo - 3.jpg";

export default function Header() {
  return (
    <header className="site-header py-3 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <img
            src={logo}
            alt="Маленький мир"
            width="48"
            height="48"
            className="rounded-circle border border-light"
          />
          <div>
            <h1 className="site-title m-0">Маленький мир</h1>
            <small className="tagline fst-italic mb-0">уют и игра в каждом уголке</small>
          </div>
        </div>

        <nav className="site-nav d-flex align-items-center gap-3">
          <a href="#catalog">Каталог</a>
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
          <a href="#basket">Корзина</a>
        </nav>
      </div>
    </header>
  );
}
