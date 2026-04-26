"use client";

const highlights = [
  { label: "Field", value: "Economics & Data Science" },
  { label: "Focus", value: "Workforce Analysis · Economic Development · Sustainability" },
  { label: "Methods", value: "Causal Inference · Machine Learning · AI" },
  { label: "Experience", value: "Consulting · Technology · Research" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #071527 0%, #0d1f3c 50%, #071527 100%)",
        }}
      />

      {/* Subtle green accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(11,50,37,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#c9a84c] mb-3">
            01 · About
          </p>
          <h2
            className="font-[family-name:var(--font-syne)] font-600 text-[#f2ede4]"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
          >
            Who I Am
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <p
              className="font-[family-name:var(--font-inter)] font-300 leading-8 text-[#c8bfaf]"
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)" }}
            >
              I am an Economics student at Northeastern University interested in
              workforce analysis, economic development, and sustainability. I enjoy
              using data science, machine learning, and AI to predict economic
              outcomes.
            </p>
            <p
              className="font-[family-name:var(--font-inter)] font-300 leading-8 text-[#c8bfaf] mt-6"
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)" }}
            >
              Throughout my college experience, I&apos;ve gained professional experience
              in consulting, tech, and research sectors — applying rigorous
              econometric methods to real-world policy questions.
            </p>

            {/* Quote */}
            <blockquote className="mt-10 pl-5 border-l-2 border-[#c9a84c]">
              <p className="font-[family-name:var(--font-syne)] italic text-[#e0bb70] text-lg leading-7">
                &ldquo;Using data to illuminate economic reality and inform
                better policy.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="p-5 border border-[#c9a84c]/15 hover:border-[#c9a84c]/40 transition-colors duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(13,31,60,0.6) 0%, rgba(11,50,37,0.3) 100%)",
                }}
              >
                <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">
                  {h.label}
                </p>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#f2ede4] leading-6">
                  {h.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
