import { useEffect, useState } from "react"
import { featuredAlumni } from "./alumniData"
import { AlumniDirectoryPage } from "./AlumniDirectoryPage"

type IconName =
  | "arrow"
  | "chart"
  | "code"
  | "globe"
  | "briefcase"
  | "mail"
  | "menu"
  | "close"
  | "spark"
  | "database"
  | "chevron"

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V9M10 19V5M16 19v-7M22 19V2" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9s-1.2 6.5-3.5 9c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    spark: (
      <>
        <path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3Z" />
        <path d="m5 16-.7 2.3L2 19l2.3.7L5 22l.7-2.3L8 19l-2.3-.7L5 16Z" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </>
    ),
    chevron: <path d="m8 10 4 4 4-4" />,
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const alumni = featuredAlumni

const semesters = [
  {
    number: "01",
    range: "Courses 1—33",
    title: "Business Foundations",
    description: "Build a strong foundation in economics, accounting, management, and computational thinking.",
    courses: [
      "Introduction to Microeconomics",
      "Introduction to Accounting",
      "Principles of Business Management",
      "Introduction to Digital Business",
      "Business Mathematics",
      "Religion",
      "Sports, Arts & Creativity",
      "Pancasila & Citizenship",
      "Indonesian Language",
      "English Language",
      "Computer Science",
      "Programming Algorithms",
    ],
  },
  {
    number: "02",
    range: "Courses 34—49",
    title: "Design & Systems",
    description: "Understand business processes and begin building technology-enabled solutions.",
    courses: [
      "Introduction to Macroeconomics",
      "Statistical Analysis",
      "Design Thinking",
      "Design Principles",
      "Computer Programming I",
      "Business Process Analysis",
      "Management Information Systems",
      "Accounting for Decision Making",
      "Web Development",
      "Entrepreneurship & Innovation",
      "Information Literacy",
      "Digital Business Fundamentals",
      "Database Systems",
    ],
  },
  {
    number: "03",
    range: "Courses 50—59",
    title: "Analytics & Growth",
    description: "Translate data, consumer behavior, and digital channels into business growth.",
    courses: [
      "Computer Programming II",
      "Business Analytics & Big Data",
      "Cybersecurity",
      "Agile Methods",
      "Decision Making & Problem Solving",
      "Entrepreneurship & Innovation",
      "Consumer Behavior Analysis",
      "Statistical Analysis II",
      "Idea Presentation & Negotiation",
      "Digital Marketing",
    ],
  },
  {
    number: "04",
    range: "Courses 60—67",
    title: "Digital Strategy",
    description: "Connect strategic management with web, mobile, and user experience.",
    courses: [
      "Business Intelligence",
      "Business Valuation",
      "Strategic Management",
      "Social Media Management",
      "Consumer Behavior",
      "Managing Digital Organizations",
      "Web & Mobile Technology",
      "User Interface & User Experience Design",
    ],
  },
  {
    number: "05",
    range: "Courses 68—69",
    title: "Global Exposure",
    description: "Expand your perspective through cross-cultural academic experiences.",
    courses: [
      "Exchange Program",
      "Digital Business Elective I",
      "Digital Business Elective II",
      "Cross-cultural Collaboration",
      "Global Business Environment",
      "Independent Study",
    ],
  },
  {
    number: "06",
    range: "Courses 70—73",
    title: "Industry Practice",
    description: "Apply knowledge through meaningful work in real organizations and projects.",
    courses: [
      "Industry Internship",
      "Capstone Project",
      "Industry Mentoring",
      "Applied Digital Business Project",
      "Professional Communication",
      "Impact Evaluation",
    ],
  },
  {
    number: "07",
    range: "Courses 74—79",
    title: "Research & Venture",
    description: "Integrate business, research, and entrepreneurship into a final body of work.",
    courses: [
      "Undergraduate Thesis",
      "Digital Industry Internship",
      "Research Proposal Seminar",
      "Entrepreneurship Internship",
      "Business Project",
      "Research Methods",
    ],
  },
  {
    number: "08",
    range: "Course 80",
    title: "Global Readiness",
    description: "Prepare to communicate, contribute, and lead in global environments.",
    courses: ["TOEFL Preparation"],
  },
]

