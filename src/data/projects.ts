export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  status: 'live' | 'archived' | 'development';
  link?: string;
  github?: string;
  image?: string;
  download?: string;
  demoVideos?: {
    label: string;
    src: string;
  }[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'cartoon-story-watch',
    title: 'ai故事讲述（软硬件）',
    titleEn: 'Cartoon Story Watch',
    description: '面向少儿的AI口语陪练应用，支持实时语音对话、语音选课、故事跟读练习。',
    descriptionEn: 'An AI oral English training app for children.',
    tags: ['Android', 'Java', '火山引擎RTC', 'ASR', 'TTS', 'ESP32'],
    status: 'live',
    download: 'https://github.com/PureDaisy/xuyang-portfolio/releases/download/apk',
    demoVideos: [
      { label: '硬件演示', src: 'video/ai故事硬件玩具.mp4' },
      { label: '软件演示', src: 'video/ai故事软件.mp4' },
    ],
    highlights: [
      'RTC实时双向语音对话',
      '「豆芽豆芽」语音唤醒',
      '火山引擎ASR/TTS集成'
    ]
  },
  {
    id: 'realtime-communication',
    title: 'ai口语陪练',
    titleEn: 'Realtime Communication',
    description: '基于英语课程的实时口语通信应用，语音识别、语义理解、TTS合成的全链路语音交互。',
    descriptionEn: 'A multilingual real-time voice communication app.',
    tags: ['Android', 'Java', 'RTC', 'ASR', 'LLM'],
    status: 'live',
    download: 'https://github.com/PureDaisy/xuyang-portfolio/releases/tag/apk',
    highlights: [
      '多语言实时语音识别',
      'LLM语义理解集成',
      '实时语音合成反馈'
    ]
  },
  {
    id: 'chatbill',
    title: 'ChatBill',
    titleEn: 'ChatBill',
    description: '跨平台智能对话与提醒应用，支持语音对话、智能提醒、聊天记录管理。',
    descriptionEn: 'A cross-platform smart chat and reminder app.',
    tags: ['Flutter', 'Dart', '跨平台', '语音交互'],
    status: 'live',
    download: 'https://github.com/PureDaisy/xuyang-portfolio/releases/download/apk',
    highlights: [
      'Flutter跨平台开发',
      '语音交互能力',
      '智能提醒系统'
    ]
  },
  {
    id: 'aidating',
    title: 'AI Dating',
    titleEn: 'AI Dating Platform',
    description: 'AI驱动的社交平台后端系统，用户管理、匹配算法、聊天服务。',
    descriptionEn: 'An AI-powered social platform backend.',
    tags: ['Python', 'FastAPI', 'MySQL', 'Docker', 'React'],
    status: 'archived',
    image: 'web png/ai dating.png',
    highlights: [
      'FastAPI高性能后端',
      'Docker容器化部署',
      '用户匹配推荐算法'
    ]
  },
  {
    id: 'echoflow',
    title: 'EchoFlow',
    titleEn: 'EchoFlow',
    description: '智能社交平台，AI Agent、语义搜索、知识库、实时聊天。',
    descriptionEn: 'An intelligent social platform.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'pgvector'],
    status: 'archived',
    image: 'web png/echoflow.png',
    highlights: [
      'AI Agent对话系统',
      'pgvector语义搜索',
      '知识库管理'
    ]
  },
  {
    id: 'aiteach',
    title: 'AITeach',
    titleEn: 'AITeach',
    description: '在线教育平台，AI辅助教学内容管理和学习追踪，服务数千名用户。',
    descriptionEn: 'An online education platform.',
    tags: ['Vue 3', 'Python', 'MySQL', '在线运营'],
    status: 'live',
    link: 'https://yx.zqyey.com.cn/',
    highlights: [
      'Vue 3现代前端',
      'AI教学辅助功能',
      '服务数千名用户'
    ]
  }
];

export const skills = {
  languages: [
    { name: 'Python', level: 95 },
    { name: 'Java', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'Dart', level: 75 },
    { name: 'SQL', level: 85 },
  ],
  frameworks: [
    { name: 'FastAPI', level: 90 },
    { name: 'React', level: 80 },
    { name: 'Vue 3', level: 85 },
    { name: 'Flutter', level: 75 },
    { name: 'Android', level: 85 },
  ],
  tools: [
    { name: 'Docker', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'Redis', level: 80 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 85 },
  ],
  ai: [
    { name: 'LLM集成', level: 90 },
    { name: 'RTC实时通信', level: 90 },
    { name: 'ASR/TTS', level: 85 },
    { name: 'Agent开发', level: 90 },
    { name: 'pgvector', level: 80 },
  ]
};
