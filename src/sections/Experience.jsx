import { motion } from 'motion/react';

const experience = [
  {
    period: '2022 - Present',
    role: 'Application Engineer',
    company: 'Unipartner',
    description:
      'Delivered and maintained .NET-based solutions, integrating legacy systems with modern platforms through middleware and transformation layers. Worked across CRM, SQL, and SSIS to support business processes, resolve production issues, and ensure reliable data workflows. Built scalable integrations and automation solutions while adapting systems to evolving business and regulatory requirements.',
    technologies: [
      'C#',
      '.NET Framework',
      'ASP.NET Core',
      'Microsoft SQL',
      'SSIS',
      'Dynamics CRM',
      'Javascript',
    ],
    current: true,
  },
  {
    period: 'June 2021 - September 2021',
    role: 'Research Assistant',
    company: 'M-ITI',
    description:
      'Assisted in benchmarking AI solutions on embedded hardware (Raspberry Pi), gaining hands-on experience with performance evaluation and edge computing.',
    technologies: ['Python', 'Raspberry Pi OS'],
    current: false,
  },
  {
    period: '2017 - 2022',
    role: 'Bachelors in Computer Engineering',
    company: 'Universidade da Madeira',
    description: 'The start of my journey into programming',
    technologies: [
      'C++',
      'Java',
      'Assembly',
      'C#',
      'Python',
      'Javascript',
      'PHP',
      'MySQL',
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            My Journey
          </span>
          <p className="text-muted-foreground mt-6">
            A timeline of my growth, from an ambitious beginner to a junior
            engineer collabrating with teams and building products at scale.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          {/* Experience items */}
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className="relative grid md:grid-cols-2 gap-8">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>
                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className={`pl-8 md:pl-0 ${
                    i % 2 === 0
                      ? 'md:pr-16 md:text-right'
                      : 'md:col-start-2 md:pl-16'
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-primary font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
