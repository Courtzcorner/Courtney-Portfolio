import { certifications } from '../data/portfolio'

const categoryColors: Record<string, { bg: string; text: string }> = {
  'AI & Productivity': { bg: '#BDE0FE55', text: '#3D7FA8' },
  'Artificial Intelligence': { bg: '#FFC8DD55', text: '#A0436A' },
  'Project Management': { bg: '#FFD6A555', text: '#9A5C1A' },
}

function getCategoryStyle(category: string) {
  return (
    categoryColors[category] ?? { bg: '#ECECEC', text: '#6B7280' }
  )
}

export default function CertificationsPage() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-[#A2D2FF]" />
          <span className="text-[#5B9EC8] text-sm font-semibold uppercase tracking-widest">
            Learning
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F2933] mb-3">Certifications</h1>
        <p className="text-lg text-[#6B7280] mb-14 max-w-2xl">
          Courses and certifications that reflect my commitment to continuous learning across AI,
          project management, and technology.
        </p>

        <div className="flex flex-col gap-5">
          {certifications.map((cert, idx) => {
            const style = getCategoryStyle(cert.category)
            const dotColors = ['#A2D2FF', '#FFC8DD', '#FFD6A5']
            const dot = dotColors[idx % dotColors.length]
            return (
              <div
                key={cert.name}
                className="bg-white border border-[#ECECEC] rounded-xl p-6 hover:shadow-sm transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
                      style={{ backgroundColor: dot }}
                    />
                    <div>
                      <h2 className="text-base md:text-lg font-bold text-[#1F2933] mb-1">
                        {cert.name}
                      </h2>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 sm:flex-col sm:items-end">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ backgroundColor: style.bg, color: style.text }}
                    >
                      {cert.category}
                    </span>
                    <span className="text-xs text-[#6B7280] whitespace-nowrap">{cert.date}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
