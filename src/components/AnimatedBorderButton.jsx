import { Download, FileUser } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function AnimatedBorderButton() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={isHovering ? { opacity: 1, y: 50 } : { opacity: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <FileUser />
      </motion.div>

      <button
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible cursor-pointer"
      >
        <span className="flex">
          <Download />
          &nbsp; Download CV
        </span>
      </button>
    </div>
  );
}
