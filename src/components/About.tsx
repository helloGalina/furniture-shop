export default function About() {
  return (
    <section id="about" className="py-5 bg-info bg-opacity-10">
      <div className="container text-center">
        <h2 className="text-primary mb-4 fw-bold">О нас</h2>
        <p className="fs-5 w-75 mx-auto">
          Магазин <strong>«KIDS ROOM»</strong> — это место, где
          каждая кроватка, полка или стол превращаются в часть игры.  
          Мы верим, что детская мебель должна быть не только удобной,
          но и вдохновлять ребёнка!
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176297.png"
          alt="детская комната"
          width="150"
          className="mt-3"
        />
      </div>
    </section>
  );
}