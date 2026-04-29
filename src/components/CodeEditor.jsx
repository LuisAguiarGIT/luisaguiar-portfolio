import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState, useEffect } from 'react';
import snippets from '../assets/snippets';

export default function CodeEditor() {
  const [index, setIndex] = useState(0);
  const current = snippets[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % snippets.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full object-cover">
      <div className="bg-[#141B24] p-1.5 rounded-t-md border-b-2 border-[#243041]">
        <div className="flex justify-between">
          <div className="flex gap-1.5 items-center pl-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-300/80" />
            <div className="w-3 h-3 rounded-full bg-green-600/80" />
          </div>
          <div className="w-1/4 text-xs text-center p-1 text-[#A1A2A7]/80">
            {current.filename}
          </div>
        </div>
      </div>
      <SyntaxHighlighter
        language={current.language}
        style={oneDark}
        showLineNumbers
        customStyle={{
          margin: 0,
          height: '450px',
          overflowY: 'hidden',
          borderRadius: '0 0 6px 6px',
          opacity: '0.5',
          transition: 'all 200ms',
        }}
      >
        {current.code}
      </SyntaxHighlighter>
    </div>
  );
}
