export default function Footer() {
  return (
    <footer
      id="contacts"
      className="text-dark py-3 mt-3 border-top"
      style={{ backgroundColor: "var(--bright-yellow)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center text-md-start">
            <h4 className="fw-bold mb-2">Контакты</h4>
            <ul className="list-unstyled mb-2">
              <li>
                <i className="bi bi-telephone me-1"></i>
                <a
                  href="tel:+71234567890"
                  className="text-dark text-decoration-none"
                >
                  +7 123 456 78 90
                </a>
              </li>
              <li>
                <i className="bi bi-envelope me-1"></i>
                <a
                  href="mailto:example@mail.ru"
                  className="text-dark text-decoration-none"
                >
                  example@mail.ru
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 text-center">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e84f64b9e8b98e3b4773a94b13c73c04c3c813ceb4232f50dbe6f91bd17aa17&amp;source=constructor"
              width="250px"
              height="150px"
              style={{ border: 0, borderRadius: "0.5rem" }}
              loading="lazy"
              className="shadow-sm mb-2"
            ></iframe>
            <small className="text-muted mt-1">
              © 2025 "Маленький мир" — уют и игра в каждом уголке
            </small>
          </div>
          <div className="col-12 col-md-4 text-center text-md-end mt-2 mt-md-0">
            <p className="mb-1">Наш адрес: г. Москва, ул. Примерная, д. 10</p>
            <p className="mb-1">
              Часы работы: Пн-Пт 9:00-18:00, Сб-Вс 10:00-16:00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}