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
    <div className="w-1/2 pt-64">
      <div className="bg-[#141B24]">
        <div className="bg-[#282C34] w-1/3 text-sm text-center p-1 text-[#A1A2A7]">
          {current.filename}
        </div>
      </div>
      <SyntaxHighlighter
        language={current.language}
        style={oneDark}
        showLineNumbers
        customStyle={{ margin: 0, height: '300px', overflow: 'hidden' }}
      >
        {current.code}
      </SyntaxHighlighter>
    </div>
  );
}
