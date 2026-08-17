const researchThemes = [
  {
    title: "Human-Centered AI",
    description:
      "Designing intelligent systems that remain legible, useful, and accountable in expert workflows.",
  },
  {
    title: "Learning Analytics",
    description:
      "Studying how data-rich environments can support better feedback, reflection, and learning outcomes.",
  },
  {
    title: "Computational Methods",
    description:
      "Combining empirical analysis, modeling, and careful interface design to answer applied research questions.",
  },
];

const publications = [
  {
    year: "2026",
    title:
      "Designing Transparent AI Tools for Research and Learning Workflows",
    venue: "Conference on Human-Computer Interaction",
    authors: "Jiahuan Long, A. Collaborator, B. Researcher",
    status: "Under review",
  },
  {
    year: "2025",
    title:
      "Data-Informed Feedback Loops in Digital Learning Environments",
    venue: "Journal of Learning Sciences",
    authors: "Jiahuan Long, C. Scholar",
    status: "Article",
  },
  {
    year: "2024",
    title:
      "Evaluating Human-AI Collaboration in Analytical Decision Making",
    venue: "Proceedings of CSCW",
    authors: "D. Scientist, Jiahuan Long",
    status: "Conference paper",
  },
];

const timeline = [
  {
    period: "2024 - Present",
    role: "Researcher",
    place: "Intelligent Systems Lab",
    detail:
      "Leading studies on interactive AI systems, evidence-centered design, and evaluation methods.",
  },
  {
    period: "2022 - 2024",
    role: "Graduate Research Assistant",
    place: "University Research Group",
    detail:
      "Built research prototypes, analyzed user-study data, and co-authored peer-reviewed manuscripts.",
  },
  {
    period: "2021 - 2022",
    role: "Teaching Assistant",
    place: "Data Science Program",
    detail:
      "Supported courses in statistics, programming, and research methods.",
  },
];

const metrics = [
  { label: "Research Areas", value: "3" },
  { label: "Selected Papers", value: "6+" },
  { label: "Active Projects", value: "4" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Jiahuan Long home">
          <span>JL</span>
          <strong>Jiahuan Long</strong>
        </a>
        <nav className="nav-links" aria-label="Section navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#teaching">Teaching</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Academic Portfolio</p>
          <h1>Jiahuan Long</h1>
          <p className="hero-title">
            Researcher in human-centered AI, learning analytics, and
            computational methods.
          </p>
          <p className="hero-summary">
            I study how intelligent systems can support people in research,
            learning, and decision-making. My work blends empirical inquiry,
            data analysis, and interface design to build tools that are useful
            in real academic and professional settings.
          </p>
          <div className="hero-actions" aria-label="Primary links">
            <a href="#publications">View Publications</a>
            <a href="mailto:hello@example.edu">Email</a>
          </div>
        </div>

        <aside className="profile-panel" aria-label="Research profile summary">
          <div className="portrait-mark" aria-hidden="true">
            JL
          </div>
          <div>
            <p className="panel-kicker">Current Focus</p>
            <h2>Transparent AI for knowledge work</h2>
            <p>
              Building and evaluating AI-assisted workflows where evidence,
              uncertainty, and human judgment remain visible.
            </p>
          </div>
          <dl className="quick-facts">
            <div>
              <dt>Affiliation</dt>
              <dd>University / Research Lab</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Shanghai / Remote</dd>
            </div>
            <div>
              <dt>Open To</dt>
              <dd>Collaboration, talks, supervision</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="metrics-strip" aria-label="Academic highlights">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="content-section split-section" id="research">
        <div>
          <p className="section-label">Research</p>
          <h2>Questions I Keep Returning To</h2>
        </div>
        <div className="theme-grid">
          {researchThemes.map((theme) => (
            <article className="theme-card" key={theme.title}>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="publications">
        <div className="section-heading">
          <p className="section-label">Publications</p>
          <h2>Selected Work</h2>
        </div>
        <div className="publication-list">
          {publications.map((paper) => (
            <article className="publication-card" key={paper.title}>
              <time>{paper.year}</time>
              <div>
                <h3>{paper.title}</h3>
                <p>{paper.authors}</p>
                <span>
                  {paper.venue} · {paper.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-section" id="teaching">
        <div>
          <p className="section-label">Teaching & Service</p>
          <h2>Academic Experience</h2>
          <p className="section-copy">
            Course support, mentoring, manuscript review, and collaborative
            research practice are part of the same intellectual work: helping
            ideas become clearer, stronger, and more useful.
          </p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.role}`}>
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <p className="timeline-place">{item.place}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>For collaboration, talks, or research conversations.</h2>
        </div>
        <div className="contact-links" aria-label="Contact and profile links">
          <a href="mailto:hello@example.edu">hello@example.edu</a>
          <a href="https://scholar.google.com" target="_blank" rel="noreferrer">
            Google Scholar
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
