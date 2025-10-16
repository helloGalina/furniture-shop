export default function Footer() {
  return (
    <footer
      id="contacts"
      className="bg-light-green text-dark pt-4 mt-5 border-top"
    >
      <div className="container text-center">
        <h3 className="fw-bold mb-3">Контакты</h3>
        <ul className="list-unstyled">
          <li>
            <i className="bi bi-telephone me-2"></i> +7 123 456 78 90
          </li>
          <li>
            <i className="bi bi-envelope me-2"></i> example@mail.ru
          </li>
        </ul>
        <div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e84f64b9e8b98e3b4773a94b13c73c04c3c813ceb4232f50dbe6f91bd17aa17&amp;source=constructor"
            width="700"
            height="400"
          ></iframe>
        </div>
        <small className="text-muted">
          © 2025 "Маленький мир" — уют и игра в каждом уголке
        </small>
      </div>
    </footer>
  );
}
