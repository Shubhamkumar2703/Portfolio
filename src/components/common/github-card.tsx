import Link from "next/link";
import { Star, GitFork, ArrowUpRight } from "lucide-react";

interface GithubCardProps {
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
  language: string;
}

export default function GithubCard({
  name,
  description,
  stars,
  forks,
  url,
  language,
}: GithubCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:-translate-y-2">
      
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold">
          {name}
        </h3>

        <Link
          href={url}
          target="_blank"
          className="text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>

      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-400">
        {description || "No description provided."}
      </p>

      <div className="mt-6 flex items-center justify-between">
        
        <span className="rounded-lg border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300">
          {language || "Code"}
        </span>

        <div className="flex items-center gap-4 text-sm text-zinc-400">
          
          <div className="flex items-center gap-1">
            <Star size={15} />
            {stars}
          </div>

          <div className="flex items-center gap-1">
            <GitFork size={15} />
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
}