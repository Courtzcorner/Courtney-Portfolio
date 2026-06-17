import { Mail, ArrowUpRight, Download } from 'lucide-react'
import { personal, resumeHref } from '../data/portfolio'

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
)

export default function Contact() {
  return (
    <section className="bg-white dark:bg-[#181C27] border-t border-[#ECECEC] dark:border-[#252B3B] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left */}
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-[#A2D2FF] dark:bg-[#FDFFB6]" />
              <span className="text-[#5B9EC8] dark:text-[#FDFFB6] text-xs font-semibold uppercase tracking-widest">
                Get in Touch
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F2933] dark:text-[#F0EFE9] mb-3">
              Let's Connect
            </h2>
            <p className="text-sm text-[#6B7280] dark:text-[#8892AA] leading-relaxed">
              I am always looking to learn from product managers, engineers, designers, and students
              building meaningful technology. I am especially interested in technical product
              management, fintech, AI-enabled tools, and products that help students make better
              decisions.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <ContactLink href={`mailto:${personal.email}`} icon={<Mail size={14} />} label="Email" />
            <ContactLink href={personal.youtube} icon={<YoutubeIcon />} label="YouTube" external />
            <ContactLink href={personal.linkedin} icon={<LinkedinIcon />} label="LinkedIn" external />
            <ContactLink href={personal.github} icon={<GithubIcon />} label="GitHub" external />
            <a
              href={resumeHref}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#A2D2FF] dark:bg-[#FDFFB6] text-[#1F2933] text-sm font-semibold rounded-lg hover:bg-[#BDE0FE] dark:hover:bg-[#FFD6A5] transition-colors mt-1"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ContactLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  external?: boolean
}

function ContactLink({ href, icon, label, external }: ContactLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="inline-flex items-center gap-2.5 text-sm font-medium text-[#1F2933]/70 dark:text-[#9AA0B8] hover:text-[#5B9EC8] dark:hover:text-[#FDFFB6] transition-colors group"
    >
      <span className="text-[#5B9EC8] dark:text-[#FDFFB6]">{icon}</span>
      {label}
      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  )
}
