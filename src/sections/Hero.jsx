import CodeEditor from '@/components/CodeEditor';
import cyberpunkBg from '@/assets/cyberpunk_hero_bg.svg';
import { motion } from 'motion/react';
import Button from '@/components/Button';
import { ArrowRight, Crosshair } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnimatedBorderButton from '@/components/AnimatedBorderButton';
import { Marquee } from '@/components/Marquee';
import skillsData from '@/assets/skills.json';

const dots = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  xDrift: (Math.random() - 0.5) * 40,
  yDrift: (Math.random() - 0.5) * 40,
  duration: 2 + Math.random() * 4,
}));

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 10 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={cyberpunkBg}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-20"
            style={{
              backgroundColor: '#EAB4EC',
              left: dot.left,
              top: dot.top,
            }}
            animate={{
              x: dot.xDrift,
              y: dot.yDrift,
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-6 pt-32 pb-20 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Computer Engineer{' '}
                <span className="text-highlight">● FullStack Developer</span>
              </span>
            </motion.div>
            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                variants={item}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight "
              >
                <span className="flex items-baseline">
                  Precisi
                  <Crosshair className="text-primary h-12 w-12 hover:rotate-90 hover:scale-110 transition-all" />
                  n
                </span>
                engineering with{' '}
                <span className="text-primary glow-text">care</span>
              </motion.h1>
              <motion.p
                variants={item}
                className="text-lg text-muted-foreground max-w-lg"
              >
                Hi, I'm Luís Aguiar, a Computer Engineer specializing in .NET
                and SQL, with experience in enterprise systems and modern
                frontend development (React, TypeScript).
              </motion.p>
            </div>
            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg">
                  Contact me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <AnimatedBorderButton />
            </motion.div>
            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: FaGithub, href: 'https://github.com/LuisAguiarGIT' },
                {
                  icon: FaLinkedin,
                  href: 'https://www.linkedin.com/in/luis-aguiar-71b107239',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Code Editor */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            className="relative"
          >
            <div className="relative max-w-full mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <CodeEditor />
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      4+ years of professional experience
                    </span>
                  </div>
                </motion.div>
                {/* Stats Badge */}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <Marquee skills={skillsData.skills} speed={1} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
