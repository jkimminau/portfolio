const accent = "#ec4899";

const features = [
  "Long-form project case studies",
  "Scroll-driven motion choreography",
  "Performance-first (Lighthouse 100s)",
  "Accessible by default",
];

export default function Home() {
  return (
    <main style={{ "--accent": accent } as React.CSSProperties}>
      <span className="pill">
        <span className="dot" /> In development
      </span>
      <h1>portfolio</h1>
      <p className="tagline">
        A personal site and portfolio — built as a showcase of motion design and
        frontend craft, with case studies that read like essays.
      </p>
      <ul className="features">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <footer>
        <span>By Jamison Kimminau</span>
        <a href="https://github.com/jkimminau/portfolio">View on GitHub →</a>
      </footer>
    </main>
  );
}
