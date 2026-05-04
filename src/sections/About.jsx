import { Code2, BrainCircuit, Users, BookText } from 'lucide-react';
import { motion } from 'motion/react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description:
      'Focused on clarity, scalability, and long-term maintainability.',
  },
  {
    icon: BrainCircuit,
    title: 'Adaptability',
    description:
      'Comfortable working with both modern solutions and legacy setups.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Professional who works effectively both independently and in team environments. Strong sense of ownership, communication, and collaboration. Focused on delivering consistent, high-quality results.',
  },
  {
    icon: BookText,
    title: 'Documentation',
    description: 'Creating clear, concise, and useful documentation.',
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      duration: 0.4,
      scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};

export default function About() {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              <span>About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-highlight">
              Adaptable to all your requirements
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Computer engineer experienced in
                building reliable, high-performance applications across both
                legacy and modern stacks.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;With a strong foundation in .NET/C# and
                Microsoft SQL Server, I’ve spent several years developing and
                maintaining enterprise systems, including work with Dynamics CRM
                and SSIS. Alongside this, I build modern web applications using
                React, TypeScript, and Tailwind CSS.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;I’m comfortable adapting to new
                technologies quickly and enjoy solving complex problems, whether
                it’s improving existing systems or building new solutions from
                the ground up. I focus on writing clean, well-documented code
                that delivers real value to users and clients.
              </p>
            </div>
          </motion.div>
          {/* Right Column - Highlights */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid sm:grid-cols-2 gap-6 mt-8"
          >
            {highlights.map((item, i) => (
              <motion.div
                variants={child}
                key={i}
                className="glass p-6 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
