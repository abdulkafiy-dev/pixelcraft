import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Service Calculator',
    category: 'React / Dynamic UI',
    description: 'An interactive web app allowing users to calculate service pricing dynamically with real-time totals.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task & Workflow Manager',
    category: 'Web Application',
    description: 'A responsive task tracking application featuring interactive status updates and local storage state persistence.',
    tech: ['JavaScript', 'React', 'Local Storage'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Searchable Menu & Filter System',
    category: 'Frontend Component',
    description: 'A fast, client-side searchable and filterable menu system built for e-commerce and catalog sites.',
    tech: ['React', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            Portfolio
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Featured Projects & Case Studies
          </p>
          <p className="text-gray-600 text-base sm:text-lg">
            Explore live previews and source code for applications built with modern frontend technologies.
          </p>
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-700 font-mono px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between text-sm font-medium">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 transition"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 transition"
                >
                    Code <Code2 size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}