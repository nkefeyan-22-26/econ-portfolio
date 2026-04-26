"use client";

const interests = [
  {
    icon: "◈",
    title: "Workforce Development",
    body: "Analyzing labor market dynamics, skill mismatches, and the effectiveness of workforce training programs — particularly through WIOA-funded initiatives and regional economic data.",
  },
  {
    icon: "◈",
    title: "Economic Development & Inequality",
    body: "Investigating how public funding mechanisms and institutional factors shape regional economic outcomes, with a focus on education finance and inter-district disparities.",
  },
  {
    icon: "◈",
    title: "Sustainability Economics",
    body: "Exploring the economic dimensions of environmental policy, green transitions, and how sustainable development goals intersect with labor market outcomes.",
  },
  {
    icon: "◈",
    title: "Causal Inference & Econometrics",
    body: "Applying rigorous identification strategies — instrumental variables, difference-in-differences, panel fixed effects — to isolate causal mechanisms in economic data.",
  },
  {
    icon: "◈",
    title: "Machine Learning for Economics",
    body: "Leveraging ML and AI methods to improve economic forecasting, uncover heterogeneous treatment effects, and analyze large-scale administrative datasets.",
  },
  {
    icon: "◈",
    title: "Housing & Urban Economics",
    body: "Studying how housing policy, eviction dynamics, and urban spatial structure interact with labor mobility and economic resilience.",
  },
];

export default function Research() {
  return (
    <section id="research" className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #071527 0%, #0d1f3c 50%, #071527 100%)",
        }}
      />

      {/* Decorative corner */}
      <div
        className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(21,96,68,0.2) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#c9a84c] mb-3">
            03 · Research
          </p>
          <h2
            className="font-[family-name:var(--font-syne)] font-600 text-[#f2ede4]"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
          >
            Research Interests
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item) => (
            <div
              key={item.title}
              className="group p-6 border border-[#c9a84c]/15 hover:border-[#c9a84c]/35 transition-all duration-300 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13,31,60,0.6) 0%, rgba(11,50,37,0.2) 100%)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #c9a84c, transparent)",
                }}
              />

              <div className="text-[#c9a84c] text-xl mb-4">{item.icon}</div>
              <h3 className="font-[family-name:var(--font-syne)] font-600 text-[#f2ede4] text-lg mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] font-300 text-sm text-[#c8bfaf] leading-6">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 text-center">
          <div
            className="mx-auto mb-8"
            style={{
              height: "1px",
              width: "120px",
              background:
                "linear-gradient(90deg, transparent, #c9a84c, transparent)",
            }}
          />
          <p className="font-[family-name:var(--font-syne)] italic text-[#8fa3bb] text-lg max-w-2xl mx-auto leading-8">
            Driven by the belief that rigorous empirical research can bridge the
            gap between economic theory and real-world policy impact.
          </p>
        </div>
      </div>
    </section>
  );
}
