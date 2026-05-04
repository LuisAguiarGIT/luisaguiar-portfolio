import { Download } from 'lucide-react';

export default function AnimatedBorderButton() {
  return (
    <div className="flex items-center justify-center">
      <a href="/luis-aguiar-cv.pdf" target="_blank" rel="noopener noreferrer">
        <div className="w-full animate-rotate-border max-w-sm rounded-full bg-conic/[from_var(--border-angle)] from-primary-subtle via-secondary to-primary-subtle from-80% via-90% to-100% p-px transition-all hover:scale-105">
          <div className="px-8 py-4 bg-primary-subtle text-lg font-medium rounded-full overflow-visible cursor-pointer">
            <span className="flex">
              <Download /> &nbsp; Download CV
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
