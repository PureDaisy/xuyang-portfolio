import { useEffect, useState } from 'react';
import { Project, projects } from '../data/projects';

type SelectedVideo = {
  title: string;
  label: string;
  src: string;
};

const statusLabels: Record<Project['status'], string> = {
  live: '运营中',
  archived: '已归档',
  development: '开发中',
};

function ProjectActions({
  project,
  onOpenVideo,
}: {
  project: Project;
  onOpenVideo: (video: SelectedVideo) => void;
}) {
  return (
    <div className="project-actions">
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          访问网站
        </a>
      )}
      {project.download && (
        <a href={project.download} target="_blank" rel="noopener noreferrer">
          下载 APK
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          查看源码
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
        >
          观看{video.label}
        </button>
      ))}
    </div>
  );
}

function FeaturedProject({
  project,
  index,
  onOpenVideo,
}: {
  project: Project;
  index: number;
  onOpenVideo: (video: SelectedVideo) => void;
}) {
  return (
    <article className="featured-project">
      <div className="project-visual">
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={`${project.title} 项目界面`}
          loading="lazy"
          width="1920"
          height="900"
        />
      </div>

      <div className="project-copy">
        <div className="project-meta">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>{statusLabels[project.status]}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.titleEn}</p>
        <p className="project-description">{project.description}</p>
        <ul className="project-highlights" aria-label={`${project.title} 技术亮点`}>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <p className="project-stack">{project.tags.join(' / ')}</p>
        <ProjectActions project={project} onOpenVideo={onOpenVideo} />
      </div>
    </article>
  );
}

function ProjectIndex({
  project,
  index,
  onOpenVideo,
}: {
  project: Project;
  index: number;
  onOpenVideo: (video: SelectedVideo) => void;
}) {
  return (
    <article className="project-index-item">
      <div className="project-index-number">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="project-index-main">
        <div className="project-index-title">
          <h3>{project.title}</h3>
          <span>{statusLabels[project.status]}</span>
        </div>
        <p>{project.description}</p>
        <p className="project-stack">{project.tags.join(' / ')}</p>
        <ProjectActions project={project} onOpenVideo={onOpenVideo} />
      </div>
    </article>
  );
}

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo | null>(null);
  const activeProjects = projects.filter((project) => project.status !== 'archived');
  const archivedProjects = projects.filter((project) => project.status === 'archived');

  useEffect(() => {
    if (!selectedVideo) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedVideo(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedVideo]);

  return (
    <section id="projects" className="content-section projects-section">
      <div className="page-shell">
        <div className="section-heading">
          <h2>项目作品</h2>
          <p>优先展示仍在运营、可以下载或在线体验的产品。</p>
        </div>

        <div className="project-index active-projects">
          <h3 className="project-index-heading">正在运营</h3>
          {activeProjects.map((project, index) => (
            <ProjectIndex
              key={project.id}
              project={project}
              index={index}
              onOpenVideo={setSelectedVideo}
            />
          ))}
        </div>

        <div className="archive-projects">
          <div className="archive-heading">
            <h3>过往项目</h3>
            <p>已经停止维护，但保留为产品与工程实践记录。</p>
          </div>
          <div className="featured-list">
          {archivedProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={activeProjects.length + index}
              onOpenVideo={setSelectedVideo}
            />
          ))}
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div
          className="video-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedVideo.title} ${selectedVideo.label}`}
          onClick={() => setSelectedVideo(null)}
        >
          <div className="video-dialog" onClick={(event) => event.stopPropagation()}>
            <div className="video-header">
              <div>
                <p>{selectedVideo.label}</p>
                <h3>{selectedVideo.title}</h3>
              </div>
              <button type="button" onClick={() => setSelectedVideo(null)}>
                关闭
              </button>
            </div>
            <video
              key={selectedVideo.src}
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
