import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, Download, Mail } from 'lucide-react'
import { personal, resumeHref } from '../data/portfolio'
import RotatingGreeting from '../components/RotatingGreeting'
import Involvement from '../components/Involvement'
import RecentPosts from '../components/RecentPosts'

const YoutubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FFFDF7"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const exploreTiles = [
  { label: 'Projects', sub: 'Technical & product work', to: '/projects', color: '#A2D2FF' },
  { label: 'Experience', sub: '7 roles across tech & product', to: '/experience', color: '#FFC8DD' },
  { label: 'PRDs', sub: 'Mock product documents', to: '/prds', color: '#FFD6A5' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section id="hero" className="min-h-[calc(100vh-60px)] flex flex-col justify-center pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">

            {/* Left */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#A2D2FF] dark:bg-[#FDFFB6]" />
                <span className="text-[#5B9EC8] dark:text-[#FDFFB6] text-sm font-semibold uppercase tracking-widest">
                  Portfolio
                </span>
              </div>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1F2933] dark:text-[#F0EFE9] leading-none tracking-tight mb-5"
                aria-label="Hello, I'm Courtney."
              >
                <span className="sr-only">Hello, I'm Courtney.</span>
                <span aria-hidden="true" className="flex flex-row items-baseline" style={{ flexWrap: 'nowrap' }}>
                  <RotatingGreeting />
                  <span style={{ whiteSpace: 'nowrap' }}>, I'm Courtney.</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#5B9EC8] dark:text-[#FFD6A5] font-medium mb-4">
                {personal.headline}
              </p>
              <p className="text-base md:text-lg text-[#1F2933]/55 dark:text-[#8892AA] mb-6 max-w-xl leading-relaxed">
                {personal.subheadline}
              </p>

              <div className="w-16 h-[2px] bg-[#ECECEC] dark:bg-[#252B3B] mb-6" />

              <div className="flex flex-col gap-1.5 mb-8">
                {personal.introBullets.map((line) => (
                  <p key={line} className="text-base md:text-lg text-[#1F2933]/80 dark:text-[#F0EFE9]/80 font-medium leading-snug">
                    {line}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {personal.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[#BDE0FE]/50 dark:bg-[#FDFFB6]/15 text-[#3D7FA8] dark:text-[#FDFFB6] border border-[#BDE0FE] dark:border-[#FDFFB6]/30"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#A2D2FF] dark:bg-[#FDFFB6] text-[#1F2933] text-sm font-semibold rounded-lg hover:bg-[#BDE0FE] dark:hover:bg-[#FFD6A5] transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#FFC8DD] dark:border-[#FFD6A5] text-[#1F2933] dark:text-[#F0EFE9] text-sm font-semibold rounded-lg bg-white dark:bg-[#181C27] hover:bg-[#FFC8DD]/20 dark:hover:bg-[#FFD6A5]/10 transition-colors"
                >
                  View Experience
                </Link>
                <a
                  href={resumeHref}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#ECECEC] dark:border-[#252B3B] text-[#1F2933] dark:text-[#F0EFE9] text-sm font-semibold rounded-lg bg-white dark:bg-[#181C27] hover:border-[#A2D2FF] dark:hover:border-[#FDFFB6] transition-colors"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-5">
                <a href={personal.youtube} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#1F2933]/50 dark:text-[#8892AA] hover:text-[#5B9EC8] dark:hover:text-[#FDFFB6] transition-colors font-medium">
                  <YoutubeIcon /> YouTube
                </a>
                <span className="text-[#ECECEC] dark:text-[#252B3B]">|</span>
                <a href={personal.linkedin} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#1F2933]/50 dark:text-[#8892AA] hover:text-[#5B9EC8] dark:hover:text-[#FDFFB6] transition-colors font-medium">
                  <LinkedinIcon /> LinkedIn
                </a>
                <span className="text-[#ECECEC] dark:text-[#252B3B]">|</span>
                <a href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#1F2933]/50 dark:text-[#8892AA] hover:text-[#5B9EC8] dark:hover:text-[#FDFFB6] transition-colors font-medium">
                  <Mail size={13} /> Email
                </a>
              </div>
            </div>

            {/* Right: headshot */}
            <div className="flex justify-center md:justify-end md:flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl opacity-40 blur-xl"
                  style={{ background: 'linear-gradient(135deg, #A2D2FF 0%, #FFC8DD 100%)' }} />
                <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full opacity-30"
                  style={{ backgroundColor: '#FFC8DD' }} />
                <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full opacity-25"
                  style={{ backgroundColor: '#A2D2FF' }} />
                <img
                  src="/assets/profile/headshot.jpg"
                  alt="Courtney Stokes headshot"
                  className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover shadow-lg border-4 border-white dark:border-[#181C27]"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fb = e.currentTarget.nextElementSibling as HTMLElement
                    if (fb) fb.style.display = 'flex'
                  }}
                />
                <div
                  className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-2xl border-4 border-white dark:border-[#181C27] shadow-lg items-center justify-center text-4xl font-bold text-[#5B9EC8] hidden"
                  style={{ background: 'linear-gradient(135deg, #BDE0FE 0%, #FFC8DD 100%)' }}
                >
                  CS
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex items-center gap-2 text-[#1F2933]/25 dark:text-[#F0EFE9]/20">
            <ArrowDown size={14} className="animate-bounce" />
            <span className="text-xs">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* ── Recent Posts ─────────────────────────────────── */}
      <RecentPosts />

      {/* ── Campus Involvement ───────────────────────────── */}
      <Involvement />

      {/* ── Explore More ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-white dark:bg-[#181C27] transition-colors duration-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#A2D2FF] dark:bg-[#FDFFB6]" />
            <span className="text-[#5B9EC8] dark:text-[#FDFFB6] text-sm font-semibold uppercase tracking-widest">
              Explore
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] dark:text-[#F0EFE9] mb-10">
            Explore More
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {exploreTiles.map((tile) => (
              <Link
                key={tile.to}
                to={tile.to}
                className="group flex flex-col gap-2 p-5 bg-[#FFFDF7] dark:bg-[#0F1117] border border-[#ECECEC] dark:border-[#252B3B] rounded-xl hover:shadow-sm transition-all hover:border-[#A2D2FF] dark:hover:border-[#FDFFB6]"
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tile.color }} />
                <span className="font-semibold text-[#1F2933] dark:text-[#F0EFE9] text-sm group-hover:text-[#5B9EC8] dark:group-hover:text-[#FDFFB6] transition-colors">
                  {tile.label}
                </span>
                <span className="text-xs text-[#6B7280] dark:text-[#8892AA]">{tile.sub}</span>
                <ArrowUpRight size={13} className="text-[#ECECEC] dark:text-[#252B3B] group-hover:text-[#5B9EC8] dark:group-hover:text-[#FDFFB6] transition-colors mt-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
