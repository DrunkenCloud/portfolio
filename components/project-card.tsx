import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  repoUrl?: string
  demoUrl?: string
}

export function ProjectCard({ title, description, tags, repoUrl, demoUrl }: ProjectCardProps) {
  const githubPreview = repoUrl
    ? `https://opengraph.githubassets.com/1/${repoUrl.split("/").slice(-2).join("/")}`
    : "/placeholder.svg";

  return (
    <Card className="bg-slate-800 border-slate-700 overflow-hidden flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img
          src={githubPreview}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>

      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold mb-2 text-white">{title}</h3>
        <p className="text-slate-400 mb-4 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-slate-700 text-purple-400 rounded text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-auto">
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" size="sm" className="border-slate-600 w-full">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}  