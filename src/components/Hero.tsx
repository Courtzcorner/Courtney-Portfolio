import { ArrowDown, Mail } from 'lucide-react'
import { personal } from '../data/portfolio'
import RotatingGreeting from './RotatingGreeting'

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

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Two-column layout: text left, photo right */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">

          {/* ── Left column: all text content ── */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#A2D2FF]" />
              <span className="text-[#5B9EC8] text-sm font-semibold uppercase tracking-widest">
                Portfolio
              </span>
            </div>

            {/* Name / greeting heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1F2933] leading-none tracking-tight mb-5">
              {/* Stable label for screen readers */}
              <span className="sr-only">Hello, I'm Courtney.</span>

              {/*
               * Visual version — flex-row so ", I'm Courtney." slides
               * horizontally as the greeting container width animates,
               * exactly like the justinpoliachik.com reference.
               */}
              <span
                aria-hidden="true"
                className="flex flex-row items-baseline"
                style={{ flexWrap: 'nowrap' }}
              >
                <RotatingGreeting />
                <span style={{ whiteSpace: 'nowrap' }}>, I'm Courtney.</span>
              </span>
            </h1>

            {/* Headline */}
            <p className="text-xl md:text-2xl text-[#5B9EC8] font-medium mb-4">
              {personal.headline}
            </p>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-[#1F2933]/55 mb-6 max-w-xl leading-relaxed">
              {personal.subheadline}
            </p>

            {/* Divider */}
            <div className="w-16 h-[2px] bg-[#ECECEC] mb-6" />

            {/* Intro bullets */}
            <div className="flex flex-col gap-1.5 mb-8">
              {personal.introBullets.map((line) => (
                <p key={line} className="text-base md:text-lg text-[#1F2933]/80 font-medium leading-snug">
                  {line}
                </p>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-10">
              {personal.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[#BDE0FE]/50 text-[#3D7FA8] border border-[#BDE0FE]"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#A2D2FF] text-[#1F2933] text-sm font-semibold rounded-lg hover:bg-[#BDE0FE] transition-colors"
              >
                View Projects
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#FFC8DD] text-[#1F2933] text-sm font-semibold rounded-lg bg-white hover:bg-[#FFC8DD]/20 transition-colors"
              >
                View Experience
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href={personal.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#1F2933]/50 hover:text-[#5B9EC8] transition-colors font-medium"
              >
                <YoutubeIcon />
                YouTube
              </a>
              <span className="text-[#ECECEC]">|</span>
              <a
                href={personal.linkedin}
                className="inline-flex items-center gap-1.5 text-xs text-[#1F2933]/50 hover:text-[#5B9EC8] transition-colors font-medium"
              >
                <LinkedinIcon />
                LinkedIn
              </a>
              <span className="text-[#ECECEC]">|</span>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#1F2933]/50 hover:text-[#5B9EC8] transition-colors font-medium"
              >
                <Mail size={13} />
                Email
              </a>
            </div>
          </div>

          {/* ── Right column: headshot ── */}
          <div className="flex justify-center md:justify-end md:flex-shrink-0">
            <div className="relative">
              {/* Decorative background shapes */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-40 blur-xl"
                style={{ background: 'linear-gradient(135deg, #A2D2FF 0%, #FFC8DD 100%)' }}
              />
              <div
                className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full opacity-30"
                style={{ backgroundColor: '#FFC8DD' }}
              />
              <div
                className="absolute -top-3 -left-3 w-16 h-16 rounded-full opacity-25"
                style={{ backgroundColor: '#A2D2FF' }}
              />

              {/* Photo */}
              <img
                src="/assets/profile/headshot.jpg"
                alt="Courtney Stokes headshot"
                className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover shadow-lg border-4 border-white"
                onError={(e) => {
                  // Graceful fallback: show initials placeholder
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const fallback = target.nextElementSibling as HTMLElement
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              {/* Fallback if image not yet added */}
              <div
                className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-2xl border-4 border-white shadow-lg items-center justify-center text-4xl font-bold text-[#5B9EC8] hidden"
                style={{ background: 'linear-gradient(135deg, #BDE0FE 0%, #FFC8DD 100%)' }}
              >
                CS
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex items-center gap-2 text-[#1F2933]/25">
          <ArrowDown size={14} className="animate-bounce" />
          <span className="text-xs">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
