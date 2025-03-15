import Link from "next/link";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  categories: string[];
  link?: string;
  featured?: boolean;
  compact?: boolean;
}

export function BlogPost({
  title,
  date,
  excerpt,
  imageUrl,
  categories,
  link = "#",
  featured = false,
  compact = false,
}: BlogPostProps) {
  return compact ? (
    <Card className="bg-slate-800 border-slate-700 overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3">
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-40 sm:h-full object-cover" />
        </div>
        <CardContent className="p-4 sm:w-2/3">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <h3 className="font-serif font-bold text-lg mb-1 line-clamp-1">
            <Link href={link} className="hover:text-purple-400 transition-colors">
              {title}
            </Link>
          </h3>
          <p className="text-slate-400 text-sm line-clamp-2 mb-2">{excerpt}</p>
          <div className="flex flex-wrap gap-1">
            {categories.map((category, index) => (
              <Badge key={index} variant="outline" className="bg-purple-950/30 text-purple-300 border-purple-800 text-xs">
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  ) : (
    <Card className={cn(
      "bg-slate-800 border-slate-700 overflow-hidden h-full transition-all duration-300 hover:border-purple-500/50",
      featured && "md:col-span-2 lg:col-span-1"
    )}>
      <div className="relative">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className={cn("w-full object-cover", featured ? "h-64" : "h-48")} />
        <div className="absolute top-2 right-2 flex gap-1">
          {categories.map((category, index) => (
            <Badge key={index} className="bg-purple-600 hover:bg-purple-700">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <Calendar className="h-3 w-3" />
          <span>{date}</span>
        </div>
        <h3 className="font-serif font-bold text-xl mb-2">
          <Link href={link} className="group hover:text-purple-400 transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-slate-400 mb-4 line-clamp-3">{excerpt}</p>
        <Link href={link} className="text-purple-400 font-medium text-sm hover:text-purple-300 transition-colors inline-flex items-center">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </CardContent>
    </Card>
  );
}