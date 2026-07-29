import { useState, useEffect, useRef } from 'react';
import { skills } from '../data/projects';

function SkillBar({ name, level, index, isVisible }: { name: string; level: number; index: number; isVisible: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300">{name}</span>
        <span className="text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${index * 100}ms`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ title, items, delay = 0 }: { title: string; items: { name: string; level: number }[]; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm">
          {title[0]}
        </span>
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <SkillBar
            key={item.name}
            name={item.name}
            level={item.level}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const categories = [
    { title: '编程语言', data: skills.languages },
    { title: '框架&平台', data: skills.frameworks },
    { title: '工具&数据库', data: skills.tools },
    { title: 'AI & 语音', data: skills.ai },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            技术技能 <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            熟悉多种编程语言、框架和工具，能够独立完成从后端到前端的全栈开发
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              items={category.data}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6">其他技术栈</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['GitHub', 'Docker', 'Vercel', '火山引擎', 'Nginx', 'Linux', 'REST API', 'WebSocket'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-300 border border-slate-700/50 hover:border-primary/50 hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
