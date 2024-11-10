import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Documentation() {
  const [content, setContent] = useState('');

  useEffect(() => {
    // In a real app, this would fetch from your docs directory
    fetch('/docs/getting-started.md')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading documentation:', error));
  }, []);

  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <article className="prose dark:prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              code({inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={tomorrow}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-lg"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              h1: (props) => <h1 className="text-4xl font-bold mb-6" {...props} />,
              h2: (props) => <h2 className="text-3xl font-bold mt-12 mb-4" {...props} />,
              h3: (props) => <h3 className="text-2xl font-bold mt-8 mb-3" {...props} />,
              p: (props) => <p className="mb-4 text-gray-700 dark:text-gray-300" {...props} />,
              ul: (props) => <ul className="list-disc pl-6 mb-4" {...props} />,
              ol: (props) => <ol className="list-decimal pl-6 mb-4" {...props} />,
              a: (props) => (
                <a 
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  {...props}
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
