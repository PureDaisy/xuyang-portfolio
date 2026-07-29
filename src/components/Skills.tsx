import { skills } from '../data/projects';

export default function Skills() {
  const categories = [
    { title: '语言', data: skills.languages },
    { title: '框架与平台', data: skills.frameworks },
    { title: '工程工具', data: skills.tools },
    { title: 'AI 与语音', data: skills.ai },
  ];

  return (
    <section id="skills" className="content-section skills-section">
      <div className="page-shell">
        <div className="section-heading">
          <h2>技术与工具</h2>
          <p>按工作内容组织，而不是用虚构的熟练度数字定义能力。</p>
        </div>

        <div className="skills-grid">
          {categories.map((category) => (
            <div className="skill-group" key={category.title}>
              <h3>{category.title}</h3>
              <p>{category.data.map((item) => item.name).join(' / ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
