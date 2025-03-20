"use client";
import Link from "next/link"
import { ArrowRight, BookOpen, Code, Github, Linkedin, Mail, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpen className="h-12 w-8 text-purple-500" />
          <span className="font-serif text-xl font-bold">Niranjhan SU</span>
        </div>
        <nav className="hidden md:flex gap-10 text-xl">
          <Link href="#about" className="hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-purple-400 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-purple-400 transition-colors">
            Projects
          </Link>
        </nav>
        <Button
          variant="outline"
          className="border-purple-500 text-purple-500 hover:bg-purple-950 px-4 py-2 rounded-lg cursor-pointer"
          onClick={() => window.open('/resume.pdf', '_blank')}
        >
          Resume
        </Button>
      </header>
      <main>
        <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
              Backend Developer & <span className="text-purple-500">Algorithm Designer</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              I build robust server-side programs, automations and solve problems with efficient algorithms.
            </p>
            <div className="flex gap-4 justify-center">
            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => {
                const random = Math.floor(Math.random() * 2);
                const url =
                  random === 0
                    ? "https://github.com/DrunkenCloud?tab=repositories"
                    : "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                window.open(url, "_blank");
              }}
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </div>
          </div>
        </section>

        <section id="about" className="bg-slate-900 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500">
                <img src="/images/my_image.jpg" alt="Profile" className="object-cover w-full h-full" />
              </div>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg text-slate-300 mb-6">
                  I'm a backend developer with a strong focus on algorithm design and optimization. I enjoy seeing clean solutions
                  to what seem to be complex problems.
                </p>
                <p className="text-lg text-slate-300 mb-6">
                  My background in computer science alongside my interest in CTFs and Programming Language Development lead me to ceeate some
                  efficient and robust code when programming.
                </p>
                <div className="flex gap-4">
                  <div
                    className="rounded-full border border-slate-700 p-2 cursor-pointer"
                    onClick={() => window.open("https://github.com/DrunkenCloud", "_blank")}
                  >
                    <Github className="h-5 w-5" />
                  </div>
                  <div
                    className="rounded-full border border-slate-700 p-2 cursor-pointer"
                    onClick={() => window.open("https://linkedin.com/in/niranjhan-su", "_blank")}
                  >
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div
                    className="rounded-full border border-slate-700 p-2 cursor-pointer"
                    onClick={() => window.location.href = "mailto:niranjhansu@gmail.com"}
                  >
                    <Mail className="h-5 w-5" />
                  </div>
                  <div
                    className="rounded-full border border-slate-700 p-2 cursor-pointer"
                    onClick={() => window.open("https://leetcode.com/drunkencloud9", "_blank")}
                  >
                    <img src="/leetcode.svg" alt="LeetCode" className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Server className="h-12 w-12 text-purple-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white">Backend Development</h3>
                    <p className="text-slate-400">
                      Building robust, scalable server-side applications with a focus on performance and security.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Code className="h-12 w-12 text-purple-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white">Algorithm Design</h3>
                    <p className="text-slate-400">
                      Creating efficient algorithms to solve complex problems with optimal time and space complexity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <SkillBadge name="C/C++" />
              <SkillBadge name="Python" />
              <SkillBadge name="Node.js" />
              <SkillBadge name="Java" />
              <SkillBadge name="SQL" />
              <SkillBadge name="PyQt" />
              <SkillBadge name="Git" />
              <SkillBadge name="Flask" />
              <SkillBadge name="Django" />
              <SkillBadge name="MongoDB" />
              <SkillBadge name="Fast API" />
              <SkillBadge name="Docker" />
              <SkillBadge name="Android Studio" />
              <SkillBadge name="Beautiful Soup" />
            </div>
          </div>
        </section>

        <section id="projects" className="bg-slate-900 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Portfolio Website"
                description="A TypeScript-based personal portfolio showcasing my works, skills and interests."
                tags={["TypeScript", "React", "Tailwind", "NextJS"]}
                repoUrl="https://github.com/DrunkenCloud/portfolio"
              />

              <ProjectCard
                title="Lox Interpreter"
                description="Interpreters made in Java and C for the Lox Programming languages, which use a AST method and Virtual Machine method respectively."
                tags={["C", "Compilers", "Interpreters", "Virtual Machine"]}
                repoUrl="https://github.com/DrunkenCloud/interpreter_lox"
              />

              <ProjectCard
                title="Wombra"
                description="A a cross-platform application for scraping, storing, and reading web novels offline via a mobile app, desktop app and web app."
                tags={["Python", "Web Scraping", "PyQt", "Android Studio", "Flask"]}
                repoUrl="https://github.com/DrunkenCloud/wombra"
              />

              <ProjectCard
                title="Spotify to YouTube Playlist"
                description="Tool made to migrate a large Spotify playlist (1000+ songs to YouTube automatically."
                tags={["Python", "Automation", "Music" ,"APIs"]}
                repoUrl="https://github.com/DrunkenCloud/SpotifyPlaylistToYoutube"
              />

              <ProjectCard
                title="Mouz - Maze Game"
                description="A simple maze game made in Java for some fun, includes automatic Maze Generation and Solution."
                tags={["Java", "Game Development", "Algorithms"]}
                repoUrl="https://github.com/DrunkenCloud/mouz"
              />

              <ProjectCard
                title="Fou - Text Editor"
                description="A simple text editor made in C with basic features which functions on the terminal like Vim."
                tags={["C", "Text Editing", "Minimalist Design"]}
                repoUrl="https://github.com/DrunkenCloud/fou_text_editor"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <div
                className="rounded-full border border-slate-700 p-2 cursor-pointer"
                onClick={() => window.open("https://github.com/DrunkenCloud", "_blank")}
              >
                <Github className="h-5 w-5" />
              </div>
              <div
                className="rounded-full border border-slate-700 p-2 cursor-pointer"
                onClick={() => window.open("https://linkedin.com/in/niranjhan-su", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </div>
              <div
                className="rounded-full border border-slate-700 p-2 cursor-pointer"
                onClick={() => window.location.href = "mailto:niranjhansu@gmail.com"}
              >
                <Mail className="h-5 w-5" />
              </div>
            </div>
          <p className="text-slate-400">© {new Date().getFullYear()} Niranjhan SU. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}