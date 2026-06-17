export default function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#ECECEC] dark:border-[#252B3B]">
      <p className="text-xs text-[#1F2933]/30 dark:text-[#9AA0B8]/50">Built by Courtney Stokes</p>
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#BDE0FE]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFC8DD]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFD6A5]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FDFFB6] border border-[#ECECEC] dark:border-[#252B3B]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#A2D2FF]" />
      </div>
    </div>
  )
}
