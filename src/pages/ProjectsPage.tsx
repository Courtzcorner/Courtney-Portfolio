import { ArrowUpRight, Lock } from 'lucide-react'
import { projects } from '../data/portfolio'
import { asset } from '../utils/asset'

export default function ProjectsPage() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-[#A2D2FF] dark:bg-[#FDFFB6]" />
          <span className="text-[#5B9EC8] dark:text-[#FDFFB6] text-sm font-semibold uppercase tracking-widest">Work</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F2933] dark:text-[#F0EFE9] mb-3">Projects</h1>
        <p className="text-lg text-[#6B7280] dark:text-[#8892AA] mb-14 max-w-2xl">
          Technical and product projects where I practice building, designing, and thinking through
          user needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white dark:bg-[#181C27] border border-[#ECECEC] dark:border-[#252B3B] rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-1 w-full bg-[#A2D2FF]" />
              <div className="p-6 flex flex-col flex-1">

                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-lg font-bold text-[#1F2933] dark:text-[#F0EFE9]">{project.name}</h2>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 border bg-[#BDE0FE]/50 dark:bg-[#FDFFB6]/15 text-[#3D7FA8] dark:text-[#FDFFB6] border-[#BDE0FE] dark:border-[#FDFFB6]/30">
                    {project.status}
                  </span>
                </div>

                <p className="text-xs font-semibold text-[#5B9EC8] dark:text-[#FFD6A5] mb-3 uppercase tracking-wide">
                  {project.productAngle}
                </p>

                <p className="text-sm text-[#6B7280] dark:text-[#8892AA] leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Extended details for classified projects */}
                {project.details && (
                  <p className="text-sm text-[#6B7280]/80 dark:text-[#8892AA]/70 leading-relaxed mb-4 italic border-l-2 border-[#ECECEC] dark:border-[#252B3B] pl-3">
                    {project.details}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-5 mt-auto pt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#FFFDF7] dark:bg-[#0F1117] border border-[#ECECEC] dark:border-[#252B3B] text-[#6B7280] dark:text-[#8892AA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Classified badge OR normal link button */}
                {project.isClassified ? (
                  <div className="flex flex-col gap-1.5">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B9EC8] dark:text-[#FDFFB6]">
                      <Lock size={13} />
                      Classified Project
                    </div>
                    {project.classifiedNote && (
                      <p className="text-xs text-[#6B7280] dark:text-[#8892AA]">{project.classifiedNote}</p>
                    )}
                  </div>
                  ) : project.buttonHref ? (
                  <a
                    href={project.download ? asset(project.buttonHref) : project.buttonHref}
                    {...(project.download ? { download: true } : { target: '_blank', rel: 'noreferrer' })}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B9EC8] dark:text-[#FDFFB6] hover:text-[#3D7FA8] dark:hover:text-[#FFD6A5] transition-colors"
                  >
                    {project.buttonText}
                    <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
