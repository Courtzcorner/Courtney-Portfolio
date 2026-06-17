import { ArrowUpRight } from 'lucide-react'
import { recentPosts, youtubeChannelUrl } from '../data/portfolio'

export default function RecentPosts() {
  return (
    <section id="posts" className="py-20 px-6 bg-[#FFFDF7] dark:bg-[#0F1117] transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px] bg-[#A2D2FF] dark:bg-[#FDFFB6]" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#6B7280] dark:text-[#8892AA]">
            Recent Posts
          </h2>
        </div>

        <ul className="divide-y divide-[#ECECEC] dark:divide-[#252B3B]">
          {recentPosts.map((post, i) => (
            <li key={i}>
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-6 py-5 transition-colors"
              >
                <span className="text-[#1F2933] dark:text-[#F0EFE9] font-semibold text-base md:text-lg leading-snug group-hover:text-[#5B9EC8] dark:group-hover:text-[#FDFFB6] transition-colors">
                  {post.title}
                </span>
                <time
                  dateTime={post.date}
                  className="shrink-0 text-sm text-[#6B7280] dark:text-[#8892AA] tabular-nums hidden sm:block"
                >
                  {post.date}
                </time>
              </a>
              <time
                dateTime={post.date}
                className="block sm:hidden text-xs text-[#6B7280] dark:text-[#8892AA] pb-3 -mt-2"
              >
                {post.date}
              </time>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-end">
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A0436A] dark:text-[#FFD6A5] hover:text-[#FFC8DD] dark:hover:text-[#FDFFB6] transition-colors"
          >
            YouTube Channel
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
