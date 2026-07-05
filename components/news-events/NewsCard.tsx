import Link from "next/link";
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Badge } from '@/components/ui/Badge';
import type { NewsPost } from '@/data/news';

export function NewsCard({ post }: { post: NewsPost }) {
  const date = new Date(post.date).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/news-events/news/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xs border border-navy-800/10 bg-parchment-100 shadow-card transition-shadow hover:shadow-cardHover"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <PlaceholderImage
          src={post.image}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 22vw, 45vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <Badge>{post.category}</Badge>
          <time dateTime={post.date} className="text-xs text-ink-muted">
            {date}
          </time>
        </div>
        <h3 className="font-display text-base leading-snug text-navy-800">{post.title}</h3>
        <p className="line-clamp-2 text-sm text-ink-light">{post.excerpt}</p>
      </div>
    </Link>
  );
}
