import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from 'motion/react';

export function Marquee({ skills, speed = 100 }) {
  const baseX = useMotionValue(0);
  const containerRef = useRef(null);

  useAnimationFrame((_, delta) => {
    let moveBy = -(speed * delta) / 1000;
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${v % 50}%`);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div style={{ x }} className="flex w-max">
        {[...skills, ...skills].map((skill, i) => (
          <div key={i} className="shrink-0 px-8 py-4">
            <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              {skill}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
