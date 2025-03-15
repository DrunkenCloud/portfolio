import { BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface BookCardProps {
  title: string
  author: string
  imageUrl: string
  description?: string
}

export function BookCard({ title, author, imageUrl, description }: BookCardProps) {
  return (
    <Card className="bg-slate-800 border-slate-700 overflow-hidden h-full group">
      <div className="flex flex-col h-full">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-[200px] object-cover object-center"
          />
        </div>
        <CardContent className="p-4 flex flex-col flex-grow">
          <h3 className="font-serif font-bold text-lg mb-1 line-clamp-2">{title}</h3>
          <p className="text-purple-400 text-sm mb-2">by {author}</p>
          {description && <p className="text-slate-400 text-sm line-clamp-3">{description}</p>}
        </CardContent>
      </div>
    </Card>
  )
}

