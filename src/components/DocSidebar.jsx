import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function DocSidebar() {
  const [config, setConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetch('/docs/config.json')
      .then(response => response.json())
      .then(data => {
        setConfig(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading docs configuration:', error);
        setIsLoading(false);
      });
  }, []);

  const isActivePath = (path) => {
    const currentPath = location.pathname.replace('/docs/', '');
    return currentPath === path.replace('.md', '');
  };

  if (isLoading) {
    return (
      <div className="w-64 p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>
        </div>
      </div>
    );
  }

  if (!config) {
    return null;
  }

  return (
    <nav className="w-64 p-4 border-r border-gray-200 dark:border-gray-700 h-full overflow-y-auto">
      <div className="space-y-8 sticky top-4">
        {config.sidebar.map((section, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => {
                const isActive = isActivePath(item.path);
                return (
                  <li key={itemIndex}>
                    <Link
                      to={`/docs/${item.path.replace('.md', '')}`}
                      className={`block px-2 py-1 rounded-md text-sm ${
                        isActive
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
