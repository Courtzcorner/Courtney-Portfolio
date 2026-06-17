import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'

const statusStyles: Record<string, { bg: string; text: string }> = {
  'Internal Project':      { bg: '#A2D2FF40', text: '#1D5F96' },
  'Full Stack Mobile App': { bg: '#FFC8DD40', text: '#A0436A' },
  'MVP In Progress':       { bg: '#FFD6A540', text: '#9A5C1A' },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#A2D2FF]" />
            <span className="text-[#5B9EC8] text-sm font-semibold uppercase tracking-widest">
              Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2933] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#6B7280] max-w-2xl leading-relaxed">
            Product and technical projects that show how I think about users, systems, and impact.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const sc = statusStyles[project.status] ?? { bg: '#ECECEC', text: '#6B7280' }
            return (
              <div
                key={project.name}
                className="bg-[#FFFDF7] border border-[#ECECEC] rounded-xl overflow-hidden flex flex-col hover:shadow-md transition-shadow group"
              >
                {/* Blue top accent bar — consistent across all project cards */}
                <div className="h-1 w-full bg-[#A2D2FF]" />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Number + status */}
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-bold text-[#ECECEC] leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: sc.bg, color: sc.text }}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Project name */}
                  <div>
                    <h3 className="font-bold text-[#1F2933] text-lg leading-snug mb-1">
                      {project.name}
                    </h3>
                    <p className="text-xs text-[#5B9EC8] font-medium">{project.productAngle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#6B7280] leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-medium rounded bg-[#ECECEC] text-[#6B7280]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={project.buttonHref}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B9EC8] hover:text-[#3D7FA8] transition-colors"
                  >
                    {project.buttonText}
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
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
