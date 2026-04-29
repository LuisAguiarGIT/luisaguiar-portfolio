import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio',
    description:
      'A responsive personal portfolio built to showcase my work, skills, and approach. Designed with a focus on clean UI, performance, and clear structure.',
    image: '/projects/portfolio.png',
    tags: ['React', 'Javascript', 'Tailwind CSS', 'Vite'],
    link: '#',
    github: 'https://github.com/LuisAguiarGIT/luisaguiar-portfolio',
  },
  {
    title: 'Fitness Tracker',
    description:
      'A fitness-focused application for tracking workouts and progress. Built to provide a simple, intuitive experience while managing routines and performance data.',
    image: '/projects/fitness.png',
    tags: [
      'NextJS',
      'Prisma',
      'PostgreSQL',
      'React',
      'Typescript',
      'Tailwind CSS',
    ],
    link: '#',
    github: 'https://github.com/LuisAguiarGIT/myFitness',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* BG glows */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
      {/* Section header */}
      <div className="text-center mx-auto max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
          Featured Work
        </span>
        <p className="text-muted-foreground mt-8 mb-8">
          A selection of my recent work, to showcase my skills outside of my
          regular work cycle.
        </p>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group glass rounded-2xl overflow-hidden md:row-span-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video group-hover:scale-110 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
