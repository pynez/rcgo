// Decorative sunburst echoing the rays in the RB Foundation logo.
// Purely ornamental, so it is hidden from assistive tech.
export default function Sunburst({ className = '', rays = 24 }) {
  const lines = Array.from({ length: rays })

  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <g stroke="currentColor" strokeLinecap="round">
        {lines.map((_, i) => {
          const angle = (i / rays) * Math.PI * 2
          const inner = 40
          const outer = i % 2 === 0 ? 94 : 76
          const x1 = 100 + Math.cos(angle) * inner
          const y1 = 100 + Math.sin(angle) * inner
          const x2 = 100 + Math.cos(angle) * outer
          const y2 = 100 + Math.sin(angle) * outer
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth={i % 2 === 0 ? 2.4 : 1.4}
            />
          )
        })}
      </g>
    </svg>
  )
}
