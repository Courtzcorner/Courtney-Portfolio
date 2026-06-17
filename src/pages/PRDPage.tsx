import { Download } from 'lucide-react'
import { prds } from '../data/portfolio'

export default function PRDPage() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-[#A2D2FF] dark:bg-[#FDFFB6]" />
          <span className="text-[#5B9EC8] dark:text-[#FDFFB6] text-sm font-semibold uppercase tracking-widest">
            Product Thinking
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F2933] dark:text-[#F0EFE9] mb-3">
          Product Requirement Documents
        </h1>
        <p className="text-lg text-[#6B7280] dark:text-[#8892AA] mb-14 max-w-2xl">
          Mock PRDs and product thinking documents that show how I define users, problems,
          requirements, success metrics, tradeoffs, and launch risks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prds.map((prd, idx) => {
            const accentColors = ['#A2D2FF', '#FFC8DD', '#FFD6A5', '#FDFFB6']
            const textColors = ['#3D7FA8', '#A0436A', '#9A5C1A', '#7A6F00']
            const accent = accentColors[idx % accentColors.length]
            const textColor = textColors[idx % textColors.length]

            return (
              <div
                key={prd.title}
                className="bg-white dark:bg-[#181C27] border border-[#ECECEC] dark:border-[#252B3B] rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-1 w-full" style={{ backgroundColor: accent }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="text-lg font-bold text-[#1F2933] dark:text-[#F0EFE9]">{prd.title}</h2>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: accent + '55', color: textColor }}
                    >
                      {prd.context}
                    </span>
                  </div>

                  <p className="text-sm text-[#6B7280] dark:text-[#8892AA] leading-relaxed mb-4">{prd.description}</p>

                  <div className="space-y-3 mb-6 flex-1">
                    <div>
                      <p className="text-xs font-bold text-[#1F2933]/50 dark:text-[#F0EFE9]/40 uppercase tracking-widest mb-1">
                        Problem
                      </p>
                      <p className="text-sm text-[#6B7280] dark:text-[#8892AA] leading-relaxed">{prd.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1F2933]/50 dark:text-[#F0EFE9]/40 uppercase tracking-widest mb-1">
                        Success Metrics
                      </p>
                      <p className="text-sm text-[#6B7280] dark:text-[#8892AA] leading-relaxed">{prd.metrics}</p>
                    </div>
                  </div>

                  <a
                    href={prd.downloadHref}
                    download
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors w-full"
                    style={{ backgroundColor: accent + '33', color: textColor }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accent + '88')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = accent + '33')}
                  >
                    <Download size={14} />
                    Download PRD
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
