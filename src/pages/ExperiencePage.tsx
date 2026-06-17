import { timeline, certifications } from '../data/portfolio'
import { useTheme } from '../context/ThemeContext'

const categoryColors: Record<string, { bg: string; darkBg: string; text: string; darkText: string }> = {
  'AI & Productivity':    { bg: '#BDE0FE55', darkBg: '#BDE0FE25', text: '#3D7FA8', darkText: '#BDE0FE' },
  'Artificial Intelligence': { bg: '#FFC8DD55', darkBg: '#FFC8DD25', text: '#A0436A', darkText: '#FFC8DD' },
  'Project Management':   { bg: '#FFD6A555', darkBg: '#FFD6A525', text: '#9A5C1A', darkText: '#FFD6A5' },
}

function getCategoryStyle(category: string, isDark: boolean) {
  const c = categoryColors[category] ?? { bg: '#ECECEC', darkBg: '#ECECEC25', text: '#6B7280', darkText: '#9AA0B8' }
  return { backgroundColor: isDark ? c.darkBg : c.bg, color: isDark ? c.darkText : c.text }
}

export default function ExperiencePage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-[#A2D2FF] dark:bg-[#FDFFB6]" />
          <span className="text-[#5B9EC8] dark:text-[#FDFFB6] text-sm font-semibold uppercase tracking-widest">
            Career
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F2933] dark:text-[#F0EFE9] mb-3">Experience</h1>
        <p className="text-lg text-[#6B7280] dark:text-[#8892AA] mb-14 max-w-2xl">
          Roles that helped me build skills across data, web development, project management,
          healthcare, product thinking, and technical collaboration.
        </p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-[2px] bg-[#ECECEC] dark:bg-[#252B3B]" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-8 md:gap-12">
                <div className="relative z-10 flex-shrink-0 flex flex-col items-center">
                  <div
                    className="w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-white dark:border-[#0F1117] shadow-md flex items-center justify-center"
                    style={{ backgroundColor: item.color }}
                  >
                    <span
                      className="text-[9px] md:text-[10px] font-bold leading-tight text-center px-0.5"
                      style={{ color: item.textColor }}
                    >
                      {item.year.replace(' – ', '\n')}
                    </span>
                  </div>
                </div>

                <div className="flex-1 bg-white dark:bg-[#181C27] border border-[#ECECEC] dark:border-[#252B3B] rounded-xl p-5 md:p-6 hover:shadow-sm transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-[#1F2933] dark:text-[#F0EFE9]">{item.role}</h3>
                      <p className="text-sm font-semibold text-[#5B9EC8] dark:text-[#FFD6A5]">{item.organization}</p>
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 self-start"
                      style={{
                        backgroundColor: isDark ? item.color + '25' : item.color + '55',
                        color: isDark ? item.color : item.textColor,
                      }}
                    >
                      {item.type}
                    </span>
                  </div>

                  <p className="text-sm text-[#6B7280] dark:text-[#8892AA] leading-relaxed mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#FFFDF7] dark:bg-[#0F1117] border border-[#ECECEC] dark:border-[#252B3B] text-[#6B7280] dark:text-[#8892AA]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Certifications ─────────────────────────────── */}
        <div className="mt-24">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#A2D2FF] dark:bg-[#FDFFB6]" />
            <span className="text-[#5B9EC8] dark:text-[#FDFFB6] text-sm font-semibold uppercase tracking-widest">
              Learning
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] dark:text-[#F0EFE9] mb-3">Certifications</h2>
          <p className="text-base text-[#6B7280] dark:text-[#8892AA] mb-10 max-w-2xl">
            Courses and certifications that reflect my commitment to continuous learning across AI,
            project management, and technology.
          </p>

          <div className="flex flex-col gap-4">
            {certifications.map((cert, idx) => {
              const style = getCategoryStyle(cert.category, isDark)
              const dotColors = ['#A2D2FF', '#A2D2FF', '#FFC8DD', '#FFD6A5']
              const dot = dotColors[idx % dotColors.length]
              return (
                <div
                  key={cert.name}
                  className="bg-white dark:bg-[#181C27] border border-[#ECECEC] dark:border-[#252B3B] rounded-xl p-5 hover:shadow-sm transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: dot }} />
                      <div>
                        <h3 className="text-base font-bold text-[#1F2933] dark:text-[#F0EFE9] mb-1">{cert.name}</h3>
                        <p className="text-sm text-[#6B7280] dark:text-[#8892AA] leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0 sm:flex-col sm:items-end">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                        style={style}
                      >
                        {cert.category}
                      </span>
                      <span className="text-xs text-[#6B7280] dark:text-[#8892AA] whitespace-nowrap">{cert.date}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
