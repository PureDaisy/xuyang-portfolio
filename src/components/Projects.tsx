import { useState, useEffect, useRef } from 'react';
import { projects, Project } from '../data/projects';

type SelectedVideo = {
  title: string;
  label: string;
  src: string;
};

function ProjectCard({
  project,
  index,
  onOpenVideo,
}: {
  project: Project;
  index: number;
  onOpenVideo: (video: SelectedVideo) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statusColors = {
    live: 'bg-green-100 text-green-600',
    archived: 'bg-gray-100 text-gray-500',
    development: 'bg-yellow-100 text-yellow-600',
  };

  const statusLabels = {
    live: '运营中',
    archived: '已归档',
    development: '开发中',
  };

  const icons: Record<string, string> = {
    'cartoon-story-watch': '⌚',
    'realtime-communication': '📱',
    'chatbill': '💬',
    'aidating': '💕',
    'echoflow': '🌊',
    'aiteach': '📚',
  };

  return (
    <div
      ref={cardRef}
      className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Project Image/Preview */}
      <div className="h-40 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #f3e8ff 100%)' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl opacity-60 group-hover:scale-110 transition-transform duration-300">
            {icons[project.id]}
          </span>
        </div>
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mb-3">{project.titleEn}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4">
          {project.highlights.slice(0, 2).map((highlight, i) => (
            <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              {highlight}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
          {project.download && (
            <a
              href={project.download}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-green-600 hover:text-green-700 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              下载 APK
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-600 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              访问网站
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              源码
            </a>
          )}
          {project.demoVideos?.map((video) => (
            <button
              key={video.src}
              type="button"
              onClick={() =>
                onOpenVideo({
                  title: project.title,
                  label: video.label,
                  src: `${import.meta.env.BASE_URL}${video.src}`,
                })
              }
              className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-600 transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.006v5.988a1 1 0 001.555.832l5.197-2.961a1 1 0 000-1.697z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {video.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo | null>(null);

  return (
    <section id="projects" className="py-24" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">
            项目作品
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            做过的一些项目，有些已经上线跑着了，有些是探索性质的小作品
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenVideo={setSelectedVideo}
            />
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-gray-900/70 px-4 py-8 flex items-center justify-center"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-gray-100">
              <div>
                <p className="text-sm text-blue-500 font-medium">{selectedVideo.label}</p>
                <h3 className="text-lg font-semibold text-gray-800">{selectedVideo.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors flex items-center justify-center"
                aria-label="关闭视频"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <video
              key={selectedVideo.src}
              className="w-full bg-black max-h-[75vh]"
              src={selectedVideo.src}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}
