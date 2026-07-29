import { useState, useEffect, useRef } from 'react';
import { skills } from '../data/projects';

function SkillBar({ name, level, index, isVisible }: { name: string; level: number; index: number; isVisible: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${index * 100}ms`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ title, items, delay = 0, emoji }: { title: string; items: { name: string; level: number }[]; delay: number; emoji: string }) {
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
      className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-2xl">{emoji}</span>
        {title}
      </h3>
      <div className="space-y-5">
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
    { title: '编程语言', emoji: '⌨️', data: skills.languages },
    { title: '框架&平台', emoji: '🛠️', data: skills.frameworks },
    { title: '工具&数据库', emoji: '⚙️', data: skills.tools },
    { title: 'AI & 语音', emoji: '🤖', data: skills.ai },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">
            技术栈
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            写代码这些年积累的一些技能
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
              emoji={category.emoji}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
