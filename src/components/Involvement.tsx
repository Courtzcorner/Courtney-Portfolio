import { Users, Star, Briefcase, Code2 } from 'lucide-react'
import { involvements } from '../data/portfolio'

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={18} />,
  Star: <Star size={18} />,
  Briefcase: <Briefcase size={18} />,
  Code2: <Code2 size={18} />,
}

const cardAccents = ['#A2D2FF', '#FFC8DD', '#A2D2FF', '#FFC8DD']

export default function Involvement() {
  return (
    <section id="involvement" className="py-24 px-6 bg-[#FFFDF7] dark:bg-[#0F1117] transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#A2D2FF] dark:bg-[#FDFFB6]" />
            <span className="text-[#5B9EC8] dark:text-[#FDFFB6] text-sm font-semibold uppercase tracking-widest">
              Community
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] dark:text-[#F0EFE9] mb-3">
            Campus Involvement
          </h2>
          <p className="text-base text-[#6B7280] dark:text-[#8892AA] max-w-2xl leading-relaxed">
            I stay involved in organizations that help me grow as a technologist, leader, and future
            product manager. I value learning from others, sharing resources, and creating spaces
            where students can explore technology with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {involvements.map((item, idx) => (
            <div
              key={item.org}
              className="bg-white dark:bg-[#181C27] border border-[#ECECEC] dark:border-[#252B3B] rounded-xl overflow-hidden hover:shadow-sm transition-shadow"
            >
              <div className="h-1 w-full" style={{ backgroundColor: cardAccents[idx % cardAccents.length] }} />
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[#5B9EC8] dark:text-[#FDFFB6] mt-0.5 flex-shrink-0">
                    {iconMap[item.icon]}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1F2933] dark:text-[#F0EFE9] leading-snug">
                      {item.org}
                    </h3>
                    <p className="text-xs font-semibold text-[#5B9EC8] dark:text-[#FFD6A5] mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#6B7280] dark:text-[#8892AA] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
