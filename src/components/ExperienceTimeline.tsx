import { timeline } from '../data/portfolio'

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#FFFDF7]">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#A2D2FF]" />
            <span className="text-[#5B9EC8] text-sm font-semibold uppercase tracking-widest">
              Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2933] mb-4">
            Experience Timeline
          </h2>
          <p className="text-[#6B7280] max-w-2xl leading-relaxed">
            Roles that helped me build skills across data, web development, project management,
            product thinking, and technical collaboration.
          </p>
        </div>

        {/* Desktop alternating timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Continuous center line */}
            <div className="absolute left-1/2 top-3 bottom-3 w-[2px] bg-[#ECECEC] -translate-x-1/2" />

            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="grid items-start mb-12 last:mb-0"
                  style={{ gridTemplateColumns: '1fr 56px 1fr' }}
                >
                  {/* Left content (even items) */}
                  <div className="pr-8 flex justify-end">
                    {i % 2 === 0 && <TimelineCard item={item} align="right" />}
                  </div>

                  {/* Center: marker + year badge */}
                  <div className="flex flex-col items-center z-10 pt-1">
                    <div
                      className="w-5 h-5 rounded-full border-[3px] border-[#FFFDF7] shadow-sm flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span
                      className="mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap leading-tight"
                      style={{ backgroundColor: item.color, color: item.textColor }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Right content (odd items) */}
                  <div className="pl-8">
                    {i % 2 !== 0 && <TimelineCard item={item} align="left" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-5">
              {/* Left: marker + connecting line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-4 h-4 rounded-full border-2 border-[#FFFDF7] shadow-sm mt-1 flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                {i < timeline.length - 1 && (
                  <div className="w-[2px] flex-1 min-h-[24px] bg-[#ECECEC] my-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10 flex-1 min-w-0">
                <span
                  className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2"
                  style={{ backgroundColor: item.color, color: item.textColor }}
                >
                  {item.year}
                </span>
                <h3 className="font-bold text-[#1F2933] text-sm mb-0.5 leading-snug">{item.role}</h3>
                <p className="text-xs font-semibold mb-0.5" style={{ color: item.textColor }}>
                  {item.organization}
                </p>
                <p className="text-[11px] text-[#6B7280] mb-2">{item.type}</p>
                <p className="text-xs text-[#1F2933]/65 leading-relaxed mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#ECECEC] text-[#6B7280]"
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
    </section>
  )
}

interface TimelineCardProps {
  item: (typeof timeline)[0]
  align: 'left' | 'right'
}

function TimelineCard({ item, align }: TimelineCardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-[#ECECEC] p-5 max-w-xs w-full hover:shadow-sm transition-shadow ${
        align === 'right' ? 'text-right' : 'text-left'
      }`}
    >
      {/* Role */}
      <h3 className="font-bold text-[#1F2933] text-sm leading-snug mb-1">{item.role}</h3>

      {/* Organization */}
      <p className="text-xs font-semibold mb-0.5" style={{ color: item.textColor }}>
        {item.organization}
      </p>

      {/* Type */}
      <p className="text-[11px] text-[#6B7280] mb-3">{item.type}</p>

      {/* Description */}
      <p className="text-[11px] text-[#1F2933]/60 leading-relaxed mb-3">{item.description}</p>

      {/* Skills */}
      <div className={`flex flex-wrap gap-1.5 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        {item.skills.slice(0, 4).map((skill) => (
          <span
            key={skill}
            className="text-[10px] font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: `${item.color}60`, color: item.textColor }}
          >
            {skill}
          </span>
        ))}
        {item.skills.length > 4 && (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#ECECEC] text-[#6B7280]">
            +{item.skills.length - 4}
          </span>
        )}
      </div>
    </div>
  )
}