const careerPaths = [
  ["Digital Business Analyst", "Connect data, technology, and business decisions."],
  ["Product Manager", "Lead digital products from research to launch."],
  ["Business Intelligence", "Turn complex data into actionable insight."],
  ["Digital Entrepreneur", "Build new technology-enabled business models."],
  ["Growth Strategist", "Design sustainable growth across digital channels."],
  ["Digital Marketing Strategist", "Build brands, campaigns, and customer journeys across digital channels."],
  ["Technology Risk Consultant", "Strengthen governance, security, and digital trust."],
]

function App() {
  const [activeSemester, setActiveSemester] = useState(0)
  const [activeAlumni, setActiveAlumni] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentView, setCurrentView] = useState<"home" | "alumni">(() => {
    if (typeof window !== "undefined") {
      return window.location.hash === "#alumni-database" || window.location.pathname === "/alumni"
        ? "alumni"
        : "home"
    }
    return "home"
  })
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const visibleAlumni = [-2, -1, 0, 1, 2].map((offset) => ({
    person: alumni[(activeAlumni + offset + alumni.length * 10) % alumni.length],
    offset,
  }))

  const moveAlumni = (direction: number) => {
    setActiveAlumni((current) => (current + direction + alumni.length) % alumni.length)
  }

  const navigateToAlumni = () => {
    setCurrentView("alumni")
    window.history.pushState(null, "", "#alumni-database")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navigateToHome = () => {
    setCurrentView("home")
    window.history.pushState(null, "", "#alumni")
    setTimeout(() => {
      const el = document.getElementById("alumni")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 60)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      moveAlumni(diff > 0 ? 1 : -1)
    }
    setTouchStartX(null)
  }

  useEffect(() => {
    const onLocationChange = () => {
      const isAlumni =
        window.location.hash === "#alumni-database" || window.location.pathname === "/alumni"
      setCurrentView(isAlumni ? "alumni" : "home")
    }
    window.addEventListener("popstate", onLocationChange)
    window.addEventListener("hashchange", onLocationChange)

    const items = document.querySelectorAll<HTMLElement>(".motion")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )
    items.forEach((item) => observer.observe(item))
    return () => {
      observer.disconnect()
      window.removeEventListener("popstate", onLocationChange)
      window.removeEventListener("hashchange", onLocationChange)
    }
  }, [])

  if (currentView === "alumni") {
    return <AlumniDirectoryPage onBack={navigateToHome} />
  }

  return (
    <div className="site-shell">
      <header className="glass-header">
        <a className="wordmark" href="#top" aria-label="Digital Business Unpad home">
          <img src="/images/unpad-logo.png" alt="" />
          <span className="wordmark-copy">
            <strong>Digital Business</strong>
            <span>Unpad</span>
          </span>
        </a>
        <nav className={menuOpen ? "glass-nav is-open" : "glass-nav"} aria-label="Primary navigation">
          <a href="#program" onClick={() => setMenuOpen(false)}>Program</a>
          <a href="#leadership" onClick={() => setMenuOpen(false)}>Leadership</a>
          <a href="#alumni" onClick={() => setMenuOpen(false)}>Alumni</a>
          <a href="#curriculum" onClick={() => setMenuOpen(false)}>Curriculum</a>
          <a href="#careers" onClick={() => setMenuOpen(false)}>Careers</a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-background" />
          <div className="hero-shade" />
          <div className="hero-content">
            <h1 className="intro-motion intro-delay-one">
              Build the future of business.
            </h1>
            <p className="intro-motion intro-delay-two">
              Digital Business Unpad brings together technology, data, and management to prepare adaptive leaders for the digital economy.
            </p>
          </div>

          <div className="hero-glass-grid intro-motion intro-delay-three">
            <article className="hero-glass-card hero-glass-primary">
              <small>Our perspective</small>
              <strong>Business insight, powered by technology.</strong>
              <span>Digital transformation starts with people who understand both sides.</span>
            </article>
            <article className="hero-glass-card">
              <small>Learning model</small>
              <div className="glass-metric">8</div>
              <span>semesters from foundation to industry impact</span>
            </article>
            <article className="hero-glass-card">
              <small>Core domains</small>
              <ul>
                <li>Business Management</li>
                <li>Data & Analytics</li>
                <li>Digital Technology</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="content-section program-section" id="program">
          <div className="section-label motion">01 · THE PROGRAM</div>
          <div className="split-heading motion">
            <h2>One discipline.<br />Three essential perspectives.</h2>
            <p>
              We educate students to understand how organizations work, how digital products are built, and how data shapes better decisions.
            </p>
          </div>
          <div className="principle-grid">
            {[
              ["01", "Business Management", "Understand markets, organizations, finance, and strategy."],
              ["02", "Data & Analytics", "Find patterns, frame insight, and make evidence-led decisions."],
              ["03", "Digital Technology", "Translate technology into useful and scalable business value."],
            ].map(([number, title, description], index) => (
              <article className="principle-card motion" style={{ "--delay": `${index * 90}ms` } as React.CSSProperties} key={title}>
                <div className="principle-top">
                  <span>{number}</span>
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section leadership-section" id="leadership">
          <div className="leadership-photo motion">
            <img src="/images/head-of-program.png" alt="Dr. Meinanda Kurniawan, Head of Digital Business Program" />
            <div className="photo-data">
              <span>Program leadership</span>
              <strong>FEB · Universitas Padjadjaran</strong>
            </div>
          </div>
          <div className="leadership-content motion">
            <div className="section-label">02 · LEADERSHIP</div>
            <blockquote>
              “Our curriculum integrates digital technology, data analytics, and business management competencies. Therefore, Digital Business graduates are expected to help meet the digital workforce needs of the digital industry.”
            </blockquote>
            <div className="leader-identity">
              <strong>Dr. Meinanda Kurniawan, S.T., M.Bus.(Res.)</strong>
              <span>Head of Digital Business Undergraduate Program</span>
            </div>
          </div>
        </section>

        <section className="content-section alumni-section" id="alumni">
          <div className="section-label motion">03 · ALUMNI NETWORK</div>
          <div className="split-heading motion">
            <h2>From campus to<br />the digital economy.</h2>
            <p>
              Our alumni bring a cross-disciplinary mindset into global companies, consulting, technology, and entrepreneurship.
            </p>
          </div>

          <div
            className="alumni-carousel motion"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="alumni-track" aria-live="polite">
              {visibleAlumni.map(({ person, offset }) => {
                const index = alumni.findIndex((alumnus) => alumnus.name === person.name)
                const roleArea = person.role.includes("Founder")
                  ? "Entrepreneurship"
                  : person.role.includes("Risk")
                  ? "Consulting"
                  : "Industry"
                return (
                  <article
                    className={
                      offset === 0
                        ? "alumni-profile is-active"
                        : Math.abs(offset) === 1
                        ? "alumni-profile is-flank"
                        : "alumni-profile is-outer"
                    }
                    key={person.name}
                    aria-hidden={offset !== 0}
                    onClick={() => offset !== 0 && moveAlumni(offset)}
                  >
                    <div className="alumni-image">
                      <img src={person.image} alt={person.name} />
                      <span>0{index + 1}</span>
                    </div>
                    <div className="alumni-details">
                      <h3>{person.name}</h3>
                      <p>{person.role}</p>
                      <a
                        className="alumni-link"
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={offset === 0 ? 0 : -1}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Open ${person.name}'s LinkedIn profile`}
                      >
                        LinkedIn
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
            <div className="alumni-controls">
              <button type="button" onClick={() => moveAlumni(-1)} aria-label="Show previous alumnus">
                <Icon name="arrow" />
              </button>
              <span>{String(activeAlumni + 1).padStart(2, "0")} / {String(alumni.length).padStart(2, "0")}</span>
              <button type="button" onClick={() => moveAlumni(1)} aria-label="Show next alumnus">
                <Icon name="arrow" />
              </button>
            </div>
          </div>

          <div className="database-action motion" id="alumni-database">
            <button
              className="database-button"
              type="button"
              onClick={navigateToAlumni}
            >
              <span><Icon name="database" />Explore the alumni database</span>
              <Icon name="arrow" />
            </button>
          </div>
        </section>

        <section className="curriculum-section" id="curriculum">
          <div className="curriculum-inner">
            <div className="section-label section-label-light motion">04 · LEARNING JOURNEY</div>
            <div className="split-heading split-heading-light motion">
              <h2>Eight semesters.<br />One integrated journey.</h2>
              <p>
                Move from business foundations to analytics, technology, global exposure, and industry practice.
              </p>
            </div>

            <div className="semester-navigation motion" role="tablist" aria-label="Curriculum semesters">
              {semesters.map((semester, index) => (
                <button
                  key={semester.number}
                  className={activeSemester === index ? "is-active" : ""}
                  type="button"
                  role="tab"
                  aria-selected={activeSemester === index}
                  onClick={() => setActiveSemester(index)}
                >
                  <small>Semester</small>
                  <span>{semester.number}</span>
                </button>
              ))}
            </div>

            <div className="semester-content motion">
              <div className="semester-summary">
                <span>{semesters[activeSemester].range}</span>
                <h3>{semesters[activeSemester].title}</h3>
                <p>{semesters[activeSemester].description}</p>
              </div>
              <div className="course-list">
                {semesters[activeSemester].courses.map((course, index) => (
                  <div key={course}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{course}</strong>
                  </div>
                ))}
              </div>
            </div>
            <p className="curriculum-note motion">
              Course ranges follow the provided curriculum reference and can be expanded with the latest official course list.
            </p>
          </div>
        </section>

        <section className="content-section career-section" id="careers">
          <div className="section-label motion">05 · CAREER PATHS</div>
          <div className="split-heading motion">
            <h2>Ready for roles that<br />shape what comes next.</h2>
            <p>
              Graduates can contribute across product, analytics, consulting, growth, technology governance, and entrepreneurship.
            </p>
          </div>
          <div className="career-list">
            {careerPaths.map(([title, description], index) => (
              <article className="career-row motion" style={{ "--delay": `${index * 60}ms` } as React.CSSProperties} key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-image motion">
            <img src="/images/feb-lead-building.png" alt="LEAD Building, Faculty of Economics and Business, Universitas Padjadjaran" />
            <div className="pixel-overlay" aria-hidden="true" />
            <div className="pixel-cluster" aria-hidden="true">
              <i /><i /><i /><i /><i /><i />
            </div>
            <span className="building-label">FEB UNPAD · LEAD BUILDING</span>
          </div>
          <div className="contact-content motion">
            <div className="section-label section-label-light">STUDY AT UNPAD</div>
            <h2>Your digital journey can begin here.</h2>
            <p>
              Find official admission information through SMUP Universitas Padjadjaran or contact the Faculty of Economics and Business.
            </p>
            <div className="contact-information">
              <a href="https://smup.unpad.ac.id/" target="_blank" rel="noreferrer">
                <span>Admissions</span>
                <strong>smup.unpad.ac.id</strong>
              </a>
              <a href="mailto:feb@unpad.ac.id">
                <span>Email</span>
                <strong>feb@unpad.ac.id</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <strong>Digital Business Unpad</strong>
        <span>Faculty of Economics and Business · Universitas Padjadjaran</span>
        <span>Jatinangor, Indonesia</span>
      </footer>
    </div>
  )
}

export default App
