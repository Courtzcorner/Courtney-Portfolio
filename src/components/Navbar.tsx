import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Download, Sun, Moon } from 'lucide-react'
import { resumeHref } from '../data/portfolio'
import { useTheme } from '../context/ThemeContext'
import { asset } from '../utils/asset'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'PRDs', to: '/prds' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [avatarLoaded, setAvatarLoaded] = useState(true)
  const { theme, toggle } = useTheme()

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-[#5B9EC8] dark:text-[#FDFFB6]'
        : 'text-[#1F2933]/60 hover:text-[#5B9EC8] dark:text-[#9AA0B8] dark:hover:text-[#FDFFB6]'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF7]/95 dark:bg-[#0F1117]/95 backdrop-blur-sm border-b border-[#ECECEC] dark:border-[#252B3B]">
      <div
        className="h-[3px] w-full"
        style={{ background: 'linear-gradient(to right, #BDE0FE, #FFC8DD, #FFD6A5, #FDFFB6)' }}
      />

      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="Home">
          {avatarLoaded ? (
            <img
              src={asset('/assets/profile/notion-avatar.png')}
              alt="Courtney Stokes avatar"
              className="w-9 h-9 rounded-full object-cover border-2 border-[#ECECEC] dark:border-[#252B3B] shadow-sm group-hover:border-[#A2D2FF] dark:group-hover:border-[#FDFFB6] transition-colors"
              onError={() => setAvatarLoaded(false)}
            />
          ) : (
            <div
              className="w-9 h-9 rounded-full border-2 border-[#ECECEC] dark:border-[#252B3B] flex items-center justify-center text-xs font-bold text-[#5B9EC8] dark:text-[#FDFFB6] flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #BDE0FE 0%, #FFC8DD 100%)' }}
            >
              CS
            </div>
          )}
          <span className="text-[#1F2933] dark:text-[#F0EFE9] font-semibold text-base tracking-tight group-hover:text-[#5B9EC8] dark:group-hover:text-[#FDFFB6] transition-colors">
            Courtney Stokes
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-[#1F2933]/50 hover:text-[#5B9EC8] dark:text-[#9AA0B8] dark:hover:text-[#FDFFB6] hover:bg-[#F1F1F1] dark:hover:bg-[#1A1E2E] transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href={asset(resumeHref)}
            download
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#A2D2FF] dark:bg-[#FDFFB6] text-[#1F2933] text-sm font-semibold rounded-lg hover:bg-[#BDE0FE] dark:hover:bg-[#FFD6A5] transition-colors"
          >
            <Download size={13} />
            Resume
          </a>
        </div>

        {/* Mobile right side */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-[#1F2933]/50 dark:text-[#9AA0B8] transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-[#1F2933] dark:text-[#F0EFE9] hover:text-[#5B9EC8] dark:hover:text-[#FDFFB6] transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-[#FFFDF7] dark:bg-[#0F1117] border-t border-[#ECECEC] dark:border-[#252B3B] px-6 pb-5 pt-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium py-1 transition-colors ${
                  isActive
                    ? 'text-[#5B9EC8] dark:text-[#FDFFB6]'
                    : 'text-[#1F2933]/80 dark:text-[#9AA0B8] hover:text-[#5B9EC8] dark:hover:text-[#FDFFB6]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={asset(resumeHref)}
            download
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#A2D2FF] dark:bg-[#FDFFB6] text-[#1F2933] text-sm font-semibold rounded-lg hover:bg-[#BDE0FE] dark:hover:bg-[#FFD6A5] transition-colors w-fit mt-1"
          >
            <Download size={13} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}
