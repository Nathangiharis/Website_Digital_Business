import { useState, useMemo } from "react"
import { allAlumniDatabase, getInitials, Alumnus } from "./alumniData"

interface AlumniDirectoryPageProps {
  onBack: () => void
}

export function AlumniDirectoryPage({ onBack }: AlumniDirectoryPageProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = [
    "All",
    "Technology & AI",
    "Consulting & Risk",
    "Banking & Finance",
    "E-Commerce & Digital",
    "FMCG & Operations",
    "Entrepreneurship",
  ]

  const getCategory = (role: string): string => {
    const lower = role.toLowerCase()
    if (lower.includes("founder")) return "Entrepreneurship"
    if (
      lower.includes("developer") ||
      lower.includes("engineer") ||
      lower.includes("data") ||
      lower.includes("product") ||
      lower.includes("ai")
    ) {
      return "Technology & AI"
    }
    if (
      lower.includes("risk") ||
      lower.includes("consultant") ||
      lower.includes("bcg") ||
      lower.includes("ey") ||
      lower.includes("case team")
    ) {
      return "Consulting & Risk"
    }
    if (
      lower.includes("bank") ||
      lower.includes("bca") ||
      lower.includes("bjb") ||
      lower.includes("bri") ||
      lower.includes("mandiri") ||
      lower.includes("danamon") ||
      lower.includes("superbank") ||
      lower.includes("finance") ||
      lower.includes("credit")
    ) {
      return "Banking & Finance"
    }
    if (
      lower.includes("e-commerce") ||
      lower.includes("marketing") ||
      lower.includes("brand") ||
      lower.includes("tiktok") ||
      lower.includes("grab") ||
      lower.includes("commerce")
    ) {
      return "E-Commerce & Digital"
    }
    return "FMCG & Operations"
  }

  const filteredAlumni = useMemo(() => {
    return allAlumniDatabase.filter((person: Alumnus) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.role.toLowerCase().includes(searchQuery.toLowerCase())

      const category = getCategory(person.role)
      const matchesCategory =
        selectedCategory === "All" ||
        category === selectedCategory ||
        (selectedCategory === "Technology & AI" && category === "Entrepreneurship")

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="directory-page">
      {/* Header bar */}
      <header className="directory-topbar">
        <div className="directory-topbar-inner">
          <button
            type="button"
            className="directory-back-btn"
            onClick={onBack}
            aria-label="Back to landing page"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5" />
              <path d="m11 18-6-6 6-6" />
            </svg>
            <span>Back to Overview</span>
          </button>

          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              onBack()
            }}
            className="wordmark"
            aria-label="Digital Business Unpad"
          >
            <img src="/images/unpad-logo.png" alt="" />
            <span className="wordmark-copy">
              <strong>Digital Business</strong>
              <span>Unpad</span>
            </span>
          </a>

          <div className="directory-badge">
            <span>{allAlumniDatabase.length} Alumni Directory</span>
          </div>
        </div>
      </header>

      <main className="directory-main">
        <section className="directory-hero">
          <div className="section-label">03 · ALUMNI NETWORK & DIRECTORY</div>
          <div className="split-heading">
            <div>
              <h1>Alumni Database</h1>
              <p className="directory-subheading">
                Graduates of Digital Business Universitas Padjadjaran shaping technology, consulting, finance, and entrepreneurship globally.
              </p>
            </div>
            <div className="directory-stat-card">
              <small>TOTAL REGISTERED</small>
              <strong>{allAlumniDatabase.length}</strong>
              <span>Alphabetically indexed (A—Z)</span>
            </div>
          </div>

          {/* Search & filter toolbar */}
          <div className="directory-toolbar">
            <div className="directory-search-wrapper">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search alumni by name, role, or company..."
                aria-label="Search alumni"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="directory-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="directory-filter-chips" role="tablist" aria-label="Alumni categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={selectedCategory === cat ? "filter-chip is-active" : "filter-chip"}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="directory-results-bar">
            <span>
              Showing <strong>{filteredAlumni.length}</strong> of {allAlumniDatabase.length} alumni (sorted A—Z)
            </span>
            {searchQuery && (
              <button
                type="button"
                className="directory-reset-link"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
              >
                Reset filters
              </button>
            )}
          </div>
        </section>

        {/* Alumni Card Grid */}
        <section className="directory-grid-section">
          {filteredAlumni.length === 0 ? (
            <div className="directory-empty-state">
              <div className="empty-icon">✕</div>
              <h3>No alumni found</h3>
              <p>We couldn't find anyone matching "{searchQuery}". Try a different name or role.</p>
              <button
                type="button"
                className="database-button"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="directory-grid">
              {filteredAlumni.map((person, index) => {
                const initials = getInitials(person.name)
                return (
                  <article className="directory-card" key={person.name}>
                    <div className="alumni-image directory-card-image">
                      {person.image ? (
                        <img src={person.image} alt={person.name} />
                      ) : (
                        <div className="directory-monogram" aria-hidden="true">
                          <span>{initials}</span>
                          <small>FEB UNPAD</small>
                        </div>
                      )}
                      <span className="directory-card-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="alumni-details directory-card-details">
                      <h3>{person.name}</h3>
                      <p>{person.role}</p>
                      <a
                        className="alumni-link"
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${person.name}'s LinkedIn profile`}
                      >
                        LinkedIn
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          <div className="directory-footer-action">
            <button
              type="button"
              className="directory-back-btn directory-back-btn-large"
              onClick={onBack}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="m11 18-6-6 6-6" />
              </svg>
              <span>Back to Landing Page</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="directory-footer">
        <strong>Digital Business Unpad</strong>
        <span>Faculty of Economics and Business · Universitas Padjadjaran</span>
        <span>Jatinangor, Indonesia</span>
      </footer>
    </div>
  )
}
