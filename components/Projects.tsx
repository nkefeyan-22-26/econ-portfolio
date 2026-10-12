"use client";

interface Project {
  number: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  tag: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Instrumental Variables Replication Project",
    description:
      "Replicated Angrist & Evans (1998) with 2SLS on 394,840 mothers from the 1980 Census, using same-sex siblings as an instrument for family size, and reproduced the published estimates exactly: a third child reduces mothers' weeks worked by about 5.6 per year, with no detectable effect on husbands. Diagnosed and corrected a sample-construction error in my first version that had tripled the estimate.",
    tech: ["Python", "pandas", "numpy", "statsmodels", "linearmodels", "matplotlib", "Jupyter"],
    github: "https://github.com/nkefeyan-22-26/child-penalty-iv-replication",
    tag: "Causal Inference",
  },
  {
    number: "02",
    title: "Eviction Moratoriums & Filing Rates — DiD Analysis",
    description:
      "Estimated the causal effect of local eviction moratoriums on eviction filing rates during COVID-19 using a Difference-in-Differences (DiD) strategy with Two-Way Fixed Effects (TWFE). Leveraged Princeton Eviction Lab's Eviction Tracking System for a panel of U.S. cities from 2020.",
    tech: ["Python 3.11", "pandas", "numpy", "statsmodels", "matplotlib", "seaborn", "Streamlit", "Plotly"],
    github: "https://github.com/nkefeyan-22-26/econ5200-final-project",
    tag: "Panel Data · Policy",
  },
  {
    number: "03",
    title: "Senior Economics Thesis",
    description:
      "Examined public school funding disparities between New Bedford and Dartmouth, MA using per-pupil spending, Chapter 70 aid, Census microdata, and MA EOLWD data across a pre- and post-pandemic 10-year panel (2014–2024). Synthesized 1,000+ pages of WIOA reports to support empirical analysis and policy recommendations on workforce development resilience.",
    tech: ["Microsoft Excel", "Census Microdata", "EOLWD Data", "WIOA Reports"],
    github: "",
    tag: "Workforce Policy",
  },
];

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #071527 0%, #0b3225 40%, #0d1f3c 70%, #071527 100%)",
        }}
      />

      <div
        className="absolute left-0 top-0 w-px h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(201,168,76,0.2), transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#c9a84c] mb-3">
            02 · Projects
          </p>
          <h2
            className="font-[family-name:var(--font-syne)] font-600 text-[#f2ede4]"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
          >
            Selected Work
          </h2>
          <div
            className="mt-4"
            style={{
              height: "1px",
              width: "60px",
              background: "linear-gradient(90deg, #c9a84c, transparent)",
            }}
          />
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-8">
          {projects.map((p) => (
            <article
              key={p.number}
              className="group relative p-8 border border-[#c9a84c]/15 hover:border-[#c9a84c]/35 transition-all duration-400 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13,31,60,0.5) 0%, rgba(11,50,37,0.25) 100%)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(21,96,68,0.08) 100%)",
                }}
              />

              <div className="relative flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Number */}
                <span
                  className="font-[family-name:var(--font-syne)] font-700 text-[#c9a84c]/20 group-hover:text-[#c9a84c]/40 transition-colors shrink-0"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  {p.number}
                </span>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <h3
                      className="font-[family-name:var(--font-syne)] font-600 text-[#f2ede4] leading-snug"
                      style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
                    >
                      {p.title}
                    </h3>
                    <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-widest uppercase px-2.5 py-1 border border-[#156044] text-[#c9a84c] bg-[#0f4533]/30 whitespace-nowrap">
                      {p.tag}
                    </span>
                  </div>

                  <p className="font-[family-name:var(--font-inter)] font-300 text-[#c8bfaf] leading-7 text-sm mb-5">
                    {p.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-[family-name:var(--font-inter)] text-[10px] tracking-wide px-2.5 py-1 text-[#8fa3bb] border border-[#8fa3bb]/20 bg-[#0d1f3c]/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[#c9a84c] hover:text-[#e0bb70] transition-colors group/link"
                    >
                      <GithubIcon />
                      <span>View on GitHub</span>
                      <span className="inline-block transition-transform group-hover/link:translate-x-1">
                        →
                      </span>
                    </a>
                  )}
                  {!p.github && (
                    <span className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[#8fa3bb]/60">
                      Thesis — Available Upon Request
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
